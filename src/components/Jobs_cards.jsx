import React from 'react'
import { FaMapMarker, FaBriefcase, FaEye } from 'react-icons/fa';
import '../styles/Jobs_cards.scss';

const Jobs_cards = (props) => {
    const { jobName, jobType, location, experience,jobID } = props;

  return (
    <>
    <div className="job_container">
      <div className="job-card">
      <div className="job-info">
        <h2> {jobName} <span className="job-id">({jobID})</span></h2>
        <p>Job Type: {jobType}</p>
        <p>
          <FaMapMarker /> {location}
        </p>
        <p>
          <FaBriefcase /> {experience} years
        </p>
      </div>
      <button className="view-button">
        <FaEye /> View
      </button>
    </div>
    </div>
    </>
  )
}

export default Jobs_cards