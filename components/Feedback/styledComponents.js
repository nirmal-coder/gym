import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  
  background-color: #000;
  padding: 20px;

  h2{
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 15px;
  }
  span{
    color: #D7FB00;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: #1e1e1e;
  max-width: 300px;
  padding: 15px 30px;
  text-align: center;
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 10px;

  h3{
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 12px;
  }
  p{
    color: grey;
    font-size: 0.8rem;
    margin-bottom: 12px;
  }
  div{
    display: flex;
    color: yellow;
    margin-bottom: 12px;
  }
  &:hover{
    border:2px solid #D7FB00 ;
  }
`;