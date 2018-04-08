import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setHeaders} from '../actions/headers';
import{
  Button,
  Card,
  Divider,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Breweries extends React.Component {

  getInitialState = () =>{
    return {data: {brewery:[]}}
  }
  state = {brewery: []}
  


  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('/api/all_breweries')
      .then( res => {
        this.setState({ brewery: res.data })
        dispatch(setHeaders(res.headers));
      });
  }


  
  brewery = (data) =>{
      //const {brewery } = this.props;
      if (this.props.data) {
      return this.props.brewery.map( b => 
        
        <Card 
          key={ b.id }
        >
          <Card.Content>
            <Card.Header>
              { b.name }
            </Card.Header>
            <Card.Content>
              <Image src={b.squaremedium}/>
              <Divider/>
            </Card.Content>
            <Card.Description>
              Category: {b.website } <br/>
            But we can't see them because 
            Axios and APIs are baffling!
            </Card.Description>
          </Card.Content>
          <Link to = {`/`}>
          <Button
             color = 'blue'>
             View Brewery details  
            </Button>
  
          <Button>Boo</Button>
          </Link>
        </Card>
      )
    }
  }
  
    render() {
      return (
        <div>
        <Segment style={styles.segment}>
      <Header 
        as='h3' 
        size='huge'
        textAlign='center'
         >
              BreweryDB List of Breweries
            </Header>
            </Segment>
              <Card.Group itemsPerRow={ 4 }>
               { this.brewery() }
              </Card.Group>
              
                <Card>              
                <Card.Content>
                  <Card.Header>
                    Where are the breweries
                  </Card.Header>
                  <Card.Content>
                    <Divider/>
                  </Card.Content>
                  <Card.Description>
                  But we can't see them because 
                  Axios and APIs are baffling!
                  </Card.Description>
                </Card.Content>
                <Link to = {`/`}>
                <Button
                    fluid
                    color = 'blue'>
                    View Brewery details  
                  </Button>
                <Button
                  fluid>
                  Boo
                </Button>
                </Link>
              </Card>
              </div>
            )
          }
         
      
    }
  
  
  
  const mapStateToProps = (state,props) => {
    return {
      breweries: state.breweries,
      brewery: state.brewery
    }
}


const styles = {
segment: {
  backgroundColor: '#70a2d1',
  Color: '#000'
}
}
export default connect(mapStateToProps)(Breweries);
