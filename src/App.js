import './App.css';
import Routes from "./router/Routes"
import {AuthProvider} from "./components/AuthContext/AuthProvider"
import SearchBar from "./components/searchBar/SearchBar"

function App() {
  return (
    <AuthProvider>
      <SearchBar />
      <Routes />
    </AuthProvider>
  );
}

export default App;
