import React from "react";
import "../styles/Objective.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SkillsForm() {
  const skills = useSelector((state) => state.skills);

  console.log(skills);

  const dispatch = useDispatch();
  const history = useNavigate();

  console.log(skills);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const arrSkills = data.skills.replace(/\s/g, "").split(",");

    console.log(arrSkills);

    dispatch({ type: "ADD-SKILLS", payload: arrSkills });

    history("/resume");
  };

  return (
    <>
      <div id="objective-form" style={{ height: "70%" }}>
        <div id="objective-form-heading" className="row-center">
          Skills
        </div>

        <div id="objective-form-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <section id="container">
              {/* <TextField
                sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
                id="outlined"
                label="Enter comma-seperated skills"
                defaultValue={skills.join(",")}
                type="text"
                name="skills"
                {...register("skills")}
              /> */}

              <TextareaAutosize
                sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter comma-seperated skills"
                style={{ width: "100%" }}
                defaultValue={skills.join(",")}
                type="text"
                name="skills"
                {...register("skills")}
              />
            </section>
            <section id="obj-buttons" className="row-center">
              <button
                type="button"
                id="blue"
                onClick={() => history("/projects")}
              >
                Back
              </button>
              <button type="submit">Save</button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
