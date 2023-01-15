import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EditlData } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
import withGuard from "../util/withGuard";
const EditPost = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { item, loading, error } = usePostDetails();

  const [desc, setDesc] = useState("");
  const [title, settitle] = useState("");

  const HundlerSubmit = (e) => {
    e.preventDefault();
    dispatch(EditlData({ id: item.id, title, body: desc }))
      .unwrap()
      .then(() => Navigate("/"));
  };

  useEffect(() => {
    if (item && !title && !desc) {
      settitle(item.title);
      setDesc(item.body);
    }
  }, [item, desc, title]);
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
      {title}--{desc}
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

export default withGuard(EditPost);
