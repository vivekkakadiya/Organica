import axios from "axios";
const axiosFetch = async ({ url, method, data = null }) => {
  //api to fetch data from postman mock server
  try {
    // axios.get("dsa", {});
    console.log("error");
    // const token = JSON.parse(sessionStorage.getItem("user") ?? "{}").token;
    const token = sessionStorage.getItem("token") ?? "{}";
    console.log(token);
    const response = await axios.request({
      url: "http://localhost:9090/" + url,
      method,
      data: data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default axiosFetch;
