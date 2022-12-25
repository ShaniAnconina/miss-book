

export function BookDetails({ book }) {
    let pageCountText = getPageCountText(book)
    let timeFromPublished = getPublishedDate(book)
    let priceColor = getPriceColor(book)



    return <section className="book-details">
        <h2>{book.title}</h2>
        <h3>{book.subtitle}</h3>
        {book.listPrice.isOnSale && <span className="sale">On Sale</span>}
        {pageCountText && <span className="pageCount">{pageCountText}</span>}
        {timeFromPublished && <span className="timeFromPublished">{timeFromPublished}</span>}

        <p>Language: {book.language} | Pages: {book.pageCount} | Authors: {book.authors}</p>
        <img src={book.thumbnail} />
        <p>{book.description}</p>
        <p>Book price: <span className={`price ${priceColor}`}>{book.listPrice.amount} {book.listPrice.currencyCode}</span></p>
    </section>
}

function getPageCountText(book) {
    let pageCountText = ''
    if (book.pageCount > 500) pageCountText = 'Serious Reading'
    if (book.pageCount > 200 && book.pageCount < 500) pageCountText = 'Descent Reading'
    if (book.pageCount < 100) pageCountText = 'Light Reading'
    return pageCountText
}

function getPublishedDate(book) {
    let timeFromPublished
    let currYear = new Date().getFullYear()
    let diff = currYear - book.publishedDate
    console.log('diff:', diff)
    if (diff < 10) timeFromPublished = 'Vintage'
    if (diff > 1) timeFromPublished = 'New'
    return timeFromPublished
}

function getPriceColor(book) {
    let priceColor
    if (book.listPrice.amount > 150) priceColor = 'red'
    if (book.listPrice.amount < 20) priceColor = 'green'
    return priceColor
}