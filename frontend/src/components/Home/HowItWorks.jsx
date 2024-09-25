import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Join our community to unlock a world of opportunities! By creating an account 
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                  Find a Job / Post a Job
Discover your next career opportunity or connect with top talent! As a job seeker, you can browse through a diverse range of job listings across various industries
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Take the next step in your career journey or enhance your team with the right talent! As a job seeker, applying for positions is quick and straightforward—submit your resume and cover letter in just a few clicks, and let us help you land your dream job. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
