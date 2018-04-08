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

class Breweries extends React.Component {

  
    state = 
    {      
      breweries: []
    }
  

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/breweries')
      .then( res => {
        this.setState({ breweries: res.data })
        dispatch(setHeaders(res.headers));
      });
  }




brewery = () =>{
  //const {beer } = this.state;
  return this.state.breweries.map( br => 
  
      <Card 
      key={ br.id }
      Inverted
      color= 'teal'
    >
      <Card.Content>
        <Card.Header>
          { br.name }
        </Card.Header>
        <Card.Content>
       {/*  <Image src = {m.image}/> */}
         ---IMAGE NOT FOUND (yet)---
          <Divider/>
        </Card.Content>
        <Card.Description>
          Category: {br.category.name}
          Description: { br.description } <br/>
          
        </Card.Description>
      </Card.Content>
      <Link to = {`/brewery/${br.id}`}>
      <Button
         color = 'blue'>
         View Brewery in detail  
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
        BreweryDB Hall of Breweries
       </Header>
        </Segment>
        
          <Card.Group itemsPerRow={ 3 }>
             { this.brewery() }
          </Card.Group>
        
    
          </div>


        )//end return
      }//end render

}//end class




const styles = {
segment: {
  backgroundColor: '#42bff4',
  Color: '#000'
}
}
export default connect()(Breweries);

//export default Breweries;