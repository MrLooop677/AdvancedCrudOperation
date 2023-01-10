import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EditlData, fetchData } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
const EditPost = () => {
  const [title, settitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const HundlerSubmit = (e) => {
    e.preventDefault();
    dispatch(EditlData({ id: item.id, title, body: desc }))
      .unwrap()
      .then(() => {
        Navigate("/");
      });
  };
  const { item, loading, error } = usePostDetails();
  useEffect(() => {
    if ((item, !title, !desc)) {
      console.log("item", item);
      settitle(item?.title);
      setDesc(item?.body);
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

export default EditPost;
