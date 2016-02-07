import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getId, nodeMode, AType, Mode } from '../../common'

/*
 * Location: (General) => eventually will be other types of Locations - restaurant, nature, museum, shopping, etc
 * General: {geolocation, imageUrl, price, timeSpent, description}
 */

export default class Activity extends Component {
  static defaultProps = {
    itemId: getId()
  }

  render() {
    const { category } = this.props

    let activity
    if (nodeMode() === Mode.Edit) {
      switch(category) {
        case AType.Other:
          activity = (<div>Activity</div>)
          break;
        default:
          activity = null
      }
    } else {
      switch(category) {
        case AType.Other:
          activity = (<div>Activity</div>)
          break;
        default:
          activity = null
      }
    }

    return activity
  }
}

Activity.propTypes = {
  itemId: PropTypes.string.isRequired,
  tripMode: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string,
  geolocation: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  timeSpent: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    tripMode: state.meta.tripMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity)
