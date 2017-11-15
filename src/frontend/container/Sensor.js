import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Constants from '../constants/';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import SensorStatus from './SensorStatus';
import {HorizontalDividerLine} from '../component/HorizontalDividerLine';
import * as action from '../action/';
import { enableUniqueIds } from 'react-html-id';
import { jsPlumb } from 'jsPlumb';

const sensorSource = {
  beginDrag (props) {
    // Return the data describing the dragged item
    //const item = { _id: props._id };
    const {_id, xPos, yPos, label} = props;
    return {_id, xPos, yPos, label};
  },

  endDrag (props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    //console.log('Dropped on compatible target: ' + item);
    const dropResult = monitor.getDropResult();

    console.log('endDrag Sensor');
    console.log(dropResult);
    if (dropResult.dropEffect === 'move' && dropResult.item === component.props._id) {
      console.log('true');
      component.props.move(component.props._id, dropResult.xPos, dropResult.yPos);
    }
  }
};

function collect (cnnct, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: cnnct.dragSource(),
    connectDragPreview: cnnct.dragPreview(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

function getSensorStyles (props) {
  const { xPos, yPos, isDragging } = props;
  const transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
    cursor: 'move'
  };
}


class Sensor extends Component {
  constructor () {
    super();
    enableUniqueIds(this);
    let htmlId;
  }
  componentDidMount () {
    this.props.mapIdToHtmlId(this.props._id, this.htmlId);
    this.props.addConnectionForSensor(this.props._id, this.htmlId);
      // Use empty image as a drag preview so browsers don't draw it
      // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true
    });
  }

  render (){
    this.htmlId = this.nextUniqueId();

    return this.props.connectDragSource(
      <div id={this.htmlId} style={getSensorStyles(this.props)}>
        <Card style={{width: '350px'}}>
          <CardTitle
            title={this.props.label}
            subtitle="cBlocks Sensor"
          />
          {/*<CardText>'TEXTTEXT'</CardText>*/}
          <HorizontalDividerLine/>
          <SensorStatus currentValue = {this.props.value}/>
        </Card>
      </div>
    );
  }
}

Sensor.propTypes = {
  _id: PropTypes.string.isRequired,
  addConnectionForSensor: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  height: PropTypes.number,
  isDragging: PropTypes.bool.isRequired,
  label: PropTypes.string,
  mapIdToHtmlId: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  value: PropTypes.number,
  width: PropTypes.number,
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired
};

Sensor.defaultProps = {
  width: 400,
  height: 100,
  label: 'MySensor'
};

const mapStateToProps = (state, ownProps) => {
  let thisSensorIndex;
  for (let i = 0; i < state.sensors.count; i++){
    if (ownProps._id.localeCompare(state.sensors.all_sensors[i]._id) === 0) {
      thisSensorIndex = i;
    }
  }
  return {
          value: state.sensors.all_sensors[thisSensorIndex].value,
          xPos: state.sensors.all_sensors[thisSensorIndex].xPos,
          yPos: state.sensors.all_sensors[thisSensorIndex].yPos
        };
};

const mapDispatchToProps = (dispatch) => {
  return {
    move: (_id, xPos, yPos) => dispatch(action.moveSensor(_id, xPos, yPos)),
    addConnectionForSensor: (_id) => dispatch(action.addConnectionForSensor(_id)),
    mapIdToHtmlId: (_id, htmlId) => dispatch(action.addHtmlIdMapping(_id, htmlId))
  };
};


const dragSourceSensor = DragSource(Constants.ItemTypes.SENSOR, sensorSource, collect)(Sensor);
const connectedSensor = connect(mapStateToProps, mapDispatchToProps)(dragSourceSensor);
export default connectedSensor;
