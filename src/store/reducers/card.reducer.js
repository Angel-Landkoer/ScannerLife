import { ADD_CARD, DELETED_CARD, DELETED_ALL_CARD } from '../actions/card.action'

const initialState = {
  cards: [],
  sizeCard: 0
}

export const reducer = (state = initialState, action) => {
  if (action.type == ADD_CARD) {

    const newCard = [...state.cards, action.card]

    return { ...state, cards: newCard, sizeCard: newCard.length }
  }

  if (action.type == DELETED_CARD) {
    const existemCard = state.cards.some(item => item.id == action.card.id)

    if (!existemCard) return { ...state, cards: state.cards }

    const filterCard = state.cards.filter(item => item.id !== action.action.card.id)

    return { ...state, cards: filterCard, sizeCard: filterCard.length }
  }

  if (action.type == DELETED_ALL_CARD) return { ...state, cards: [], sizeCard: 0 }

  return state
}