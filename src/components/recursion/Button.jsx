import React, { Component } from "react";
import PropTypes from "prop-types";

//import "./button.scss";

export default class Button extends Component {
  render() {
    const { title, label, styleName, onClick } = this.props;

    return (
      <button
        title={title}
        onClick={onClick}
        data-testid="tool-button"
        className={styleName}
      >
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  styleName: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string
};
