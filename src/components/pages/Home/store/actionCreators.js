import { INIT_TOPIC_LIST } from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const TopicListAction = (list) => ({
  type: INIT_TOPIC_LIST,
  list: fromJS(list)
})

export const getTopicList = (tab='all', page=1) => {
  return (dispatch) => {
    axios.get('https://cnodejs.org/api/v1/topics/?tab='+ tab + '&page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(TopicListAction(result));
    })
  }
}