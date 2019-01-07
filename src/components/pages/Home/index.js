import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Content, Panel, PanelHeader, TopicList, TopicItem } from './style';

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
                  <div className='title'>{item.get('title')}</div>
                  <div className='last-reply'>{item.get('last_reply_at')}</div>
                </TopicItem>
              ))
            }
          </TopicList>
        </Panel>
      </Content>
    );
  }

  componentDidMount(){  
    this.props.getTopicList();
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

const mapDispatchToProps = (dispatch) => ({
  getTopicList(){
    const action = actionCreators.getTopicList();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);