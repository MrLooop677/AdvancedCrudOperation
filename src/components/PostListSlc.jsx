import { Button, ButtonGroup } from "react-bootstrap";

const PostListSlc = ({ data }) => {
  const rowTable = data.map((post, index) => (
    <tr key={index}>
      <td>#{++index}</td>
      <td>{post.title}</td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  ));
  return <>{rowTable}</>;
};

export default PostListSlc;
