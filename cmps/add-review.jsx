const { useState, useEffect } = React

import { reviewService } from "../services/review.service"

export function AddReview() {
    const [review, setReview] = useState(reviewService.getEmptyReview())

    function onAddReview(ev) {
        ev.preventDefault()
        reviewService.saveReview(review)
        console.log('review:', review)
    }

    return <section className="add-review">

        <form onSubmit={onAddReview}>
            <label htmlFor="userName">Name: </label>
            <input type="text" name="userName" id="userName" />
            <label htmlFor="rating">Book rate: </label>
            <select name="rating" id="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <input type="date" name="readAt" id="readAt" />
            <button>Add review</button>
        </form>
    </section>
}