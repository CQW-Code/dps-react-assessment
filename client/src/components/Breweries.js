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
//import {getBeers} from '../actions/beers';

class Breweries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    };
  }

  componentDidMount() {
    const {dispatch} = this.props;
    axios.get(`/api/all_breweries?num=100&page=10&per_page=10`)
    .then( res => {
      this.setState({ breweries: res.data })
      dispatch(setHeaders(res.headers))
  }).catch(err => {
    console.log(err)
  })
}


render() {
      const {breweries} = this.state;
      const brewOpts = Object.entries(breweries).map(key => 
        <div value={key}>{breweries[key]}</div>
    )
  return(
    <div>
    <Segment style={styles.segment}>
      <Header 
        as='h3' 
        size='huge'
        textAlign='center'
         >
          Where to find the beers!
       </Header>
        </Segment>
          <Card.Group itemsPerRow={ 2 }>
          {/* {Object.values(this.state.breweries).map((b, index) => { */}
             {/* console.log(b, index)
             return( */}
              <Card 
                key={brewOpts.id}
                color= 'yellow'
                textalign='center'
                style = {styles.card}
              >
                <Card.Content>
                  <Card.Header
                    textAlign='center'
                    >
                    Name of Brewery:
                    { brewOpts.name }
                    
                  </Card.Header>
                  <Card.Content
                    textAlign='center'>
                      ---IMAGE--
                    <Divider/>
                  </Card.Content>
                  <Card.Description
                    textAlign='center'
                     >
                    Category: {brewOpts.category}<br/>
                    Description: { brewOpts.description } 
                  </Card.Description>
                </Card.Content>
                <Link to = {`/brewery/${brewOpts.id}`}>
                <Button
                  fluid
                  color = 'orange'>
                  View Brewery details  
                  </Button>
                </Link>
              </Card>
          )}
          )}
            
           
          </Card.Group>
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
  backgroundColor: 'orange',
  Color: '#000'
},
card: {
  backgroundColor: '#efc386'
}
}
export default connect(mapStateToProps)(Breweries);
