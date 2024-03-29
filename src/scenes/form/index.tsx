import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

import { Header } from "../../components/Header";

export default function Form() {
  interface Values {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    address1: string;
    address2: string;
  }
  const initialValues: Values = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const handleFormSubmit = (values: Values) => {
    console.log(values);
  };
  return (
    <Box padding="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="row"
              gap="40px"
              paddingBottom="40px"
            >
              <TextField
                label="First Name"
                variant="filled"
                required
                type="text"
                sx={{ width: "100%" }}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                name="firstName"
              />
              <TextField
                label="Last Name"
                variant="filled"
                required
                type="text"
                sx={{ width: "100%" }}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                name="lastName"
              />
            </Box>
            <Box display="flex" gap="40px" flexWrap="wrap">
              <TextField
                label="Email"
                variant="filled"
                required
                type="text"
                sx={{ width: "100%" }}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
              />

              <TextField
                label="Contact"
                variant="filled"
                required
                type="text"
                sx={{ width: "100%" }}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                name="contact"
              />

              <TextField
                label="Address 1"
                variant="filled"
                required
                type="text"
                sx={{ width: "100%" }}
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                value={values.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                name="address1"
              />

              <TextField
                label="Address 2"
                variant="filled"
                required
                type="text"
                sx={{ width: "100%" }}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                value={values.address2}
                name="address2"
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
