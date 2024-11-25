import { TextField, Button, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    // Log values to debug
    console.log("Form Values: ", values);

    // Ensure data is plain object
    const userData = JSON.parse(JSON.stringify(values));
    console.log("Sanitized Data: ", userData);

    dispatch(loginUser({ userData, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form style={{ width: "100%" }}>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, padding: "1rem" }}
          >
            Sign In
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
          Register
        </Button>
      </Typography>
    </div>
  );
};
