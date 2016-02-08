import React, { PropTypes } from 'react'
import Text from '../containers/items/Text'

const Header = ({title, author, description}) => {
  const titleId = "title"
  const descId = "desc"

  return (
    <div className="header">
      <Text content={ title } id={ titleId } />
      <p>{ author }</p>
      <Text content={ description } id={ descId } />
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Header
