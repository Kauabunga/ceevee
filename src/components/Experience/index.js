import React from "react";
import format from "date-fns/format";
import formatDistanceStrict from "date-fns/formatDistanceStrict";

import { jobs } from "../../content";
import Text from "../Text";

export default function Experience() {
  const filteredJobs = React.useMemo(
    () => jobs.filter((job) => !job.isDisabled),
    [],
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
                <em>
                  <Date startDate={job.startDate} endDate={job.endDate} />
                </em>
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

              {[].concat(job.brief).map((brief) => (
                <p key={brief} className="jobBrief">
                  <Text>{brief}</Text>
                </p>
              ))}

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

function Date({ startDate, endDate }) {
  const startString = startDate ? format(startDate, "MMM yyyy") : "";
  const endString = endDate ? format(endDate, "MMM yyyy") : "Current";

  const difference =
    startDate && endDate ? `(${formatDistanceStrict(endDate, startDate)})` : "";

  const dates = `${startString} - ${endString}`;

  return [dates, difference].join(" ");
}
