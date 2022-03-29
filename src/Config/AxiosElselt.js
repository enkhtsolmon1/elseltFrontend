import axios from "axios";
const AxiosElselt = axios.create({
  baseURL: "http://khu.edu.mn:3000/api/v1/",
});

export default AxiosElselt;
