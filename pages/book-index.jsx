const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { bookService } from './../services/book.service.js'

export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])


    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(booksToUpdate => setBooks(booksToUpdate))
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            showSuccessMsg('Book removed')
        })
    }

    return <section className='book-index'>
        <h1>Our books</h1>
        <div>
            <BookFilter onSetFilter={onSetFilter} />
            <hr />
            <Link to="/book/edit" className="btn add-btn">Add new book</Link>
            <BookList books={books} onRemoveBook={onRemoveBook} />
        </div>

    </section>
}