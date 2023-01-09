import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postData } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
const AddPost = () => {
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.postSlice);
  const HundlerSubmit = (e) => {
    e.preventDefault();
    dispatch(postData({ title, body: desc }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
    setDesc("");
    settitle("");
  };
  return (
    <Form onSubmit={(e) => HundlerSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          name="title"
          value={title}
          required
          onChange={(e) => settitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a description here"
          name="description"
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
        />
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button name="Button" variant="primary" type="submit">
          Submit
        </Button>
      </Loading>
    </Form>
  );
};

export default AddPost;
