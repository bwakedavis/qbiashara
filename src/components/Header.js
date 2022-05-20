import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';

export const Header = ({title}) => {
  const onClick = (e) => {
    e.preventDefault();
    console.log('click')
}
  return (
    <div className="header">
        <h2 style={headingStyles}>{title}</h2>
        <Button color='green' text='Add' onClick={onClick}/>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyles = {
    color: 'red', backgroundColor: '#fff'
}