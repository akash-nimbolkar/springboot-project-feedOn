import React from "react";
import CartItem from "./CartItem";
import { Box, Divider, Grid, Modal, TextField, Button } from "@mui/material";
import AddressCard from "./AddressCard";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CARTITEM_SUCCESS } from '../State/Cart/ActionType'; // Adjust the path as necessary
import { findCart } from "../State/Cart/Action";
import { createOrder } from "../State/Order/Action";


export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#333", // Change bgcolor to a dark black color
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street address is required."),
  state: Yup.string().required("State is required."),
  pincode: Yup.string().required("Pincode is required."),
  city: Yup.string().required("City is required."),
});

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {
    // Function implementation
  };
  
  const dispatch = useDispatch();
  // Ensure we have default values to prevent undefined errors
  const { cart = {}, auth = {} } = useSelector((state) => state.cart || {});

   //const cartItems = useSelector((state) => state.cart.cartItems || []);
   
  const handleSubmit = (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        restaurantId: cart.item[0].food?.restaurant?.id,
        deliveryAddress: {
          fullName: auth.user?.fullName,
          streetAddress: values.streetAddress,
          city: values.city,
          state: values.state,
          postalCode: values.pincode,
          country: "India",
        },
      },
    };

    // Dispatch the createOrder action with the data object
    dispatch(createOrder(data)); // Use the 'data' object here

    console.log(values);
  };

 // const cartItems = useSelector((state) => state.cart.cartItems || []);

  // Fetch the cart state when the component mounts
  React.useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      dispatch(findCart(token));
    }
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);
  
  const handleOpenAddressModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart?.item && cart.item.length > 0 ? (
            cart.item.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p>No items in the cart.</p>
          )}
          <Divider />

          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>Rs.{cart.total}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery fee</p>
                <p>Rs.59</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>Rs.99</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Total Pay</p>
              <p>Rs.{cart.total + 59 + 99}</p>
            </div>
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
                  handleSelectAddress={createOrderUsingSelectedAddress}
                  item={item}
                  showButton={true}
                />
              ))}
              <AddressCard
                handleSelectAddress={handleOpenAddressModel} // Pass the correct handler
                item={null}
                showButton={false}
                isAddNew={true}
              />
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                    />
                    <ErrorMessage
                      name="streetAddress"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      fullWidth
                      variant="outlined"
                    />
                    <ErrorMessage
                      name="state"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="pincode"
                      label="Pincode"
                      fullWidth
                      variant="outlined"
                    />
                    <ErrorMessage
                      name="pincode"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="City"
                      fullWidth
                      variant="outlined"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
