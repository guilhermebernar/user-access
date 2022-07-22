import { useState } from "react";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");
  console.log(userInput);
  const handleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <>
      <form>
        <input onChange={(event) => setUserInput(event.target.value)}></input>
        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  );
};

export default GetUserComponent;

// onSubmit={(event) => handleLogin(event.preventDefault())}
