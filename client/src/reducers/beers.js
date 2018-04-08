import {
  BEERS,
} from '../actions/beers'

const products = (state = [], action ) => {
  switch(action.type) {
    case BEERS:
      return action.products
    default:
      return state;
  }
}

export default beers;
