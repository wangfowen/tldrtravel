import React, { PropTypes } from 'react'
import Text from '../containers/items/Text'

const Header = ({title, author, description}) => {
  const titleId = "title"
  const descId = "desc"

  //TODO: am I supposed to key here or inside?
  return (
    <div>
      <Text content={ title } itemId={ titleId } />
      <p>{ author }</p>
      <Text content={ description } itemId={ descId } />
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Header
