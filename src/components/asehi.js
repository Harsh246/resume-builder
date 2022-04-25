import React, { useRef } from "react";
import "../styles/Resume.css";
import { FaPhoneAlt, FaMapMarker, FaEnvelope, FaLink } from "react-icons/fa";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";

export default function Resume() {
  const ref = useRef();

  const userInfo = useSelector((state) => state.userInfo);
  const educational = useSelector((state) => state.educational);
  const certification = useSelector((state) => state.certification);
  const projects = useSelector((state) => state.projects);
  const skills = useSelector((state) => state.skills);
  const objective = useSelector((state) => state.objective);

  const handleDownloadPdf = async () => {
    const element = ref.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");

    // const report = new JsPDF('portrait','pt','a4');
    // report.html(document.querySelector('.sub-page')).then(() => {
    //     report.save('report.pdf');
    // });
  };

  return (
    <>
      <div id="resume-button">
        {" "}
        <button
          className="download-button"
          type="button"
          onClick={handleDownloadPdf}
        >
          {" "}
          Download Resume{" "}
        </button>
      </div>

      <div id="body">
        <div className="main-page">
          <div className="sub-page" ref={ref}>
            <div id="resume-header">
              <div>
                <h3>Hi I'm</h3>

                <h1>{userInfo.name}</h1>

                <h3>A {userInfo.linkedIn}</h3>
              </div>

              <div id="resume-contact">
                <div className="title">
                  <h3>Contact</h3>
                </div>
                <div className="contact-body column-center">
                  <div className="field">
                    <FaPhoneAlt className="icon" style={{ color: "white" }} />{" "}
                    <span>
                      {userInfo.mobile}{" "}
                      {userInfo.altMobile ? `,${userInfo.altMobile}` : <></>}
                    </span>
                  </div>
                  <div className="field">
                    <FaMapMarker className="icon" style={{ color: "white" }} />{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      {userInfo.address}, {userInfo.country}{" "}
                    </span>
                  </div>
                  <div className="field">
                    <FaEnvelope className="icon" style={{ color: "white" }} />
                    <span style={{ textTransform: "lowercase", width: "70%" }}>
                      {userInfo.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="resume-body">
              <aside>
                <div id="resume-skills">
                  <div className="title">
                    <h3>&emsp;Skills</h3>
                  </div>

                  <div id="skills-container">
                    {skills?.map((item, index) => (
                      <div key={index} id="skill-box">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div id="resume-certificates">
                  <div className="title">
                    <h3>&emsp;certificates</h3>
                  </div>

                  {certification.map((item, index) => (
                    <div key={index} id="resume-certi-container">
                      <div className="certificate field">
                        <a
                          href={item.url}
                          target="_blank"
                          className="certi-link"
                        >
                          <FaLink />
                          {"    "}&nbsp;<span> {item.name}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
              <section id="resume-container">
                <div id="resume-objective">
                  <div className="title">
                    <h3>&emsp;About Me</h3>
                  </div>
                  <div id="about-container">{objective}</div>
                </div>
                <div id="resume-education">
                  <div className="title">
                    <h3>&emsp;education</h3>
                  </div>

                  <div id="resume-education-container">
                    {educational.map((item, index) => (
                      <div key={index} className="edu-container">
                        <div className="edu-decor"></div>
                        <div className="edu-right">
                          <div className="edu-container-title">
                            {item.title}
                          </div>
                          <div className="edu-container-school">
                            {item.name}
                          </div>
                          <div className="edu-container-year-marks">
                            <div className="edu-container-year">
                              {item.year}
                            </div>
                            <div className="edu-container-marks">
                              {item.marks}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div id="resume-projects">
                  <div className="title">
                    <h3>&emsp;Personal Projects</h3>
                  </div>

                  {projects.map((item, index) => (
                    <div key={index} className="project-resume">
                      <div className="project-name">{item.name} </div>
                      <div className="project-description">
                        <ul>{item.description}</ul>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <footer id="copyright">
  <a>  www.guyzresumebanlo.com</a>

</footer> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
