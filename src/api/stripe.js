/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
import { BASE_URL } from "./password";

export const CLIENT_URL = "https://roarupa.netlify.app/";

// const stripe = Stripe(
//   "pk_test_51LVChDSCF8VTOqb3LoCUt621iQIb3raYCPj4BCiNA5UQ9JXihttODGDLHHE0NE31TLKKG2ts5lXU9rNVpeuzx4cj00dsfpP6HX"
// );

export const bookTour = async ({ usercart, user }) => {
  try {
    // 1) Get checkout session from API
    const res = await axios({
      method: "POST",
      url: `${BASE_URL}/api/v1/bookings/create-checkout-session/`,
      data: {
        cartItems: usercart,
        userId: user._id,
        jwt: localStorage.getItem("jwt"),
        clienturl: `${CLIENT_URL}`,
      },
    });
    if (res.data.url) {
      window.location.href = res.data.url;
    }
    return res.config;
  } catch (err) {
    console.log(err.message);

    showAlert("error", "Payment Unsuccessful", 10);
  }
};
