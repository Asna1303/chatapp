import Login from "./molecules/loginpage";
import Registerpage from "./molecules/registerpage";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ChatScreen from "./molecules/ChatScreen";
import Landing from "./molecules/landing";
import Dashboard from "./molecules/Dashboard";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/Chat" element={<ProtectedRoute><ChatScreen /></ProtectedRoute>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registerpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
