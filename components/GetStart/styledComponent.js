import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#1e1e1e ;
  padding:20px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: #000;
  width: 90%;
  margin-bottom: 15px;
  border-radius: 10px;
  transition: ease-in-out 0.5s;
  text-align: center;
  text-overflow: clip;
    div{
        padding: 10px;
    }
  img{
    width: 100%;
    
  }
  h2{
    color: #fff;
    font-weight: 800;
  }
  p{
    color: grey;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    &:nth-child(odd) {
    flex-direction: row-reverse;

    div {
      margin-left: 0;
      margin-right: 20px;
      padding: 20px 10px;
    }
  }

    img{
        width: 40%;
        border-radius: 8px;
    }
    div{
        margin-left: 20px;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
    p{
        font-size: 1rem;
    }

    


  }

  &:hover{
    border:2px solid #D7FB00 ;

    h2{
        color: #D7FB00;
        transform: scale(1.0.2);
    }
    p{
        color: #fff;
    }

    
  }
`;