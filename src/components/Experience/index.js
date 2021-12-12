import React from "react";

import jobs from "./index.jobs";

export default function Experience() {
  const filteredJobs = React.useMemo(
    () => jobs.filter((job) => !job.isDisabled),
    []
  );
  return (
    <div className="root">
      <h1 id="Experience" className="experienceTitle">
        Experience
      </h1>

      {filteredJobs.map((job, i) => (
        <div
          key={job.title}
          className={i !== filteredJobs.length - 1 ? "job" : "lastJob"}
        >
          <div className="jobContentContainer">
            <div className="jobContent">
              <div className="titleContainer">
                <h2 className="jobTitle">{job.title}</h2>
                <em>{job.date}</em>
              </div>

              {job.svg ? (
                <div className="jobImage">
                  <amp-img
                    style={job.svg.style}
                    src={job.svg.src}
                    height={job.svg.height}
                    width={job.svg.width}
                    layout="responsive"
                  />
                </div>
              ) : null}

              <p className="jobBrief">{job.brief}</p>

              {job.link ? (
                <a className="jobLink" href={job.linkHref}>
                  <strong>{job.link}</strong>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
