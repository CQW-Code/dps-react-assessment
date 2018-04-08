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
import {getBeers} from '../actions/beers';

class Beers extends React.Component {



  componentDidMount() {
    const {dispatch} = this.props;
    axios.get(`/api/all_beers`)
    .then( res => {
      dispatch(setHeaders(res.headers))
      this.setState({ beers: res.data })
      dispatch(getBeers(res.beers));
  }).catch(err => {
    console.log(err)
  })
}




beer = () =>{
  //const {beers} = this.props;
  if (this.props.data) {
  return this.props.beers.map( b => 
  
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
            ---IMAGE--
          <Divider/>
        </Card.Content>
        <Card.Description>
          Category: {b.category.name}
          Description: { b.description } <br/>
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
}
}

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
            <Card
              style={styles.card}>
            <Card.Content>
             <Card.Header>
          A Whole bunch of beers 
          </Card.Header>
             <Divider/>
       </Card.Content>
       <Card.Content>
         Are Supposed to show up here <br/>
         But The axios.GET won't play nicely <br/>
         With me
      </Card.Content>
      <Card.Content>
        <Card.Description>
          Axios.get etc is my weak point!
        </Card.Description>
      </Card.Content>
     
      <Link to = {'/'}>
      <Button
          fluid
         color = 'purple'>
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
},
card: {
  backgroundColor: '#92bee8'
}
}
export default connect(mapStateToProps)(Beers);

//export default Beers;