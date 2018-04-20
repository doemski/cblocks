import React from 'react';
import PropTypes from 'prop-types';
import StatusBar2 from '../../component/StatusBar2';
import colorString from 'color-string';

class NumberResource extends React.Component {
  render () {
    if (this.props.smallForm === false) {
      //Single Resource
      const max = this.props.resource.schema.maximum;
      const min = this.props.resource.schema.minimum;

      // TODO: keep for now in case the old StatusBar is going to be needed
      const percentage = Math.round(this.props.currentValue
        / (max - min) * 100);

      return (
        <div>
            <div style={{textAlign: 'center', marginBottom: 4}}>{this.props.resource.name}</div>
            <div>
              <StatusBar2
                currentValue={this.props.currentValue}
                maximum={max}
                minimum={min}
                isWriteable={this.props.isWriteable}/>
              <div style={{textAlign: 'left', fontSize: 12, marginLeft: 8, display: 'block', float: 'left'}}>{min}</div>
              <div style={{textAlign: 'right', fontSize: 12, marginRight: 8, display: 'block', float: 'right'}}>{max}</div>
            </div>
            <div style={{textAlign: 'center', fontSize: 25, marginTop: 4, marginBottom: 4}}>{this.props.currentValue
              + ' ' + this.props.resource.schema.unit}</div>
        </div>
      );
    } else {
      //Multi Resource
      const max = this.props.resource.maximum;
      const min = this.props.resource.minimum;

      // TODO: keep for now in case the old StatusBar is going to be needed
      const percentage = Math.round(this.props.currentValue
        / (max - min) * 100);

      const barColor = colorString.get.rgb(this.props.resource.label) !== null ? this.props.resource.label : undefined;
      return (
        <div>
            <div style={{display: 'block'}}>
              <div style={{float: 'left', marginLeft: 8}}>
                {/*this.props.resource.label*/}
              </div>
              <div style={{width: '90%', float: 'right'}}>
                <StatusBar2
                  currentValue={this.props.currentValue}
                  maximum={max}
                  minimum={min}
                  color={barColor}
                  height={20}
                  isWriteable={this.props.isWriteable}/>
                <div style={{textAlign: 'left', fontSize: 8, marginLeft: 8, display: 'block', float: 'left'}}>{min}</div>
                <div style={{textAlign: 'right', fontSize: 8, marginRight: 8, display: 'block', float: 'right'}}>{max}</div>
              </div>
            </div>
        </div>
      );
    }
  }
}

NumberResource.propTypes = {
  currentValue: PropTypes.any,
  instanceID: PropTypes.number,
  isWriteable: PropTypes.bool,
  objectID: PropTypes.number,
  resource: PropTypes.object,
  smallForm: PropTypes.bool
};

NumberResource.defaultProps = {
  smallForm: false
};

export default NumberResource;
