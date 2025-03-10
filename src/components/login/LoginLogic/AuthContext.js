import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';

import toLogin from './toLogin';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  const socket = useMemo(
    () => new WebSocket('wss://avsproject-back.onrender.com'),
    []
  );

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!user) {
      token && toLogin(token, setUser, setIsAuthenticated);
    }

    socket.onopen = () => {
      const message = JSON.stringify({
        action: 'show comments',
      });
      socket.send(message);

      console.log('WebSocket соединение установлено');
    };

    socket.onmessage = (event) => {
      if (event.data instanceof Blob) {
        return;
      }
      const message = JSON.parse(event.data);
      switch (message.type) {
        case 'comments':
          console.log(message.comments);
          setComments(message.comments);
          break;
        case 'error':
          console.log(message.text);
          break;
        default:
          break;
      }
    };
  }, [socket, comments, user, IsAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ user, comments, socket, setUser, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
