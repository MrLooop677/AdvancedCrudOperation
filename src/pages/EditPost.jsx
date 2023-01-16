import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { EditlData } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
import withGuard from "../util/withGuard";
import { validationSchema } from "../util/validationSchema";
const EditPost = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { item, loading, error } = usePostDetails();

  const formik = useFormik({
    initialValues: {
      title: item ? item?.title : "",
      desc: item ? item?.body : "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(
        EditlData({ id: item.id, title: values.title, body: values.desc })
      )
        .unwrap()
        .then(() => {
          Navigate("/");
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

export default withGuard(EditPost);
