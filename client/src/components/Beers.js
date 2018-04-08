import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
//import {setHeaders} from '../actions/headers';
import{
  Button,
  Card,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Beers extends React.Component {

  state = {beers: []};


  componentDidMount() {
    axios.get('http://api.brewerydb.com/v2/api/all_beers')
      .then(res => this.setState({beers: res.data}))
    }




beer = () =>{
  const {beers } = this.state;
  return this.state.beers.map( b => 
  
      <Card 
      key={ b.id }
      Inverted
      color= 'teal'
    >
      <Card.Content>
        <Card.Header>
          { b.name }
          A Whole bunch of beers 
        </Card.Header>
        <Card.Content>
         Are Supposed to show up here <br/>
         But The axios.GET won't play nicely<br/>
         With me
          <Divider/>
        </Card.Content>
        <Card.Description>
          Category: {b.category.name}
          Description: { b.description } <br/>
          Axios.get etc is my weak point!
        </Card.Description>
      </Card.Content>
      <Link to = {`/beer/${b.id}`}>
      <Button
         color = 'blue'>
         View Beer in detail  
        </Button>
      </Link>
    </Card>
  )
}//end beers function


render() {

  return(
    <div>
    
    <Segment style={styles.segment}>
      <Header 
        as='h3' 
        size='huge'
        textAlign='center'
         >
        BreweryDB Hall of Beers
       </Header>
        </Segment>
        
          <Card.Group itemsPerRow={ 3 }>
             { this.beer() }
            <Card>
             <Card.Content>
        <Card.Header>
          A Whole bunch of beers 
        </Card.Header>
      <Card.Content>
         Are Supposed to show up here <br/>
         But The axios.GET won't play nicely<br/>
         With me
          <Divider/>
        </Card.Content>
        <Card.Description>
          Axios.get etc is my weak point!
        </Card.Description>
      </Card.Content>
      <Link to = {'/'}>
      <Button
         color = 'blue'>
         View Beer in detail  
        </Button>
      </Link>
    </Card>
          </Card.Group>
        
    
          </div>


        )
      }

}


const mapStateToProps = (state,props) => {
return {
  beers: state.beers,
  beer: state.beer
}
}


const styles = {
segment: {
  backgroundColor: 'yellow',
  Color: '#000'
}
}
export default connect(mapStateToProps)(Beers);

//export default Beers;