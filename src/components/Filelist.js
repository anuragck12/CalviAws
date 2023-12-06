// FileList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../App.css";
const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:3001/files");
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  let filesarr = [
    {
      name: "forecast.json",
      date: "17-10-2020",
      url: "https://google.com",
    },
    {
      name: "report.docx",
      date: "21-10-2020",
      url: "https://example.com",
    },
    {
      name: "presentation.pptx",
      date: "03-11-2020",
      url: "https://example.org",
    },
    {
      name: "budget.xlsx",
      date: "12-11-2020",
      url: "https://example.net",
    },
    {
      name: "proposal.pdf",
      date: "25-11-2020",
      url: "https://example.edu",
    },
    {
      name: "meeting_notes.txt",
      date: "02-12-2020",
      url: "https://example.biz",
    },
    {
      name: "analysis.csv",
      date: "14-12-2020",
      url: "https://example.us",
    },
    {
      name: "summary.json",
      date: "28-12-2020",
      url: "https://example.co.uk",
    },
    {
      name: "review.docx",
      date: "10-01-2021",
      url: "https://example.ca",
    },
    {
      name: "project_plan.pptx",
      date: "23-01-2021",
      url: "https://example.au",
    },
    {
      name: "expenses.xlsx",
      date: "06-02-2021",
      url: "https://example.in",
    },
    {
      name: "survey_results.pdf",
      date: "18-02-2021",
      url: "https://example.za",
    },
    {
      name: "training_notes.txt",
      date: "03-03-2021",
      url: "https://example.jp",
    },
    {
      name: "data_analysis.csv",
      date: "15-03-2021",
      url: "https://example.mx",
    },
    {
      name: "proposal_v2.json",
      date: "28-03-2021",
      url: "https://example.fr",
    },
    {
      name: "feedback.docx",
      date: "10-04-2021",
      url: "https://example.de",
    },
    {
      name: "presentation_v2.pptx",
      date: "22-04-2021",
      url: "https://example.es",
    },
    {
      name: "financial_report.xlsx",
      date: "05-05-2021",
      url: "https://example.it",
    },
    {
      name: "research_paper.pdf",
      date: "18-05-2021",
      url: "https://example.nl",
    },
    {
      name: "notes.txt",
      date: "30-05-2021",
      url: "https://example.pt",
    },
  ];

  return (
    <div className="content">
      <h2 className="subheading">View Files</h2>
      <div className="fileslist">
        {filesarr.map((file, index) => (
          <div key={index} className="file-item">
            <a href={file.url} className="file-link">
              {file.name}
            </a>
            <span className="file-date">{file.date}</span>
            <button className="viewbtn">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileList;
