import { SyntheticEvent, useState } from "react";
import "./style.css";
import Button from "../../../ui/Button";
import TextInput from "../../../ui/Inputs/TextInput";

interface IFormFields {
  cpf: string;
  birthDate: string;
  cnpj: string;
  stateRegistration: string;
}

const LoginForm = () => {
  const [activeForm, setActiveForm] = useState("pf");
  const [formFields, setFormFields] = useState<IFormFields>({} as IFormFields);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormChange = () => {
    setActiveForm(activeForm === "pf" ? "pj" : "pf");
    setEmptyFields([]);
  };

  const checkEmptyField = (field: string) => {
    return emptyFields.includes(field);
  };

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const emptyFields: string[] = [];

    if (activeForm === "pf") {
      if (!formFields.cpf || formFields.cpf.length < 14) {
        emptyFields.push("cpf");
      }

      if (!formFields.birthDate || formFields.birthDate?.length < 10) {
        emptyFields.push("birthDate");
      }
    } else {
      if (!!formFields.cnpj || formFields.cnpj.length < 18) {
        emptyFields.push("cnpj");
      }

      if (!formFields.stateRegistration) {
        emptyFields.push("stateRegistration");
      }
    }

    setEmptyFields(emptyFields);

    if (emptyFields.length > 0) {
      return;
    } else {
      if (activeForm === "pf") {
        console.log("PF", formFields);
      } else {
        console.log("PJ", formFields);
      }
      alert("Formulário enviado com sucesso! Dados no console");
    }
  };

  function CPFFormatter(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const formatDate = (date: string) => {
    date = date.replace(/[^\d]/g, "");

    return date.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  };

  const formatCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]/g, "");

    return cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  };

  return (
    <form className="login-form">
      <span>Tipo de perfil</span>
      <div className="form-wrapper">
        <div className="form-selector-wrapper">
          <Button
            label="Pessoa física"
            onClick={handleFormChange}
            className={
              activeForm === "pf" ? "primary-button" : "secondary-button"
            }
          />
          <Button
            label="Pessoa jurídica"
            onClick={handleFormChange}
            className={
              activeForm === "pj" ? "primary-button" : "secondary-button"
            }
          />
        </div>
        <div
          className="form-wrapper"
          style={{ display: activeForm === "pf" ? "" : "none" }}
        >
          <TextInput
            alertIsOpen={checkEmptyField("cpf")}
            value={formFields.cpf}
            label="CPF"
            placeholder="000.000.000-00"
            onChange={(e) => {
              setFormFields({
                ...formFields,
                cpf: CPFFormatter(e.target.value),
              });
              emptyFields.splice(emptyFields.indexOf("cpf"), 1);
            }}
            maxLength={11}
          />
          <TextInput
            alertIsOpen={checkEmptyField("birthDate")}
            value={formFields.birthDate}
            label="Data de nascimento"
            placeholder="00/00/0000"
            onChange={(e) => {
              setFormFields({
                ...formFields,
                birthDate: formatDate(e.target.value),
              });
              emptyFields.splice(emptyFields.indexOf("birthDate"), 1);
            }}
            maxLength={10}
          />
        </div>
        <div
          className="form-wrapper"
          style={{ display: activeForm === "pj" ? "" : "none" }}
        >
          <TextInput
            alertIsOpen={checkEmptyField("cnpj")}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                cnpj: formatCNPJ(e.target.value),
              });
              emptyFields.splice(emptyFields.indexOf("cnpj"), 1);
            }}
            maxLength={14}
            value={formFields.cnpj}
            label="CNPJ"
            placeholder="00.000.000/0000-00"
          />
          <TextInput
            alertIsOpen={checkEmptyField("stateRegistration")}
            onChange={(e) => {
              handleInputChange(e);
              emptyFields.splice(emptyFields.indexOf("stateRegistration"), 1);
            }}
            value={formFields.stateRegistration}
            label="Inscrição estadual"
            placeholder="isento"
          />
        </div>
        <Button
          onClick={(e) => handleFormSubmit(e)}
          isLarge
          label="Entrar"
          className="primary-button"
        />
      </div>
    </form>
  );
};

export default LoginForm;
