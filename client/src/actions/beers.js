import axios from 'axios'
export const BEERS = 'BEERS';


export const getBeers = (cb) => {
  return (dispatch) => {
    axios.get('/api/all_beers')
      .then( res => dispatch({ type: BEERS, beers: res.data } ))
      .then(cb)
      }
  }
