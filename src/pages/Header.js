import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setEmail(userInfo.email);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:8000/logout", {
      credentials: "include",
      method: "POST",
    });
    setEmail(null);
  }

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {email && (
          <>
            <Link to="/create"> Create new Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!email && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
