
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };


  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  }

  // As explained in the Login page.
  const onSubmit = async () => {
    try {
      const user = await emailPasswordSignup(form.email, form.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      alert(error);
    }
  };

  return <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
    <div className="text-black text-[40px] font-semibold font-['Inter']">Signup</div>
    <input
      label="Email"
      type="email"
      variant="outlined"
      name="email"
      value={form.email}
      onInput={onFormInputChange}
      className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black"
      style={{ marginBottom: "1rem" }}
    />
    <input
      label="Password"
      type="password"
      variant="outlined"
      className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black"
      name="password"
      value={form.password}
      onInput={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <button variant="contained" className="w-1/3 h-full bg-yellow-400 rounded-[50px] border-2 border-black" color="primary" onClick={onSubmit}>
      Signup
    </button>
    <p>Have an account already? <Link to="/login">Login</Link></p>
  </form>
}

export default Signup;