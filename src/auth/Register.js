export default function Register() {
  return (
    <div>
      <form className="register">
        <h1>Register</h1>
        <input type="text" placeholder="Enter your Username" />
        <input type="email" placeholder="Enter your Email" />

        <input type="password" placeholder="Enter your password" />
        <button>Register</button>
      </form>
    </div>
  );
}
