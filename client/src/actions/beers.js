import axios from 'axios'
export const BEERS = 'BEERS';


export const getBeers = () => {
  return (dispatch) => {
    axios.get('/api/all_beers?num=50&page=25&per_page=5')
      .then( res => dispatch({ type: BEERS, beers: res.data } ))
      //.then(cb)
      }
  }
