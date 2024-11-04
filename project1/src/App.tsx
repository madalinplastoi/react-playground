import logo from './logo.svg';
import './App.css';
import Users from "./users/users.component";
import {User} from "./users/user.model";

function App() {
    const whenUsersLoaded = (data: User[]) => {
        debugger;
        alert('Users loaded!')
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Users onDataLoaded={whenUsersLoaded}/>
        </div>
    );
}

export default App;
