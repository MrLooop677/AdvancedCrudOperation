import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EdithData } from "../state/postSlice";
import { Link } from "react-router-dom";

const PostListSlc = ({ data, deleteRow }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete !!!")) {
      deleteRow(id);
    }
  };
  const rowTable = data.map((post, index) => (
    <tr key={index}>
      <td>#{++index}</td>
      <td>
        {" "}
        <Link to={`post/${post.id}`}>{post.title}</Link>
      </td>

      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={() => deleteItem(post.id)}>
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{rowTable}</>;
};

export default PostListSlc;
