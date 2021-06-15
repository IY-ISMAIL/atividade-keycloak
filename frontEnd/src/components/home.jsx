import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    const handleLogin = () => history.push("/login");
    return (
      <div>
        <h1>Home</h1>
        <button type="button" onClick={handleLogin}>
         entrar
        </button>
      </div>
    );
  }
  export default Home;