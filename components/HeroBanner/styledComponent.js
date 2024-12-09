import styled from "styled-components";

export const MainContainer = styled.section`
  background-image: url("/hero-bg.png");
  width: 100vw;
  min-height: 80vh;
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  img{
    align-self: flex-end;
    width: 100%;
  }

  @media (min-width:900px){
    img{
      width: 40vw;
      height: 80vh;
      align-self: center;
    }
  }
  
`;

export const HeadingContainer = styled.div`
  width: 100%;
  height:60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 10px;
  left: 10px;

  @media (max-width: 767px) {
    p{
      display: none;
    }
  }
  
  
  @media (min-width: 768) {
    justify-content: flex-start;
    p{
      display: initial;
    }
  }
  h1{
    font-size: clamp(61px, 8.333vw, 220px);
    font-weight: 900;
    line-height: 100%;
    letter-spacing: 1px;
    font-style: normal;
    font-family: "Nexa", sans-serif;
    background: linear-gradient(180deg, #FAFAFA 50%, rgba(153, 153, 153, 0.2) 89.06%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 10;
  }

  p{
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    width: 40%;
    color: white;
    overflow: hidden;
    z-index: 1;
  }

  h4{
    color: #D7FB00 !important;
    font-size: clamp(23px, 3.293vw, 30px);
    font-weight: 700;
  }
  .h1-2{
    margin-left: 20px;
  }
  

  @media (min-width:900px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    p{
      width: 35%;
      font-size: 1.5rem;
      margin-top: 20px;
      
    }
  }

`;