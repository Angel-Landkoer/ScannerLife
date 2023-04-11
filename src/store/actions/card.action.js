export const ADD_CARD = "@ADD_CARD"
export const DELETED_CARD = "@DELETE_CARD"
export const DELETED_ALL_CARD = "@DELETED_ALL_CARD"

export const addCard = (card) => ({ type: ADD_CARD, card })

export const deletedCard = (id) => ({ type: DELETED_CARD, id })

export const deletedAllCard = () => ({ type: DELETED_ALL_CARD })
