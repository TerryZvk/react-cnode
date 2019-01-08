import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Pagination } from 'antd';
import { Content, Panel, PanelHeader, TopicList, TopicItem } from './style';

const parseTime = (timeStr) => {
  const lastReplyTime = new Date(timeStr);
  const time = (new Date().getTime() - lastReplyTime.getTime())/(3600*1000);
  const parsedTime = Math.floor(time);
  if(parsedTime === 0){
    return Math.floor(time*60) + '分钟前';
  }else if(parsedTime>0 & parsedTime < 24){
    return parsedTime + '小时前';
  }else{
    return Math.floor(parsedTime/24) + '天前';
  }
}

const parseTabs = (status, tab) => {
  switch(tab){
    case 'share':
      if(status === true){
        return '置顶'
      }else{
        return '分享';
      }
    case 'ask':
      return '问答';
    case 'good':
      return '精华';  
    case 'top':
      return '置顶'
    default:
      return ''  
  }
}

class Home extends Component {
  render() {
    return (
      <Content>
        <Panel>
          <PanelHeader>
            <a　href='/'>全部</a>
            <a　href='/'>精华</a>
            <a　href='/'>分享</a>
            <a　href='/'>问答</a>
            <a　href='/'>招聘</a>
            <a　href='/'>客户端测试</a>
          </PanelHeader>
          <TopicList>
            {
              this.props.topicList.map(item => (
                <TopicItem key={item.get('id')} className='topic-item'>
                  <img className='avatar' src={item.getIn(['author', 'avatar_url'])} alt='' />
                  <div className='title'> 
                  <span className='visit-count'>{item.get('reply_count')}/{item.get('visit_count')}</span> 
                  {
                    item.get('top') === true ?   <span className='top'>{parseTabs(item.get('top'), item.get('tab'))}</span> : 
                    <span className='tab'>{parseTabs(item.get('top'), item.get('tab'))}</span>
                  }
                  {item.get('title')}
                  </div>
                  <div className='last-reply'>{parseTime(item.get('last_reply_at'))}</div>
                </TopicItem>
              ))
            }
          </TopicList>
          <div className='pagination'>
            
          </div>
        </Panel>
      </Content>
    );
  }

  componentDidMount(){  
    this.props.getTopicList();
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList']),
  page:  state.getIn(['home', 'page']),
  tab: state.getIn(['home', 'tab'])
})

const mapDispatchToProps = (dispatch) => ({
  getTopicList(tab='all', page=1){
    const action = actionCreators.getTopicList(tab='all', page=1);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);