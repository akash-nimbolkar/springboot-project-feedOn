import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Typography, MenuItem, Select } from "@mui/material";
import { registerUser } from "../State/Authentication/Action";
import { useDispatch } from "react-redux";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleSubmit = (values) => {
    console.log("form values", values);
    // You can uncomment the dispatch and use it once you add Redux
     dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" className="text-center" sx={{ marginBottom: "20px" }}>
        Register
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Field
              as={TextField}
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "20px" }}
            />

            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "20px" }}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{ marginBottom: "20px" }}
            />

            <Field
              as={Select}
              fullWidth
              margin="normal"
              labelId="role-simple-select-label"
              id="role-simple-select"
              name="role"
            >
              <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
            </Field>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, padding: "1rem" }}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?
        <Button size="small" onClick={() => navigate("/account/login")} sx={{ marginLeft: "5px" }}>
          Login
        </Button>
      </Typography>
    </div>
  );
};
