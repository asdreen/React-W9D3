import { Container, Row, InputGroup, Form, FormLabel } from "react-bootstrap";
import { Component } from "react";
import SingleBook from "./SingleBook";
import books from "../data/books.json";
import AddComment from "../components/AddComment";

class BookList extends Component {
  state = {
    book: "category",
    category: books,
    img: "",
    clickedBookedID: "",
    bookId: null,

    search: "",
  };

  updateState = (bookID, img) => {
    this.setState({
      ...this.state,
      clickedBookedID: bookID,
      img: img,
    });
  };

  filterBookList = (value) => {
    this.setState({
      book: value,
    });
  };

  onChangeHandler = (value) => {
    this.setState({ book: value });
  };

  render() {
    return (
      <Container>
        <Row>
          <FormLabel>Search books by title!</FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Type book title"
              value={this.state.search}
              onChange={(event) => {
                this.setState({ search: event.target.value });
              }}
            />
          </InputGroup>
        </Row>

        <Row>
          {this.state[this.state.book] &&
            this.state[this.state.book]
              .filter((book) => {
                return book.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase());
              })
              .map((book) => {
                return (
                  <div
                    onClick={() => this.setState({ bookId: book.asin })}
                    className={`col-6 col-sm-4 col-md-3 col-lg-3 mb-3 `}
                  >
                    <SingleBook
                      book={book}
                      key={book.asin}
                      img={book.img}
                      category={book.title}
                      passBookID={this.updateState}
                      bookId={book.asin}
                    />
                  </div>
                );
              })}
        </Row>
        {this.state.bookId && (
          <AddComment
            img={this.state.img}
            clickbookID={this.state.clickedBookedID}
            bookId={this.state.bookId}
            elementId={this.state.elementId}
          />
        )}
      </Container>
    );
  }
}

export default BookList;
