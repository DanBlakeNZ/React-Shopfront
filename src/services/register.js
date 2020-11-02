import axios from "axios";

const registerDetails = async (name, email) => {
  return axios
    .post("https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth", {
      name,
      email,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};

export default registerDetails;
