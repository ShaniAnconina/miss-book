const {Link} = ReactRouterDOM
import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onRemoveBook, onSelectBook }) {

    return <ul className="book-list">
        {books.map(book => <li key={book.id}>
            <BookPreview book={book} />
            <div>
                <button onClick={() => onRemoveBook(book.id)}>Delete</button>
                <Link to={`/book/${book.id}`} className="btn">Select</Link>
            </div>
        </li>)}
    </ul>
}