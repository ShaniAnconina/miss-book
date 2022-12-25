const { useState, useEffect } = React

import { bookService } from './../services/book.service.js';
import { BookList } from '../cmps/book-list.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';
import { BookDetails } from './book-details.jsx';

export function BookIndex() {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)


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
            // flashMsg('Car removed!')
        })
    }

    function onSelectBook(bookId) {
        console.log('bookId:', bookId)
        bookService.get(bookId).then((book) => {
            setSelectedBook(book)
        })
    }

    return <section className='book-index'>
        <h1>Our books</h1>
        {!selectedBook && <div>
            <BookFilter onSetFilter={onSetFilter} />
            <BookList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />
        </div>}
        {selectedBook && <BookDetails book={selectedBook} />}
    </section>
}