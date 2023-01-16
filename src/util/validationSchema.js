import * as Yup from "yup";

export const validationSchema = () => {
  return Yup.object({
    title: Yup.string()
      .min(4, "Must be 4 characters or more")
      .required("Required"),
    desc: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
  });
};
