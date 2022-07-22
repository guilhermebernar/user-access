const WelcomePage  = ({ user, setIsLoggedIn })=>{
    
    const handleLogout = ()=>{
        return (
            setIsLoggedIn(false)
        )
    }
    console.log(user)
    return(
        <>
            <span>Bem vindo {user}</span>
            <button onClick={handleLogout}>Sair</button>
        </>
    )
}

export default WelcomePage