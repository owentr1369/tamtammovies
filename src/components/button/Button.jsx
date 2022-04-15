import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  return (
    <div>
        <button
        className={`btn ${props.className}`}
        onClick={props.onClick ? ()=>props.onClick(): null}>
            {props.children}
        </button>
    </div>
  )
}
const OutlineButton = props => {
    return (
        <Button className={`btn-outline ${props.className}`}
        onClick={props.onClick ? ()=>props.onClick(): null}>
            {props.children}
        </Button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func
}

export default Button