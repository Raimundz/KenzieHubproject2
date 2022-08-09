import { ContainerLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
function Login() {
  const addUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem("authToken", response.data.token);
        window.localStorage.setItem("userName", response.data.user.name);
        Swal.fire("Logado com sucesso", "redirecionando...", "success");
        navigate("/dashboard");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuário não cadastrado",
        });
      });
    console.log(data);
  };
  const validation = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  return (
    <ContainerLogin>
      <h1 className="logoKenzie">Kenzie Hub</h1>
      <form className="formContainer" onSubmit={handleSubmit(addUser)}>
        <h2>Login</h2>
        <label className="emailLabel">
          Email
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            name="email"
            {...register("email")}
          />
          <p className="errorMessage">{errors.email?.message}</p>
        </label>
        <label className="passwordLabel">
          Senha
          <input
            type="password"
            className="passwordInput"
            placeholder="Senha"
            name="password"
            {...register("password")}
          />
          <p className="errorMessage">{errors.password?.message}</p>
        </label>
        <button type="submit" className="loginButtonSubmit">
          Entrar
        </button>
        <h4>Ainda não possui uma conta ?</h4>
        <button
          type="button"
          className="registerButtonRedirect"
          onClick={() => navigate("/register")}
        >
          Cadastre-se
        </button>
      </form>
    </ContainerLogin>
  );
}

export default Login;
