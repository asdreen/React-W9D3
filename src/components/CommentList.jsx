import { Component } from "react";

class CommentList extends Component {
  state = {
    id: "",
    loading: true,
    comment: [],
  };

  componentDidUpdate = (prevprops, prevstate) => {
    if (prevprops.bookID !== this.props.bookID) {
      this.setState({
        ...this.state,
        id: this.props.bookID,
      });
      this.fetchBookcomment();
    }
  };

  fetchBookcomment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGE2N2Q0YmUzZDAwMTU4NDYwYjIiLCJpYXQiOjE2NjkyOTE3NTUsImV4cCI6MTY3MDUwMTM1NX0._f1bdfnB6xKuo30XePtxs3Qa1lVlXaEl64GFAbyrWw8",
          },
        }
      );
      let comment = await response.json();
      console.log(comment);
      this.setState({
        ...this.state,
        comment: comment,
        loading: false,
      });
    } catch (error) {
      alert("couldnt delete, try again");
    }
  };

  render() {
    return (
      <>
        <div className="commetnwrap2">
          <ul>
            {this.state.comment.length && !this.state.loading ? (
              this.state.comment.map((comment) => (
                <li>
                  <p>{comment.comment}</p>
                </li>
              ))
            ) : (
              <div className="nothingt"></div>
            )}
          </ul>
          <div className="addCommetn2">
            <button style={{ display: this.state.loading && "none" }}>
              Add Comment
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CommentList;
