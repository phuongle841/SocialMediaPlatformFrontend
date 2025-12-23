import { NavLink } from "react-router-dom";
export interface Button {
  name: string;
  patch: string;
  icon: any;
}
export function LinkButton(button: Button) {
  return (
    <button className="border-2 px-2">
      <NavLink to={button.patch}>
        {button.icon}
        {button.name}
      </NavLink>
    </button>
  );
}
