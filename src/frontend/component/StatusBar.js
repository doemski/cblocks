import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'react-toolbox/lib/slider';

class StatusBar extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    currentValue: PropTypes.number,
    instanceID: PropTypes.number,
    isWriteable: PropTypes.bool,
    label: PropTypes.string,
    maximum: PropTypes.number,
    minimum: PropTypes.number,
    objectID: PropTypes.number,
    requestChangeToSubresource: PropTypes.func,
    resourceID: PropTypes.number
  }

  handleChange = (slider, value) => {
    if (this.props.isWriteable === true) {
      this.props.requestChangeToSubresource(this.props.label, value);
    }
  };

  render () {
    //make slider editable if appropriate
    const slider = this.props.isWriteable === true
    ? (<Slider pinned editable min={this.props.minimum} max={this.props.maximum}
      value={this.props.currentValue} onInput={console.log('input')} onChange={this.handleChange.bind(this, 'slider')} />)
    : (<Slider pinned min={this.props.minimum} max={this.props.maximum}
        value={this.props.currentValue} onChange={this.handleChange.bind(this, 'slider')} />);

    return (
      <div>
        { slider }
      </div>
    );
  }
}

export default StatusBar;
