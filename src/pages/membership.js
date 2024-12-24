import React, { useState } from "react";
import "../style/Membership.css";

function Membership() {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  const toggleBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="pricing-container">
      <div className="billing-toggle">
        <button
          className={billingCycle === "Monthly" ? "active" : ""}
          onClick={() => toggleBillingCycle("Monthly")}
        >
          Monthly
        </button>
        <button
          className={billingCycle === "Annual" ? "active" : ""}
          onClick={() => toggleBillingCycle("Annual")}
        >
          Annual
        </button>
      </div>
      <div className="plans">
        <div className="plan">
          <h3>DISCOVER</h3>
          <h1>$99</h1>
          <p>/ Per Month</p>
          <ul>
            <li>-5 classes per month</li>
            <li>-4 group classes monthly</li>
            <li>-Online class access</li>
            <li>-E-book fitness guide</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="plan enterprise">
          <h3>ENTERPRISE</h3>
          <h1>$299</h1>
          <p>/ Per Month</p>
          <ul>
            <li>-10 classes per month</li>
            <li>-8 group classes monthly</li>
            <li>-Online class access</li>
            <li>-E-book fitness guide</li>
            <li>-7 Extra fitness training</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="plan">
          <h3>PROFESSIONAL</h3>
          <h1>$199</h1>
          <p>/ Per Month</p>
          <ul>
            <li>-7 classes per month</li>
            <li>-6 group classes monthly</li>
            <li>-Online class access</li>
            <li>-E-book fitness guide</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
