import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EdithData } from "../state/postSlice";
import { Link } from "react-router-dom";

const PostListSlc = ({ data, deleteRow, isLogin }) => {
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
          <Link className="btn btn-success" to={`post/${post.id}/edit`}>
            Edit
          </Link>
          <Button
            variant="danger"
            onClick={() => deleteItem(post.id)}
            disabled={!isLogin}
          >
            Delete
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{rowTable}</>;
};

export default PostListSlc;
