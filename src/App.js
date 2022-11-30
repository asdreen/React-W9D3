import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import BookList from "./components/BookList";
import Books from "./data/books.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}

        <BookList books={Books} />
      </header>
    </div>
  );
}

export default App;
