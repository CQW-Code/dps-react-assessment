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
  

componentDidMount() {
  
  axios.get('https:/brewerydb.com/api/all_beers/count=50')
   .then( res => this.setState({ beers: res.data }) )
}


beers = () =>
  {
    const {beers } = this.state;
    return this.state.beers.map( b => 
    
        <Card 
        key={ b.id }
        color= 'purple'
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
      <p color='white'>Test test test</p>
      
      <Segment>
        <Header 
          as='h3' 
          size='huge'
          textAlign='center'
          inverted color ='purple'>
          BreweryDB Hall of Beers
          </Header>
          </Segment>
          
            <Card.Group itemsPerRow={ 3 }>
               { this.beers() }
            </Card.Group>

    <p color='white'>Test test test</p>

            </div>
          )//end return
        }//end render


} //end class

const mapStateToProps = (state) => {
  return {
    beers: state.beers,
    beer: state.beer
  }
}

export default connect(mapStateToProps)(Beers);