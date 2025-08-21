import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) { /* 
      Primeiro eu verifico se existe o termo que eu estou querendo validar
      e em seguida se o valor for falso retorna uma mensagem de erro do campo 
       */
      setError(types[type].message);
      return false;
    } else {
      setError(null); // se nenhum dos dois erros ocorrem ele não retorna nenhum erro e valida o formulário
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), /* 
    quando eu exportar a função validate, eu vou exporta-lá como um método que já vai ativar a função validate mesmo 
    e vai verificar o valor*/
    onBlur: () => validate(value), // valida quando o usuário clica no campo do formulário e sai do campo
  };
};

export default useForm;
