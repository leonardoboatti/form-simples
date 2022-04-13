import React, {useState} from "react";

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idade, setIdade] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setName(event.target.value);
    
  }

  const handleInput1 = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setLastName(event.target.value);
    
  }

  const handleInput2 = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setIdade(event.target.value);
    
  }


  return (
    <div>
      <div>
        Nome:
        <input type="text"  value={name} onChange={handleInput}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleInput1}/>
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleInput2}/>
      </div>

      <hr/>

      Olá {name} {lastName}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;