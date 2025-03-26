import styles from './Home.module.css'
import SignInSteam from '../../assets/img/steamSignIn-flat.png'
import Button from '../../components/Button/Button'

async function signIn() {
  const fetchData = await fetch('http://127.0.0.1:8000/auth/login', {
    headers: {
      'Access-Control-Allow-Origin': "*"
    }
  })
  console.log(fetchData)
}

function Home() { 
  return (
    <>
      <a href="http://127.0.0.1:8000/auth/login">Steam Login</a>
      <Button onClick={() =>{
        signIn()
      }}>SignIn</Button>
    </>
  );
}

export default Home;


