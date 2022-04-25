import React, { useRef } from "react";
import "../styles/Resume.css";
import Pdf from "../ResumePDF/Pdf";

import { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import { pdfjs, Document as PDFDocument, Page as PDFPage } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [documentURL, setDocumentURL] = useState();
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(
    () => {
      const generateBlob = async () => {
      
        const blob = await pdf(
          <Pdf />,
        ).toBlob();
        
        setDocumentURL(window.URL.createObjectURL(blob));
      };

      
        generateBlob();
     
    },
    [],
  );

  return (
    <>
  
     
      
    
    
  
<div id="resu"> 
 <div id="resume-button">
    <a
          href={documentURL}
          
          style={{ margin: 'auto 0 0' }}
          download="resume.pdf"
        >
          Download PDF
        </a>
    </div>

  
    <PDFDocument
        file={documentURL}
       
      >
        <PDFPage
          renderMode="svg"
          pageNumber={currentPage}
        />
      </PDFDocument>

</div>
  
  
      
    </>
  ); 
}
