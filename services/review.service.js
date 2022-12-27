import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const REVIEW_KEY = 'reviewDB'

export const reviewService = {
  saveReview,
  getEmptyReview,
}



function saveReview(review) {
  if (review.id) {
    return storageService.put(REVIEW_KEY, review)
  } else {
    return storageService.post(REVIEW_KEY, review)
  }
}

function getEmptyReview(userName = '', rating) {
  return { id: makeId(), userName, rating, readAt: new Date().getDate() }
}