import { bookService } from './../services/book.service.js';

const { useState, useEffect, useRef } = React

export function BookFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())
    const elInputRef = useRef(null)

    useEffect(() => {
        elInputRef.current.focus()
    }, [])

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="book-filter full main-layout">
        <form onSubmit={onSubmitFilter}>
            <h2>Filter</h2>

            <label htmlFor="txt">Book name: </label>
            <input type="text"
                id="txt"
                name="txt"
                placeholder="By book name"
                value={filterByToEdit.txt}
                onChange={handleChange}
                ref={elInputRef} />

            <label htmlFor="maxPrice">Max price: </label>
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="By max price"
                value={filterByToEdit.maxPrice}
                onChange={handleChange} />

            <button>Filter</button>
        </form>
    </section>
}