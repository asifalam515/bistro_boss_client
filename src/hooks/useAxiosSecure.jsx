import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      const status = error.response.status;
      console.log("status error in the interceptor", status);
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // for 401 and 403 logout the user and move the user to login page
      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
