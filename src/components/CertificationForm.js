import React, { useState, useEffect } from "react";
import "../styles/Certificate.css";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Marquee from "react-fast-marquee";

import Marquee from "react-fast-marquee";

export default function CertificationForm() {
  const certifications = useSelector((state) => state.certification);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [formValues, setFormValues] = useState([
    { name: "name ye h", url: "url ye h" },
  ]);

  useEffect(() => {
    if (certifications.length !== 0) setFormValues([...certifications]);
    // eslint-disable-next-line
  }, []);

  const onSubmit = () => {
    console.log(formValues);

    dispatch({ type: "ADD-CERTIFICATE", payload: formValues });

    history("/projects"); //to navigate to certificate
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", url: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <div id="certificate-form">
      <div id="certificate-form-heading" className="row-center">
        Certifications
      </div>

      <div id="certificate-form-marquee">
        <Marquee gradient={false} speed={35}>
          ****Remember To Save After Deleting Fields****
        </Marquee>
      </div>
      <div id="certificate-form-body">
        <form>
          {formValues.map((item, index) => (
            <section key={index} id="certi-container">
              <TextField
                sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
                required
                id="outlined-required"
                label="Certificate Name"
                type="text"
                name="name"
                value={item.name}
                onChange={(e) => handleChange(index, e)}
              />
              <TextField
                sx={{ width: "100%", marginBottom: "10px", fontSize: "21px" }}
                required
                id="outlined-required"
                label="Certificate Url"
                type="url"
                name="url"
                value={item.url}
                onChange={(e) => handleChange(index, e)}
                // defaultValue={formValues.url}
              />

              <section
                id="obj-buttons"
                className="row-center"
                style={{ flexDirection: "row-reverse" }}
              >
                <button
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
              </section>
            </section>
          ))}

          <section id="obj-buttons" className="row-center">
            <button
              type="button"
              id="blue"
              onClick={() => history("/education")}
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
