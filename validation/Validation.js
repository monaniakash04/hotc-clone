import * as yup from "yup";

export const Yup = yup.object({
  name: yup.string().min(1).max(30).required("Name Must Be Enter"),
  email: yup
    .string()
    .email("Enter Valid Email")
    .required("Email Must Be Enter"),
  phone: yup
    .string()
    .min(10, "Number Must be 10 Digit")
    .max(10, "Number Must be 10 Digit")
    .required("phone Must Be Enter"),
  guestcount: yup.number().required("Please Enter Guest Count"),
  descaboutwedding: yup
    .string()
    .max(100)
    .required("Please Describe About Your Wedding"),
  location: yup.string().required("Please Enter The Location"),
  date: yup.date().required("Please Enter Date"),
});

export const carres_validation = yup.object({
  name: yup.string().min(1).max(30).required("Name Must Be Enter"),
  email: yup
    .string()
    .email("Enter Valid Email")
    .required("Email Must Be Enter"),
  phone: yup
    .string()
    .min(10, "Number Must be 10 Digit")
    .max(10, "Number Must be 10 Digit")
    .required("phone Must Be Enter"),
  ccity: yup.string().required("Please Enter Current City"),
  tellaboutyourself: yup.string().required("Please Tell About Yourself"),
  linkport: yup.string().required("Please Link Your PortFolio"),
  experiance: yup.string().required("Please Enter Your Experience"),
});
