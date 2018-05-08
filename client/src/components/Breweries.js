import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setHeaders } from "../actions/headers";
import { Button, Card, Divider, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import {getBeers} from '../actions/beers';

class Breweries extends React.Component {
  state = { breweries: [] };

  componentDidMount() {
    const { dispatch } = this.props;
    axios
      .get(`/api/all_breweries?num=100&page=10&per_page=10`)
      .then(res => {
        this.setState({ breweries: res.data.entries });
        dispatch(setHeaders(res.headers));
      })
      .catch(err => {
        console.log(err);
      });
  }

  allBreweries = () => {
    const { breweries } = this.state;

    return breweries.map(br => (
      <Card key={br.id} color="yellow" textalign="center" style={styles.card}>
        <Card.Content>
          <Card.Header textAlign="center">{br.name}</Card.Header>
          <Card.Content textAlign="center">
            ---IMAGE--
            <Divider />
          </Card.Content>
          <Card.Description textAlign="center">
            Category: {br.category}
            <br />
            Description: {br.description}
          </Card.Description>
        </Card.Content>
        <Link to={`/beer/${br.id}`}>
          <Button fluid color="blue">
            View Brewery Details
          </Button>
        </Link>
      </Card>
    ));
  };

  render() {
    return (
      <div>
        <Segment style={styles.segment}>
          <Header as="h3" size="huge" textAlign="center">
            Where to find the beers!
          </Header>
        </Segment>
        <Card.Group itemsPerRow={2}>{this.allBreweries()}</Card.Group>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    breweries: state.breweries,
    brewery: state.brewery
  };
};

const styles = {
  segment: {
    backgroundColor: "orange",
    Color: "#000"
  },
  card: {
    backgroundColor: "#efc386"
  }
};
export default connect(mapStateToProps)(Breweries);
