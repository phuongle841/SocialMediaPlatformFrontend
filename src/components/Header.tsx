import { route } from "../routes/index";
import type { Button } from "../components/Button";
import { LinkButton } from "../components/Button";
import { NotificationComponent } from "./NotificationComponent";
function Header() {
  const HeaderButtons: Array<Button> = route.map((e) => {
    return { name: e.name, patch: e.path, icon: null };
  });
  return (
    <header className="flex justify-evenly">
      {HeaderButtons.map((e) => (
        <LinkButton {...e}></LinkButton>
      ))}
      <NotificationComponent></NotificationComponent>
    </header>
  );
}
export default Header;
