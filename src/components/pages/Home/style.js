import styled from 'styled-components';

export const Content = styled.div`
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  margin: 15px auto;
  min-height: 400px;
`

export const Panel = styled.div`
  width: 1095px;
`

export const PanelHeader = styled.div`
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  a:nth-child(1){
    background-color: #80bd01;
    color: #fff;
  }
  a{
    color: #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0 10px;
  }
  a:hover{
    background-color: #80bd01;
    color: #fff;
  }
`

export const TopicList = styled.div`
  background: #fff;
  .topic-item:nth-child(1){
    border-top: none;
  }

`
export const TopicItem = styled.div`
  position: relative;
  padding: 10px 0 10px 10px;
  font-size: 14px;
  overflow: hidden;
  border-top: 1px solid #f0f0f0;
  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    float: left;
    display: block;
  }

  .title{
    float: left;
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
  }
  .last-reply{
    float: right;
  }
`