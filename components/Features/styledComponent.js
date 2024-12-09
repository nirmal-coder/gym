import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  h2{
    font-size: 1.5rem;
    color: #fff;
    font-weight: 800;
  }
  span{
    color:#D7FB00 ;
  }
  p{
    color: #fff;
    margin-top: 10px;
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Card = styled.div`
  max-width: 300px;
  background-color: #1e1e1e;
  margin-bottom: 15px;
  padding:10px;
  border-radius: 5px;
  border: 1px solid ;
  transition: ease-in-out 0.5s;

  img{
    width: 100%;
  }

  h2{
    color: #fff;
  }
  p{
    color: #fff;
    width: 100%;
  }

  &:hover{
    border:2px solid #D7FB00 ;
  }
  
`;