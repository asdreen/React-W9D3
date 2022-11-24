import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGE2N2Q0YmUzZDAwMTU4NDYwYjIiLCJpYXQiOjE2NjkyOTE3NTUsImV4cCI6MTY3MDUwMTM1NX0._f1bdfnB6xKuo30XePtxs3Qa1lVlXaEl64GFAbyrWw8",
          },
        }
      );
      if (response.ok) {
        let comment = await response.json();
        /*  console.log(comment); */
        this.setState({ comments: comment, fetchedComment: true });
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  deleteComments = async (id, event) => {
    console.log("delete trigger");
    event.preventDefault();

    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.currentComment._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGE2N2Q0YmUzZDAwMTU4NDYwYjIiLCJpYXQiOjE2NjkyOTE3NTUsImV4cCI6MTY3MDUwMTM1NX0._f1bdfnB6xKuo30XePtxs3Qa1lVlXaEl64GFAbyrWw8",
        },
      }
    );
    try {
      if (response.ok) {
      }
    } catch (error) {
      alert("couldnt delete, try again");
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    console.log(this.props.bookId);
    return (
      <>
        <div>
          <ListGroup>
            {this.state.comments.map((element, i) => (
              <ListGroup.Item key={i}>
                {element.comment}
                <Button variant="outline-danger" className="mr-2 ">
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {!this.state.fetchedComment && (
            <span className="spinner">
              <Spinner animation="border" variant="primary" />
            </span>
          )}
        </div>
      </>
    );
  }
}

export default CommentArea;
