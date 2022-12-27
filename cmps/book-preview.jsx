

export function BookPreview({ book }) {
    
    if (!book) return <h1>loading book</h1>
    return <section className="book-preview">
        <h2>{book.title}</h2>
        <p>{book.subtitle}</p>
        <img src={book.thumbnail} />
        <p>Book price: {book.listPrice.amount} {book.listPrice.currencyCode}</p>
    </section>
}