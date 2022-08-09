import styled from "styled-components";

export const DashboardKenziehub = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  .topContentDashboard {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 100%;
    height: 20%;

    border: #212529 1px solid;
    h1 {
      color: white;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: #f8f9fa;
    }
    p {
      color: white;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.375rem;
      color: #868e96;
    }
  }

  .KenziehubHeader {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 32px;
    align-items: center;
  }
  .logoKenzie {
    color: #ff577f;
    margin: 0;
    font-size: larger;
  }
  .exitButton {
    background-color: #212529;
    color: white;
    border: none;
    width: 28%;
    max-width: 56px;
    max-height: 32px;
    height: 50%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 1.438rem;
    border-radius: 4px;
  }
  .exitButton:hover {
    background-color: red;
  }
  .textContent {
    display: none;
    color: white;
  }
  .paragraphContent {
    display: none;
    color: #f8f9fa;
  }

  @media (min-width: 550px) {
    .topContentDashboard {
      flex-direction: row;
      justify-content: space-evenly;
    }
    .textContent {
      display: inline;
    }
    .paragraphContent {
      display: inline;
    }
  }
`;
