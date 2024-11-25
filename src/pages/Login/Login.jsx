import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged In Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsz = error.message;
        console.log(errorMsz);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { errorMsz },
        });
      });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss|Login</title>
      </Helmet>
      <div className="hero bg-gray-900 text-white min-h-screen">
        <div className="hero-content flex">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-gray-800 md:w-1/2 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-gray-700 text-white"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-blue-500"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="type the captcha above"
                  className="input input-bordered bg-gray-700 text-white"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {/*TODO: apply disable for re captcha */}
                <input
                  className="btn btn-primary bg-blue-500 border-none"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="px-6">
              <small>
                New Here? <Link to="/signup">Create an Account</Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
