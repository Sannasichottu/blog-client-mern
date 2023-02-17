import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import IndexPage from "./pages/IndexPage";
import Layout from "./pages/Layout";
import { UserContextProvider } from "./pages/UserContext";
import CreatePost from "./post/CreatePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
