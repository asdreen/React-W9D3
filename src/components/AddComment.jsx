import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import CommentList from "./CommentList";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: this.props.bookId,
    },
  };

  onChangeHandler = (value, fieldToSet) => {
    console.log(value);
    this.setState({
      comment: {
        ...this.state.comment,
        [fieldToSet]: value,
      },
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(this.state.comment);
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGE2N2Q0YmUzZDAwMTU4NDYwYjIiLCJpYXQiOjE2NjkyOTE3NTUsImV4cCI6MTY3MDUwMTM1NX0._f1bdfnB6xKuo30XePtxs3Qa1lVlXaEl64GFAbyrWw8",
          },
        }
      );
      if (response.ok) {
        alert("Comment posted!");
      } else {
        console.log("Something went wrong!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  /* componentDidMount = () => {
    this.props.clickbookID &&
      this.setState({
        ...this.state,
        selectedBook: true,
        idofSelected: this.props.clickbookID,
      });
  }; */

  render() {
    return (
      <>
        <div>
          <div className="commentTitle">
            <h5>
              {" "}
              <strong>Add Comment</strong>
            </h5>
          </div>
          <div className="ImageHolder" style={{ marginLeft: "0em" }}>
            <img src={this.props.img} alt="#" style={{ width: "10em" }}></img>
            <Form onSubmit={this.onSubmitHandler}>
              <Form.Group>
                <Form.Label>Your Comment</Form.Label>
                <Form.Control
                  type="text"
                  style={{ width: "15em", marginInline: "auto" }}
                  placeholder="Your Comment Here!"
                  required
                  value={this.state.comment.comment}
                  onChange={(e) =>
                    this.onChangeHandler(e.target.value, "comment")
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  as="select"
                  style={{ width: "10em", marginInline: "auto" }}
                  value={this.state.comment.rate}
                  onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Post Comment!
              </Button>
            </Form>
            <CommentList
              commentsArray={this.state.singleBookCommets}
              id={this.state.bookId}
            />
          </div>
        </div>
      </>
    );
  }
}

export default AddComment;
