import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CartItem from "./CartItem";
import AddressCard from "./AdressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const items = [1, 1];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  Address: "",
  Commune: "",
  Code: "",
  Ville: "",
};

const validationSchema = Yup.object().shape({
  Address: Yup.string().required("Street Address is required"),
  Commune: Yup.string().required("Commune is required"),
  Code: Yup.string().required("Code is required"),
  Ville: Yup.string().required("Ville is required"),
});

const Cart = () => {
  const [open, setOpen] = useState(false);

  const createdOrderUsingSelectAddress = () => {
    console.log("Order created using selected address");
  };

  const handleOpenAddressModal = () => {
    setOpen(true);
  };

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
    handleClose();
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item, index) => (
            <CartItem key={index} />
          ))}
          <Divider />
          <div className="bilDetail px-5 text-ms">
            <p className="font-extralight py-5 ">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>10000 GNF</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Deliver fee</p>
                <p>50000 GNF</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Pizza fee</p>
                <p>50000 GNF</p>
              </div>
              <Divider />
            </div>
          </div>
          <div className="flex justify-between text-gray-400 ">
            <p>Total pay</p>
            <p>50754 GNF</p>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  items={item}
                  showButton={true}
                  handleSelectAddress={createdOrderUsingSelectAddress}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5 ">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Ajouter nouvelle adresse
                  </h1>
                  <Button
                    onClick={handleOpenAddressModal}
                    variant="contained"
                    fullWidth
                    sx={{ color: "white" }}
                  >
                    Ajouter
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Insertion de l'adresse
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="Address"
                      as={TextField}
                      label="Address de la Rue"
                      fullWidth
                      value={values.Address}
                      error={touched.Address && !!errors.Address}
                      helperText={
                        <ErrorMessage name="streetAddress">
                          {(msg) => <span className="text-red-600">{msg}</span>}
                        </ErrorMessage>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="Commune"
                      as={TextField}
                      label="Commune"
                      value={values.Commune}
                      fullWidth
                      error={touched.Commune && !!errors.Commune}
                      helperText={
                        <ErrorMessage name="state">
                          {(msg) => <span className="text-red-600">{msg}</span>}
                        </ErrorMessage>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="Code"
                      as={TextField}
                      label="Code du pays"
                      value={values.Code}
                      fullWidth
                      error={touched.Code && !!errors.Code}
                      helperText={
                        <ErrorMessage name="pincode">
                          {(msg) => <span className="text-red-600">{msg}</span>}
                        </ErrorMessage>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="Ville"
                      as={TextField}
                      label="Ville"
                      value={values.Ville}
                      fullWidth
                      error={touched.Ville && !!errors.Ville}
                      helperText={
                        <ErrorMessage name="city">
                          {(msg) => <span className="text-red-600">{msg}</span>}
                        </ErrorMessage>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                      Envoyer
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
