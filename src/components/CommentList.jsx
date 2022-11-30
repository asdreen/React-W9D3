import { ListGroup } from "react-bootstrap";
import SingleComment from "../components/singleComment";

const CommentList = ({ commentsToShow }) => (
  <ListGroup className="text-dark">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
