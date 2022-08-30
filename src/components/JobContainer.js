import React from "react";

function JobContainer(props) {
  return (
    <div className="border-dashed border-2 border-highlight rounded-xl mx-5 mt-3">
      <div className="p-5">
        <div>
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.company}</p>
          <p>{props.startTime} ~ {props.endTime}</p>
          <p>{props.location}</p>
          <p>Technologies: {props.technologies}</p>
        </div>
        <div>
          <ul className="list-disc mx-3">
            {props.description.map((item) => {
              return (
                <li>{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobContainer;
