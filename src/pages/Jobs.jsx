import React, { useState } from 'react';
import Filter_Nav from '../components/Filter_Nav';
import Jobs_cards from '../components/Jobs_cards';
import '../styles/Jobs.scss';

const Jobs = () => {
 
  const jobData = [
    {
      jobName: 'Front-End Developer',
      jobType: 'Fulltime',
      jobID: '122345',
      location: 'New York, NY',
      experience: '1-3',
    },
    {
      jobName: 'Back-End Developer',
      jobID: '122345',
      jobType: 'Part-time',
      location: 'San Francisco, CA',
      experience: '2-5',
    },
    {
      jobName: 'UX Designer',
      jobID: '122345',
      jobType: 'Internship',
      location: 'Los Angeles, CA',
      experience: '0',
    },
    {
      jobName: 'Product Manager',
      jobID: '122345',
      jobType: 'Freelance',
      location: 'Chicago, IL',
      experience: '1-4',
    },
    {
      jobName: 'Data Scientist',
      jobID: '122345',
      jobType: 'Fulltime',
      location: 'Seattle, WA',
      experience: '0-6',
    },
  ];
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleFilter = (department, location) => {
    const filtered = jobData.filter((job) => {
      const departmentMatch =
        !department || job.jobType === department || department === 'All JobTypes';
      const locationMatch =
        !location || job.location === location || location === 'All Locations';
      return departmentMatch && locationMatch;
    });
    setFilteredJobs(filtered);
  };

  return (
    <>
    <div className="jobcontainer">
      {/* <div className="Job_heading">Careers at HireXzo</div> */}
      <Filter_Nav onFilter={handleFilter} />
      <div className="job_cardSection">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <Jobs_cards
              key={index}
              jobName={job.jobName}
              jobID={job.jobID}
              jobType={job.jobType}
              location={job.location}
              experience={job.experience}
            />
          ))
        ) : (
          <p>No jobs match the selected filters.</p>
        )}
      </div>
      </div>
    </>
  );
};

export default Jobs;