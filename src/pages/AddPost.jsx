import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postData } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
import withGuard from "../util/withGuard";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.postSlice);

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Required"),
      desc: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const id = Math.floor(Math.random() * 500);
      dispatch(postData({ id, title: values.title, body: values.desc }))
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          name="title"
          required
          onChange={formik.handleChange}
          value={formik.values.title}
          isInvalid={!!formik.errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a description here"
          name="desc"
          required
          onChange={formik.handleChange}
          value={formik.values.desc}
          isInvalid={!!formik.errors.desc}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.desc}.
        </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button name="Button" variant="primary" type="submit">
          Submit
        </Button>
      </Loading>
    </Form>
  );
};

export default withGuard(AddPost);
