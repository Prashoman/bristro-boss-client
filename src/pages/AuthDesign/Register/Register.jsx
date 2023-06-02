import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContextProvider } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createRegister } = useContext(AuthContextProvider);
  // console.log(createRegister);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const handleSingup = (data) => {
    // console.log(data.name, data.email, data.password);
    createRegister(data.email, data.password)
      .then((result) => {
        const user = result.user;
        user.displayName = data.name;
        updateProfile(user, {
          displayName: data.name,
          photoURL: data.photo,
        });
        const userInfo = {
          email: user.email,
          name: user.displayName,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "User Login Successfully",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
              navigate("/");
            }
          });

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    // data.reset();
  };
  return (
    <div>
      <Helmet>
        <title>Birstro Boss | Register</title>
      </Helmet>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="flex w-full justify-center items-center">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="mt-5 px-5">Please Register First</h1>
            <form onSubmit={handleSubmit(handleSingup)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("photo")}
                  type="url"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div>
                <h1>
                  You have already account Plz? <Link to="/login">Login</Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
