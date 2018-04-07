import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import{
  Button,
  Card,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Beers extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = { beers: []}
  }
  

componentDidMount() {
  
  axios.get('http://api.brewerdb.com/api/beers?key=BREWERYDB_API_KEY') 
   .then( res => {this.setState({ beer: res.data })} )
};


beers = () =>{
    //const {beer } = this.state;
    return this.state.beers.map( b => 
    
        <Card 
        key={ b.id }
        Inverted
        color= 'teal'
      >
        <Card.Content>
          <Card.Header>
            { b.name }
          </Card.Header>
          <Card.Content>
         {/*  <Image src = {m.image}/> */}
           ---IMAGE NOT FOUND (yet)---
            <Divider/>
          </Card.Content>
          <Card.Description>
            Category: {b.category.name}
            Description: { b.description } <br/>
            
          </Card.Description>
        </Card.Content>
        <Link to = {`/beers/${b.id}`}>
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
               { this.beers() }
            </Card.Group>
          
      
            </div>


          )//end return
        }//end render


} //end class

const mapStateToProps = (state,props) => {
  return {
    beers: state.beers,
    beer: state.beer
  }
}

const styles = {
  segment: {
    backgroundColor: '#f4ad42',
    Color: '#000'
  }
}
export default connect(mapStateToProps)(Beers);