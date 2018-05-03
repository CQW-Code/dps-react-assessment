import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setHeaders} from '../actions/headers';
import{
  Button,
  Card,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import {getBeers} from '../actions/beers';

class Beers extends React.Component {


  state = {beers: []}

  
  componentDidMount = () => {
    const { dispatch } = this.props;
    axios.get('/api/all_beers?num=50&page=25&per_page=5')
      .then( res => {
        dispatch(setHeaders(res.headers))
        this.setState({ beers: res.data.entries })
    }).catch(err => {
      console.log(err)
    })
  }

  allBeers =() => {
    const {beers} = this.state;
    
     return beers.map(b => 
       <Card 
         key={b.id }
         color= 'yellow'
         textalign='center'
         style = {styles.card}>
         <Card.Content>
           <Card.Header
             textAlign='center'>
             { b.name }
           </Card.Header>
           <Card.Content
             textAlign='center'>
               ---IMAGE--
             <Divider/>
           </Card.Content>
           <Card.Description
             textAlign='center'>
             Category: {b.category}<br/>
             Description: { b.description } 
           </Card.Description>
         </Card.Content>
         <Link to = {`/beer/${b.id}`}>
         <Button
           fluid
           color = 'blue'>
           View Beer Details
           </Button>
         </Link>
       </Card>
  );
}
     
  

render() {
  return(
    <div>
   <Segment style={styles.segment}>
      <Header 
        as='h3' 
        size='huge'
        textAlign='center'>
          Hall of Beers
       </Header>
  </Segment> 
        
       <Card.Group itemsPerRow={ 3 }>
            {this.allBeers()}
          </Card.Group>
        </div>
         )}  
        }
const mapStateToProps = (state,props) => {
  const {beers} = state
return {
  beers,
}
}


const styles = {
segment: {
  backgroundColor: 'yellow',
  Color: '#000'
},
card: {
  backgroundColor: '#92bee8'
}
}
export default connect(mapStateToProps)(Beers);
