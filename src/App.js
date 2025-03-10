import './App.css';
import { AuthProvider } from './components/login/LoginLogic/AuthContext';
import Todos from './components/todo/Todos';
import Services from './components/services/Services';
import Information from './components/information/Information';
import Header from './components/header/Header';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <div className="wrapper">
          <main className="main">
            <Information />
          </main>
          <aside className="aside">
            <Todos />
          </aside>
        </div>
        <footer>
          <Services />
          <ul className="contacts">
            <li>
              <p>
                Mail me:
                <a
                  className="mail"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=prestonfaermontgl@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  prestonfaermontgl@gmail.com
                </a>
              </p>
            </li>
            <li>
              <p>
                Text me on telegram:
                <a
                  href="tg://t.me/@VanDerMillet"
                  target="_blank"
                  rel="noreferrer"
                >
                  @VanDerMillet
                </a>
              </p>
            </li>
          </ul>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
