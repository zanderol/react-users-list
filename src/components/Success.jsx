import React from "react";

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>The invitation was sent to all {count} users.</p>
      <button className="send-invite-btn">Back</button>
    </div>
  );
};
