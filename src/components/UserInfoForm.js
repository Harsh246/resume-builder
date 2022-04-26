import React from "react";
import "../styles/UserInfo.css";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserInfoForm() {
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const history = useNavigate();

  console.log(userInfo);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    dispatch({ type: "ADDUSERINFO", payload: data });

    history("/objective"); //to navugate to objective
  };

  return (
    <div id="user-form">
      <div id="user-form-heading" className="row-center">
        Personal Details
      </div>

      <div id="user-form-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section id="container">
            <TextField
              size="small"
              sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
              required
              id="outlined-required"
              label="Full Name"
              defaultValue={userInfo.name}
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
            <TextField
              size="small"
              sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
              id="outlined"
              required
              label="Job Role/Title"
              defaultValue={userInfo.linkedIn}
              name="linkedIn"
              {...register("linkedIn")}
              type="text"
            />
            <TextField
              size="small"
              sx={{ width: "45%", marginBottom: "10px", fontSize: "21px" }}
              required
              id="outlined-required"
              label="Mobile No."
              type="number"
              defaultValue={userInfo.mobile}
              name="mobile"
              {...register("mobile", { required: true })}
            />
            <TextField
              size="small"
              sx={{ width: "45%", marginBottom: "10px", fontSize: "21px" }}
              id="outlined"
              label="Alt Mobile No."
              type="number"
              defaultValue={userInfo.altMobile}
              name="altMobile"
              {...register("altMobile")}
            />
            <TextField
              size="small"
              sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
              required
              id="outlined-required"
              label="Email Address"
              type="email"
              defaultValue={userInfo.email}
              name="email"
              {...register("email", { required: true })}
            />
            <TextField
              size="small"
              sx={{ width: "45%", marginBottom: "10px", fontSize: "21px" }}
              required
              id="outlined"
              label="State"
              defaultValue={userInfo.address}
              name="address"
              {...register("address", { required: true })}
            />
            <TextField
              size="small"
              sx={{ width: "45%", marginBottom: "10px", fontSize: "21px" }}
              required
              id="outlined"
              label="Country"
              defaultValue={userInfo.country}
              name="country"
              {...register("country", { required: true })}
            />
          </section>
          <section id="buttons" className="row-center">
            <button type="submit">Save & next</button>
          </section>
        </form>
      </div>
    </div>
  );
}
