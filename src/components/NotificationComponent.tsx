import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/Notification";
import type { RootState } from "../store";

export function NotificationComponent() {
  const count = useSelector((state: RootState) => state.notification.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Notification value is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}
