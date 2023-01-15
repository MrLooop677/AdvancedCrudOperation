import { Table } from "react-bootstrap";
import PostListSlc from "./PostListSlc";
import { memo } from "react";

const PostList = ({ data, deleteRow, isLogin }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostListSlc data={data} deleteRow={deleteRow} isLogin={isLogin} />
      </tbody>
    </Table>
  );
};

export default memo(PostList);
