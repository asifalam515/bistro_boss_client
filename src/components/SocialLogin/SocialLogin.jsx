import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire("Logged In Using google");
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
