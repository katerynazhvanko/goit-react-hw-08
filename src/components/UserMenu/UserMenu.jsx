import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Hello, {user.name}!</p>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
