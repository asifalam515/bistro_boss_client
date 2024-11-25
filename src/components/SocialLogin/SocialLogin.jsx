import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        Swal.fire("Logged In Using google");
        navigate("/");
      });
    });
  };
  return (
    <div className="px-8 mx-auto py-2">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2">Google</FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
