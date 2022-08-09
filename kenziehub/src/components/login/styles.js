import styled from "styled-components";

export const ContainerLogin = styled.div`
  .logoKenzie {
    color: #ff577f;
    margin: 0;
    font-size: larger;
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
    height: 85vh;
    max-height: 502px;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #212529;
    border-radius: 2px;

    margin-top: 20px;
  }
  .emailLabel,
  .passwordLabel {
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

  .emailInput,
  .passwordInput {
    width: 100%;
    height: 40%;
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
`;
