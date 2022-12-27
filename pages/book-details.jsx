const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { AddReview } from "../cmps/add-review.jsx"
import { bookService } from "../services/book.service.js"
// import { LongTxt } from "../cmps/long-txt"

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }

    if (!book) return <div>Loading...</div>
    let pageCountText = bookService.getPageCountText(book)
    let timeFromPublished = bookService.getPublishedDate(book)
    let priceColor = bookService.getPriceColor(book)

    return <section className="book-details">
        <h2>{book.title}</h2>
        <h3>{book.subtitle}</h3>
        {book.listPrice.isOnSale && <span className="sale">On Sale</span>}
        {pageCountText && <span className="pageCount">{pageCountText}</span>}
        {timeFromPublished && <span className="timeFromPublished">{timeFromPublished}</span>}
        <p>Language: {book.language} | Pages: {book.pageCount} | Authors: {book.authors}</p>
        <img src={book.thumbnail} />
        {/* <LongTxt /> */}
        <p>{book.description}</p>
        <p>Book price: <span className={`price ${priceColor}`}>{book.listPrice.amount} {book.listPrice.currencyCode}</span></p>
        <button onClick={onGoBack}>Go Back</button>
        <Link to={`/book/edit/${book.id}`} className="btn">Edit book</Link>
        <hr />
        <AddReview />
    </section>
}