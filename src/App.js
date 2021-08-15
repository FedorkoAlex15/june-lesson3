import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div>
            <h1>Users</h1>
            <Users/>
            <h1>Posts</h1>
            <Posts/>
        </div>
    );
}

export default App;
