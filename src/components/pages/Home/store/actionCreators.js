import { INIT_TOPIC_LIST } from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const TopicListAction = (list) => ({
  type: INIT_TOPIC_LIST,
  list: fromJS(list)
})

export const getTopicList = () => {
  return (dispatch) => {
    axios.get('https://cnodejs.org/api/v1/topics').then((res) => {
      const result = res.data.data;
      dispatch(TopicListAction(result));
    })
  }
}