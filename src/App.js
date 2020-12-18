import './App.css';
import Routes from "./router/Routes"
import {AuthProvider} from "./components/AuthContext/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
