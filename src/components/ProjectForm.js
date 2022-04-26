import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Marquee from "react-fast-marquee";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
// import Marquee from "react-fast-marquee";

export default function ProjectForm() {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [formValues, setFormValues] = useState([
    {
      name: "",
      description: "",
      start: "",
      end: "",
    },
  ]);

  useEffect(() => {
    if (projects.length !== 0) setFormValues([...projects]);
    // eslint-disable-next-line
  }, []);

  const onSubmit = () => {
    console.log(formValues);

    dispatch({ type: "ADD-PROJECTS", payload: formValues });

    history("/skills"); //to navigate to certificate
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        name: "",
        description: "",
        start: "",
        end: "",
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <div id="certificate-form">
      <div id="certificate-form-heading" className="row-center">
        Projects
      </div>

      <div id="certificate-form-marquee">
        {/* // eslint-disable-next-line */}
        <Marquee gradient={false} speed={35}>
          ****Remember To Save After Deleting Fields****
        </Marquee>
      </div>
      <div id="certificate-form-body">
        <form>
          {formValues.map((item, index) => (
            <section key={index} id="project-container">
              <Accordion allowZeroExpanded>
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>Add Projects</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <TextField
                      size="small"
                      sx={{
                        width: "100%",
                        marginBottom: "20px",
                        fontSize: "21px",
                      }}
                      id="outlined"
                      label="Project Name"
                      value={item.name}
                      type="text"
                      name="name"
                      onChange={(e) => handleChange(index, e)}
                    />

                    <TextField
                      size="small"
                      sx={{
                        width: "100%",
                        marginBottom: "20px",
                        fontSize: "21px",
                      }}
                      id="outlined"
                      label="Project Description"
                      type="text"
                      value={item.description}
                      name="description"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <TextField
                      size="small"
                      sx={{
                        width: "50%",
                        marginBottom: "20px",
                        fontSize: "21px",
                      }}
                      id="outlined"
                      label="Start Date"
                      type="date"
                      value={item.start}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="start"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <TextField
                      size="small"
                      sx={{
                        width: "50%",
                        marginBottom: "20px",
                        fontSize: "21px",
                      }}
                      id="outlined"
                      label="End Date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={item.end}
                      name="end"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <div id="edu-buttons">
                      <button
                        id="delete-button"
                        type="button"
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid blue",
                          color: "blue",
                        }}
                        onClick={() => removeFormFields(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </section>
          ))}

          <section id="obj-buttons" className="row-center">
            <button
              type="button"
              id="blue"
              onClick={() => history("/certifications")}
            >
              Back
            </button>
            <button type="button" id="blue" onClick={() => addFormFields()}>
              Add Field
            </button>

            <button type="button" onClick={onSubmit}>
              Save & next
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}
