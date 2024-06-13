import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">Sing up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
}
