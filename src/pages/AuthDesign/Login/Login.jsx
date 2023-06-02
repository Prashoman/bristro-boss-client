import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContextProvider } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin } = useContext(AuthContextProvider);
  const navigate = useNavigate();
  // console.log(user);
  const { register, handleSubmit } = useForm();
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (data) => {
    console.log(data);
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        Swal.fire({
          title: "User Login Successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const captureText = (e) => {
    //console.log(e.target.value);
    const textFeild = e.target.value;
    if (textFeild.length == 6) {
      if (validateCaptcha(textFeild) == true) {
        setDisable(false);
      } else {
        setDisable(true);
      }
      //console.log(textFeild, " ok ", LoadCanvasTemplateNoReload);
    } else {
      setDisable(true);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Birstro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="flex w-full justify-center items-center">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="mt-5 px-5">Please Login</h1>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />

                <input
                  type="text"
                  onChange={captureText}
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <h1>
                  You have new Plz? <Link to="/signup">Register</Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
