import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      <h1>StreamDelete</h1>
      <Modal
        title="Delete Stream"
        content="Are you sure want to delete the stream?"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
