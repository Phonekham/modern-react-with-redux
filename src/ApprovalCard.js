import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      {props.children}
      <div className="content" />
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
