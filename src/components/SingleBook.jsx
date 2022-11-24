import { Card } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: true,
    selectedMove: false,
    idOfSelected: this.props.asin,
  };

  selectCard = (event) => {
    this.setState({
      selected: !this.state.selected,
    });
  };
  handleClick = (e) => {
    this.state.selectedMove
      ? this.setState({ ...this.state, selectedMove: false })
      : this.setState({ ...this.state, selectedMove: true });
    this.props.passBookID(this.state.idOfSelected, this.props.img);
  };

  render() {
    return (
      <>
        <Card
          style={{
            width: "15rem",
            height: "30rem",
            backgroundColor: "antiquewhite",
          }}
          onClick={(e) => {
            this.handleClick(e);
          }}
          key={this.props.asin}
          className={this.state.selectedMove ? "selected" : "cardWrapper"}
        >
          <Card.Img
            variant="top"
            style={{
              height: "20rem",
            }}
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selectedMove && (
          <CommentArea id={this.state.idOfSelected} />
        )}
      </>
    );
  }
}

export default SingleBook;
