import { NavLink, Link } from "react-router";
function Header() {
  return (
    <header className=" flex justify-evenly">
      <div>
        <NavLink to={"/home"}>
          <button>icon</button>
        </NavLink>
      </div>
      <div>Search Bar</div>
      <div>Profile</div>
      <div>New Post</div>
      <div>Friends</div>
      <div>Message</div>
      <div>Notification</div>
      <div>Setting</div>
    </header>
  );
}
export default Header;
