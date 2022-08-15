import axios from "axios";
import { showAlert } from "./alerts";
import { BASE_URL } from "./password";

export const uploadPhoto = async (photo) => {
  let formData = new FormData();
  formData.append(
    "jwt",
    new Blob([JSON.stringify({ jwt: localStorage.getItem("jwt") })], {
      type: "application/json",
    })
  );

  console.log(formData.get("jwt"));

  try {
    const res = await axios({
      method: "PATCH",
      url: `${BASE_URL}/api/v1/users/updateMe`,
      data: {
        photo: photo,
        jwt: localStorage.getItem("jwt"),
      },
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data);

    if (res.data.status === "success") {
      showAlert("success", "Profile Photo Uploaded successfully!");
    }
  } catch (e) {
    showAlert("error", "Could'nt Upload Profile Photo! Try again.");
  }
};
