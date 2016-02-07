
import React, { PropTypes } from 'react'

const ViewRoute = ({ onClick }) => {
  return (
    <div onClick={() => onClick()}>
      Viewing route
    </div>
  );
}

ViewRoute.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ViewRoute
