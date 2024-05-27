import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Hello, {user.name}!</p>
      <button type="button">Log out</button>
    </div>
  );
}
