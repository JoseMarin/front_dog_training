import { connect } from "react-redux";
import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:5000/post",
});

export default connect((state) => ({
  credentials: state.credentials,
  data: state.data.post,
}))(clienteAxios);
