import styled from 'styled-components';

export const NavBar = styled.div`
  margin-bottom: 0;
  z-index: 9;
  width: 100%;
  position: relative;
  background: #444;
  font-size: 13px;
`

export const Container = styled.div`
  width: 100%;
  min-width: 960px;
  margin: 0 auto;
  max-width: 1400px;
  padding: 5px 0;
`

export const Icon = styled.a`
  width: 120px;
  display: inline-block;
  padding: 3px 20px;
  height: 34px;
  line-height: 34px;
  color: #ccc;
  font-weight: 700;
  img{
    width: 100%;
  }
`

export const Form = styled.form`
  display: inline-block;
  position: relative;
  top: -6px;
  border: 0;
  input{
    width: 233px;
    height: 28px;
    border: 0;
    border-radius: 26px;
    padding-left: 8px;
    background: #888;
  }
  input:focus{
    background: #fff;
  }
`

export const Nav = styled.ul`
  list-style: none;
  float: right;
  li{
    display: inline-block;
    padding: 0 20px;
  }
  a{
    color: #fff;
    font-size: 13px;
  }
`