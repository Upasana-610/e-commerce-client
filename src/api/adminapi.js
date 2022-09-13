import axios from "axios";
import { BASE_URL } from "./password";

export const createProduct = async ({ formData, setFormData }) => {
  let size = formData.pSize;
  let pSize = [];
  for (const key in size) {
    if (size[key] === true) pSize.push(`${key}`);
  }
  console.log(pSize);

  let image = formData.pImages;
  let pImages = [];
  for (const key in image) {
    if (image[key] !== "") pImages.push(`${image[key]}`);
  }
  console.log(pImages);
  delete formData["pSize"];
  delete formData["pImages"];
  formData["pSize"] = pSize;
  formData["pImages"] = pImages;
  console.log(formData);
  let result;
  if (formData.pCategory !== "") {
    try {
      result = await axios.get(
        `${BASE_URL}/api/v1/category/id?categoryid=${formData.pCategory}&subcategoryid=${formData.pSubCategory}`
      );
      console.log(result);
      delete formData.pCategory;
      delete formData.pSubCategory;
      formData["pCategory"] = result.data.categoryId;
      formData["pSubCategory"] = result.data.subcategoryId;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  let product;
  if (result) {
    try {
      product = await axios({
        method: "POST",
        url: `${BASE_URL}/api/v1/product`,
        data: formData,
      });

      console.log(product);
    } catch (e) {
      console.log(e);
      return false;
    }
    return true;
  }
};
