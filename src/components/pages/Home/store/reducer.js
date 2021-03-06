import { fromJS } from 'immutable';
import { INIT_TOPIC_LIST } from './constants';

const defaultState = fromJS({
  topicList: [],
  page: 1,
  tab: 'all'
})

export default (state=defaultState, action) => {
  switch(action.type){
    case INIT_TOPIC_LIST:
      return state.set('topicList', action.list)
    default:
      return state
  }
}