import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          // create user entry in the database
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the data base");
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

          navigate("/");
        })
        .catch((error) => console.log(error));
      Swal.fire("Account Created Successfully");
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 dark:bg-gray-800">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
              Sign Up Now!
            </h1>
            <p className="py-6 text-gray-700 dark:text-gray-300">
              Join us today and enjoy exclusive features. Create an account to
              get started!
            </p>
          </div>
          <div className="card bg-base-100 dark:bg-gray-700 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900 dark:text-gray-100">
                    Photo URL
                  </span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered dark:bg-gray-600 dark:text-gray-100"
                />
                {errors.photoURL && (
                  <span className="text-red-600 font-bold">
                    Photo URL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900 dark:text-gray-100">
                    Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered dark:bg-gray-600 dark:text-gray-100"
                />
                {errors.name && (
                  <span className="text-red-600 font-bold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900 dark:text-gray-100">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered dark:bg-gray-600 dark:text-gray-100"
                />
                {errors.email && (
                  <span className="text-red-600 font-bold">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900 dark:text-gray-100">
                    Password
                  </span>
                </label>
                <input
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-__+.]).{6,20}$/,
                  })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered dark:bg-gray-600 dark:text-gray-100"
                />
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password cannot be more than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must include uppercase, lowercase, and special
                    character
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mt-4 px-4">
              <small className="text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
