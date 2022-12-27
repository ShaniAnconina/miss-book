const { useState, useEffect } = React
const { useNavigate, useParams,Link } = ReactRouterDOM

import { bookService } from './../services/book.service.js';
import { eventBusService, showSuccessMsg } from "../services/event-bus.service.js"

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const { bookId } = useParams()
    useEffect(() => {
        if (!bookId) return
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBookToEdit(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        setBookToEdit((prevBook) => {
            return { ...prevBook, [field]: value }
        })
    }
    function handleChangePrice({ target }) {
        let { value } = target
        setBookToEdit((prevBook) => ({
            ...prevBook, listPrice: {
                ...prevBook.listPrice, amount: +value
            }
        }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then((book) => {
                showSuccessMsg('Book saved!')
                navigate('/book')
            })
    }

    return <section className="book-edit">
        <form onSubmit={onSaveBook}>
            <h1>{bookToEdit.id ? 'Edit this book' : 'Add a new book'}</h1>
            <label htmlFor="txt">Book name: </label>
            <input type="text"
                name="title"
                id="txt"
                placeholder="Enter book name"
                value={bookToEdit.title}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="price">Price: </label>
            <input type="number"
                name="price"
                id="price"
                placeholder="Enter price"
                value={bookToEdit.listPrice.amount}
                onChange={handleChangePrice}
            />
            <div>
                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
                <Link to="/book" className='btn'>Cancel</Link>
            </div>
        </form>
    </section >
}