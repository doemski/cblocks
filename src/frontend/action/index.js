import Constants from '../constants/';

export * from './nodes';
export * from './sensors';
export * from './connections';
export * from './mappingDialog';

export const addHtmlIdMapping = (_id, htmlId) => ({type: Constants.Actions.ADD_HTMLIDMAPPING, _id, htmlId});

/*
export const fetchNodeIDsHasErrored = (bool) =>
  ({type: Constants.Actions.FETCH_NODE_IDS_HAS_ERRORED, hasErrored: bool});

export const fetchNodeIDsIsLoading = (bool) =>
  ({type: Constants.Actions.FETCH_NODE_IDS_IS_LOADING, isLoading: bool});

export const fetchNodeHasErrored = (bool) =>
  ({type: Constants.Actions.FETCH_NODE_HAS_ERRORED, hasErrored: bool});

export const fetchNodeIsLoading = (bool) =>
  ({type: Constants.Actions.FETCH_NODE_IS_LOADING, isLoading: bool});

export const fetchNode = (url) => {
  return (dispatch) => {
    dispatch(fetchNodeIsLoading(true));

    fetch(url).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(fetchNodeIsLoading(false));
      return response;
    }).then((response) => response.json()
      ).then(
        (node) => {
          console.log('asdasd');
          dispatch(addNode(node));
          dispatch(fetchSensorsForNode(node));
        }
     ).catch(() => dispatch(fetchNodeHasErrored(true)));
  };
};

export const fetchNodeIDsSuccess = (nodeIds) => {
  return (dispatch) => {
    nodeIds.forEach((nodeId) => {
      dispatch(fetchNode(Constants.URLs.FETCH_NODE_URL + nodeId));
    });
  };
};

export const fetchNodeIDs = () => {
  return (dispatch) => {
    dispatch(fetchNodeIDsIsLoading(true));
    fetch(Constants.URLs.FETCH_NODE_IDS_URL).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(fetchNodeIDsIsLoading(false));
      return response;
    }).then((response) => response.json()).then((nodeIds) =>
      dispatch(fetchNodeIDsSuccess(nodeIds))
      ).catch(() => dispatch(fetchNodeIDsHasErrored(true)));
  };
};

export const fetchNodeSuccess = (node) => {
  return {type: Constants.Actions.FETCH_NODE_SUCCESS, node};
};

export const move = (componentType, componentId, xPos, yPos) => {
  let actionType;
  switch (componentType) {
    case 'sensor':
      actionType = Constants.Actions.MOVE_SENSOR;
      break;
    case 'node':
      actionType = Constants.Actions.MOVE_NODE;
      break;
    default:
  }
  console.log('move');
  return {type: actionType, _id: componentId, xPos: xPos, yPos: yPos};
};

export const fetchSensorHasErrored = (bool) =>
  ({type: Constants.Actions.FETCH_SENSOR_HAS_ERRORED, hasErrored: bool});

export const fetchSensorIsLoading = (bool) =>
  ({type: Constants.Actions.FETCH_SENSOR_IS_LOADING, isLoading: bool});

export const fetchSensorSuccess = (sensor) =>
  ({type: Constants.Actions.FETCH_SENSOR_SUCCESS, sensor});

export const fetchSensor = (url) => {
  return (dispatch) => {
    dispatch(fetchSensorIsLoading(true));
    fetch(url).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(fetchSensorIsLoading(false));
      return response;

    }).then((response) => response.json()
  ).then((sensor) => dispatch(addSensor(sensor))
        ).catch(() => dispatch(fetchSensorHasErrored(true)));
  };
};

export const fetchSensorsForNode = (node) => {
  return (dispatch) => {
    node.sensors.forEach((sensorId) => {
      dispatch(fetchSensor(Constants.URLs.FETCH_SENSORS_URL + sensorId));
    });
  };
};
*/
