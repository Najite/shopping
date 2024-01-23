import React from "react";
import PropTypes from "prop-types";


export const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div className={className}
            style={{
                ...style,
                display: 'block',
                backgroundColor: 'red'
            }}
            onClick={onClick}
        >

        </div>
    )
}

export const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
        <div className={className}
            style={{
                ...style,
                display: 'block',
                backgroundColor: 'red'
            }}
            onClick={onClick}
        >

        </div>
    )
} 


// PropTypes declaration
PrevArrow.propTypes, NextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
}
