import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrap}>
      <p className={css.text}>Hello,{user.name}!</p>
      <button type="button" className={css.btn} onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
