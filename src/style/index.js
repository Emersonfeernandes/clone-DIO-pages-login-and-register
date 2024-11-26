import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background-color: #090c1b;
  color: #fff;
  padding: 0 50px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;

  img{
    width: 100px;
    position: absolute;
    top: 15px;
  }
`;

export const Content = styled.div`
  max-width: 500px;
  width: 25%;
  margin: 200px;
`;

export const ContentInform = styled.div`
  max-width: 500px;
  width: 32%;
  margin: 150px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  align-items: center;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background: #1e2536;
  color: #fff;

  &:focus {
    outline: none;
    border: 2px solid #e4105d;
  }
`;

export const Button = styled.button`
  background-color: #e4105d;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #c3094b;
  }
`;

export const Link = styled.a`
  color: #e4105d;
  text-decoration: none;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;