import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 95%;
  height: 95vh;

  span {
    display: flex;
    width: 95vw;
    align-items: center;
    justify-content: space-between;
    max-height: 710px;

    max-width: 369px;
  }
  .logoKenzie {
    color: #ff577f;
    margin: 0;
    font-size: larger;
  }

  .buttonLoginRedirect {
    background-color: #212529;
    color: white;
    border: none;
    width: 28%;
    height: 100%;
    padding: 5px 26px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 1.438rem;
    border-radius: 4px;
  }
  .buttonLoginRedirect:hover {
    background-color: white;
    color: #212529;
  }
  h2 {
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 0.938rem;
    line-height: 1.375rem;
    margin-bottom: 23px;
    margin-top: 34px;
  }
  .formContainer {
    width: 95vw;
    height: 124vh;
    max-height: 777px;

    max-width: 369px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212529;
    border-radius: 2px;

    margin-top: 20px;
  }
  .labels {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    width: 80%;
    height: 20%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 0px;
  }

  .inputs {
    width: 100%;
    height: 44%;
    border: 0.9772px solid #f8f9fa;
    background: #343b41;
    border-radius: 3.20867px;
    color: white;
  }
  .loginButtonSubmit {
    border: none;
    width: 80%;
    height: 10%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.813rem;
    line-height: 1.313rem;
    color: #ffffff;
    background-color: #ff577f;
    border-radius: 4.06066px;
    margin-bottom: 27px;
  }
  .loginButtonSubmit:hover {
    background-color: white;
    color: #ff577f;
  }
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.625rem;
    line-height: 0.875rem;
    color: #868e96;
    margin-bottom: 17px;
  }
  .registerButtonRedirect {
    border: none;
    width: 80%;
    height: 10%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.813rem;
    line-height: 1.313rem;
    color: #ffffff;
    background-color: #868e96;
    border-radius: 4.06066px;
    margin-bottom: 27px;
  }
  .registerButtonRedirect:hover {
    color: #868e96;
    background-color: #ffffff;
  }
  .errorMessage {
    /* font-size: small;
    font-weight: 200; */
    color: red;
    margin: 0;
  }
  @media (max-height: 776px) {
    .errorMessage {
      margin-left: 100px;
    }
  }
`;
