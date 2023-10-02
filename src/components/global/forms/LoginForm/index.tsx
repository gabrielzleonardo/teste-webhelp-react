import { useState } from "react";
import "./style.css";
import Button from "../../../ui/Button";
import TextInput from "../../../ui/inputs/TextInput";

const LoginForm = () => {
  const [activeForm, setActiveForm] = useState("Pessoa física");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [stateRegistration, setStateRegistration] = useState("");
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const validateForm = () => {
    const emptyFields = [];

    if (activeForm === "Pessoa física") {
      if (cpf === "") {
        emptyFields.push("cpf");
      }
      if (birthDate === "") {
        emptyFields.push("birthDate");
      }
    } else {
      if (cnpj === "") {
        emptyFields.push("cnpj");
      }
      if (stateRegistration === "") {
        emptyFields.push("stateRegistration");
      }
    }

    setEmptyFields(emptyFields);
  };

  const checkEmptyField = (fieldName: string) => {
    return emptyFields.includes(fieldName);
  };

  return (
    <form className="login-form">
      <span>Tipo de perfil</span>
      <div className="form-wrapper">
        <div className="form-selector-wrapper">
          <Button
            label="Pessoa física"
            onClick={() => {
              setActiveForm("Pessoa física");
            }}
            className={
              activeForm === "Pessoa física"
                ? "primary-button"
                : "secondary-button"
            }
          />
          <Button
            label="Pessoa juridica"
            onClick={() => {
              setActiveForm("Pessoa jurídica");
            }}
            className={
              activeForm === "Pessoa jurídica"
                ? "primary-button"
                : "secondary-button"
            }
          />
        </div>
        <div
          className="form-wrapper"
          style={{ display: activeForm === "Pessoa física" ? "" : "none" }}
        >
          <TextInput
            alertIsOpen={checkEmptyField("cpf")}
            value={cpf}
            label="CPF"
            placeholder="000.000.000-00"
            onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))}
          />
          <TextInput
            alertIsOpen={checkEmptyField("birthDate")}
            onChange={(e) => setBirthDate(e.target.value)}
            value={birthDate}
            label="Data de nascimento"
            placeholder="00/00/0000"
            type="number"
          />
        </div>
        <div
          className="form-wrapper"
          style={{ display: activeForm === "Pessoa jurídica" ? "" : "none" }}
        >
          <TextInput
            alertIsOpen={checkEmptyField("cnpj")}
            onChange={(e) => setCnpj(e.target.value.replace(/\D/g, ""))}
            value={cnpj}
            label="CNPJ"
            placeholder="00.000.000/0000-00"
          />
          <TextInput
            alertIsOpen={checkEmptyField("stateRegistration")}
            onChange={(e) => setStateRegistration(e.target.value)}
            value={stateRegistration}
            label="Inscrição estadual"
            placeholder="isento"
          />
        </div>
        <Button
          onClick={() => validateForm()}
          isLarge
          label="Entrar"
          className="primary-button"
        />
      </div>
    </form>
  );
};

export default LoginForm;
