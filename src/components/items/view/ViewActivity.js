import React, { PropTypes } from 'react'

const ViewActivity = ({ onClick }) => {
  return (
    <div onClick={() => onClick()}>
      Viewing activity
    </div>
  );
}

ViewActivity.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ViewActivity
