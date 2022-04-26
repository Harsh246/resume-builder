import React from "react";
import "../styles/Objective.css";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ObjectiveForm() {
  const objective = useSelector((state) => state.objective);
  const dispatch = useDispatch();
  const history = useNavigate();

  console.log(objective);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    dispatch({ type: "ADD-OBJECTIVE", payload: data.objective });

    history("/education"); //to navugate to objective
  };

  return (
    <div id="objective-form">
      <div id="objective-form-heading" className="row-center">
        About Me
      </div>

      <div id="objective-form-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section id="container">
            <TextField
              size="small"
              sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
              required
              id="outlined-required"
              label="About Me"
              defaultValue={objective}
              type="text"
              name="name"
              {...register("objective", { required: true })}
            />
          </section>
          <section id="obj-buttons" className="row-center">
            <button type="button" id="blue" onClick={() => history("/")}>
              Back
            </button>
            <button type="submit">Save & next</button>
          </section>
        </form>
      </div>
    </div>
  );
}
