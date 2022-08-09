import { ContainerRegister } from "./styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import * as yup from "yup";
import axios from "axios";
function Register() {
  const navigate = useNavigate();

  const userRegister = (data) => {
    console.log(data);

    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response);

        Swal.fire(
          "Usuário cadastrado com sucesso",
          "redirecionando...",
          "success"
        );
        navigate("/");
      })
      .catch(
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ja castrado!",
        })
      );
  };

  const validation = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Senha fraca"
      ),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  return (
    <ContainerRegister>
      <span>
        <h1 className="logoKenzie">Kenzie Hub</h1>
        <button
          className="buttonLoginRedirect"
          onClick={() => {
            navigate("/");
          }}
        >
          Voltar
        </button>
      </span>
      <form className="formContainer" onSubmit={handleSubmit(userRegister)}>
        <h2>Crie sua conta </h2>
        <label className="labels">
          Nome
          <input
            type="text"
            className="inputs"
            placeholder="Digite aqui seu nome"
            name="name"
            {...register("name")}
          />
          <p className="errorMessage">{errors.name?.message}</p>
        </label>
        <label className="labels">
          Email
          <input
            type="email"
            className="inputs"
            placeholder="Digite aqui seu email"
            name="email"
            {...register("email")}
          />
          <p className="errorMessage">{errors.email?.message}</p>
        </label>

        <label className="labels">
          Senha
          <input
            type="password"
            className="inputs"
            placeholder="Digite aqui sua senha"
            name="password"
            {...register("password")}
          />
          <p className="errorMessage">{errors.password?.message}</p>
        </label>
        <label className="labels">
          Confimar Senha
          <input
            type="password"
            className="inputs"
            placeholder="Confirme aqui sua senha"
          />
          <p className="errorMessage">{errors.password?.message}</p>
        </label>
        <label className="labels">
          Bio
          <input
            type=""
            className="inputs"
            placeholder="Digite aqui sua biografia"
            name="bio"
            {...register("bio")}
          />
          <p className="errorMessage">{errors.bio?.message}</p>
        </label>
        <label className="labels">
          Contato
          <input
            type="text"
            className="inputs"
            placeholder="Digite aqui seu contato"
            name="contact"
            {...register("contact")}
          />
          <p className="errorMessage">{errors.contact?.message}</p>
        </label>
        <label className="labels">
          Selecionar módulo
          <select
            className="inputs"
            placeholder="Email"
            name="course_module"
            {...register("course_module")}
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
        </label>
        <button className="loginButtonSubmit">Cadastrar</button>
      </form>
    </ContainerRegister>
  );
}

export default Register;
