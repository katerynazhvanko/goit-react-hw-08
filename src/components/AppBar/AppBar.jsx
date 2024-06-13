import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const { isLoggenIn } = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggenIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
