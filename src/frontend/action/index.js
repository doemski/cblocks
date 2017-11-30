import Constants from '../constants/';

export * from './nodes';
export * from './sensors';
export * from './connections';
export * from './mappingDialog';

export const addHtmlIdMapping = (_id, htmlId) => ({type: Constants.Actions.ADD_HTMLIDMAPPING, _id, htmlId});
