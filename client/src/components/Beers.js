import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setHeaders } from "../actions/headers";
import { Button, 
         Card, 
         Divider, 
         Header, 
         Image,
         Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import MugoBeer from '../images/MugoBeer.svg';
//import { getBeers } from "../actions/beers";

class Beers extends React.Component {
  state = { 
    beers: [],
    pages:1,
    totalPages:0 };

  componentDidMount = () => {
    const { dispatch } = this.props;
    axios
      .get(`/api/all_beers`)
      .then(res => {
        dispatch(setHeaders(res.headers));
        this.setState({ beers: res.data.entries, totalPages: res.data.total_pages});
      })
      .catch(err => {
        console.log(err);
      });
  };

  allBeers = () => {
    const { beers } = this.state;

    return beers.map(b => (
      <Card key={b.id} textalign="center" style={styles.card}>
        <Card.Content>
          <Card.Header textAlign="center">{b.name}</Card.Header>
          <Card.Content textAlign="center">
          {b.labels?
            <Image size= 'small' src={b.labels.medium}/>
            :
            <Image size='small' src={MugoBeer}/>}
             <Divider />
          </Card.Content>
          <Card.Description textAlign="center">
            Category: {b.category}
            <br />
          </Card.Description>
        </Card.Content>
        <Link to={`/beer/${b.name}`}>
          <Button fluid color="blue">
            View Beer Details
          </Button>
        </Link>
      </Card>
    ))};
  

  render() {
    return (
      <div>
        <Segment style={styles.segment}>
          <Header as="h3" style = {styles.segment}size="huge" textAlign="center">
            Hall of Beers
          </Header>
        </Segment>

        <Card.Group itemsPerRow={5}>{this.allBeers()}</Card.Group>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const { beers } = state;
  return {
    beers
  };
};

const styles = {
  segment: {
    backgroundColor: "#252B9A",
    color: "#fff"
  },
  card: {
    backgroundColor: "#92bee8"
  }
};
export default connect(mapStateToProps)(Beers);
