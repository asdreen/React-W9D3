import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBadge from "./components/MyBadge";

import WarningSign from "./components/WarningSign";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <WarningSign />
      <MyBadge />

      <div>
        <BookList />
      </div>
    </div>
  );
}

export default App;
