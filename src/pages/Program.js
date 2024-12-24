import React from "react";
import "../style/Program.css";

function Program() {
  return (
    <div className="program">
      <div className="container">
        <div className="content">
          <h1>Why Should People Choose Fitnessxia Services</h1>
          <ul>
            <li>
              <h3>- Personal Training</h3>
              <p>
                Our personal trainers can help you create a personalized fitness
                plan and track your progress.
              </p>
            </li>
            <li>
              <h3>- Expert Trainer</h3>
              <p>
                Our gym is proud to offer a team of highly skilled and certified
                trainers to help achieve your health & fitness goals.
              </p>
            </li>
            <li>
              <h3>- Flexible Time</h3>
              <p>
                There are many fitness classes that are offered during off-peak
                hours, such as early morning or late evening.
              </p>
            </li>
          </ul>
          <button>Join Today</button>
        </div>
        <div className="image-section">
          <div className="image-circle">
            <img
              src="https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/bicepworkouts.jpg?itok=clgOPXSn" // Replace with the actual image URL
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
