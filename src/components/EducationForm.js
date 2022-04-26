import React, { useState, useEffect } from "react";
import "../styles/Certificate.css";
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

export default function EducationForm() {
  const educations = useSelector((state) => state.educational);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [formValues, setFormValues] = useState([
    {
      name: "",
      title: "",
      marks: "",
      percentage: "",
      board: "",
      year: "",
    },
  ]);

  useEffect(() => {
    if (educations.length !== 0) setFormValues([...educations]);
    // eslint-disable-next-line
  }, []);

  const onSubmit = () => {
    console.log(formValues);

    dispatch({ type: "ADD-EDUCATION", payload: formValues });

    history("/certifications"); //to navigate to certificate
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
        title: "",
        marks: "",
        percentage: "",
        board: "",
        year: "",
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
        Add Qualifications
      </div>

      <div id="certificate-form-marquee">
        <Marquee gradient={false} speed={35}>
          ****Remember To Save After Deleting Fields****
        </Marquee>
      </div>
      <div id="certificate-form-body">
        <form>
          {formValues.map((item, index) => (
            <section key={index} id="spl-container">
              <Accordion allowZeroExpanded>
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>Add Qualification</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <TextField
                      size="small"
                      sx={{
                        width: "100%",
                        marginBottom: "20px",
                        fontSize: "16px",
                      }}
                      required
                      id="outlined-required"
                      label="School/College Name"
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
                        fontSize: "16px",
                      }}
                      required
                      id="outlined-required"
                      label="Board/University Name"
                      type="text"
                      value={item.board}
                      name="board"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <TextField
                      size="small"
                      sx={{
                        width: "50%",
                        marginBottom: "20px",
                        fontSize: "16px",
                      }}
                      id="outlined"
                      label="Title"
                      type="text"
                      value={item.title}
                      name="title"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <TextField
                      size="small"
                      sx={{
                        width: "50%",
                        marginBottom: "20px",
                        fontSize: "16px",
                      }}
                      required
                      id="outlined-required"
                      label="Year of Completion"
                      type="number"
                      value={item.year}
                      name="year"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <TextField
                      size="small"
                      sx={{
                        width: "50%",
                        marginBottom: "20px",
                        fontSize: "16px",
                      }}
                      required
                      id="outlined"
                      label="Marks Obtained"
                      value={item.marks}
                      name="marks"
                      onChange={(e) => handleChange(index, e)}
                    />
                    <TextField
                      size="small"
                      sx={{
                        width: "50%",
                        marginBottom: "20px",
                        fontSize: "16px",
                      }}
                      required
                      id="outlined"
                      label="Percentage"
                      value={item.percentage}
                      name="percentage"
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
              onClick={() => history("/objective")}
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
