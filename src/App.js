import { useState } from 'react';
import './App.css';
import GetUserComponent from './components/GetUser/GetUser';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  
  const [isLoggedIn, setIsLoggedIn ] = useState(false)

  const [user, setUser] = useState("")

  return (
    <div className="App">
      {isLoggedIn ? 
        (
          <header className="App-header">
            <WelcomePage  user={user} setIsLoggedIn={setIsLoggedIn}/>
          </header>
        ) 
      : 
        (
          <header className="App-header">
            <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
          </header>
        )
      }
    </div>
  )
}

export default App;
