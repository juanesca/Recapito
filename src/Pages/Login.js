import React, { useState } from "react";

import Header from '../Components/Header'
import Title from "../Components/Title";
import Label from "../Components/Label";
import Input from "../Components/Input";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(name, value) {
    if (name === "nombre") {
      setUser(value);
    } else {
      setPassword(value);
    }
  }
  function handleSubmit() {
    let account = { user, password };
    if (account.user != null && account.password != null) {
      console.log("account:", account);
    }
  }

  return (
    <div className="login-container justify-content-center">
      <div className="login-content">
      <Header />

        <Title
          text="TE DAMOS LA BIENVENIDA A
    R E C A P I T O"
        />
        <Label text="Nombre" />
        <Input
          attribute={{
            id: "nombre",
            name: "nombre",
            type: "text",
            placeholder: "Ingrese su nombre"
          }}
          handleChange={handleChange}
        />
        <Label text="Contraseña" />
        <Input
          attribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "Ingrese su contraseña"
          }}
          handleChange={handleChange}
        />
        <div className="submit-button-container">
          <button onClick={handleSubmit} type="button"
          className="btn btn-primary btn-lg w-75 d-flex mx-auto my-1 justify-content-center"
        >CONTINUAR</button>
        </div>
      </div>
    </div>
  );
}
