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

class Beers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    axios.get(`/api/all_beers?num=50&page=25&per_page=2`)
    .then( res => {
      this.setState({ beers: res.data })
      dispatch(setHeaders(res.headers))
      //dispatch(getBeers(res.beers));
  }).catch(err => {
    console.log(err)
  })
}


render() {
      let { beers } = this.state;

  return(
    <div>
   <Segment style={styles.segment}>
      <Header 
        as='h3' 
        size='huge'
        textAlign='center'
         >
          Find your Beer!
       </Header>
  </Segment> 
        
       <Card.Group itemsPerRow={ 2 }>
          {Object.values(beers).map((value,id) => {
             console.log(value, id)
             return(
              <Card 
                key={id }
                color= 'yellow'
                textalign='center'
                style = {styles.card}
              >
                <Card.Content>
                  <Card.Header
                    textAlign='center'
                    >
                    Name of Beer:
                    { id.name }
                    
                  </Card.Header>
                  <Card.Content
                    textAlign='center'>
                      ---IMAGE--
                    <Divider/>
                  </Card.Content>
                  <Card.Description
                    textAlign='center'>
                    Category: {id.category}<br/>
                    Description: { id.description } 
                  </Card.Description>
                </Card.Content>
                <Link to = {`/beer/${id.id}`}>
                <Button
                  fluid
                  color = 'blue'>
                  View Beer Details
                  </Button>
                </Link>
              </Card>
             )}
            )} 
          </Card.Group>
        </div>
          )}  
        }





const mapStateToProps = (state,props) => {
return {
  beers: props.beers,
  beer: props.beer
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
