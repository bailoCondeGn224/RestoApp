import React from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const RegisterForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Nom complet requis"),
    email: Yup.string().email("Email invalide").required("Email requis"),
    password: Yup.string()
      .min(6, "Mot de passe doit avoir au moins 6 caractères")
      .required("Mot de passe requis"),
  });

  const handleSubmit = () => {
    // Logique de soumission du formulaire
    console.log("values");
    navigate("/account/login");
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Inscription
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              name="fullName"
              label="Nom complet"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={<ErrorMessage name="fullName" />}
            />
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              as={TextField}
              name="password"
              label="Mot de passe"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText={<ErrorMessage name="password" />}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Client</MenuItem>
                <MenuItem value={20}>Restaurateur</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{ mt: 2 }}
            >
              S'inscrire
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        J'ai un Compte
        <Button
          onClick={() => navigate("/account/login")}
          size="small"
          sx={{ color: "white", textDecoration: "underline" }}
        >
          Connexion
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
