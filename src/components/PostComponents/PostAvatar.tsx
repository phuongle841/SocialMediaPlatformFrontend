import type { ProfileDTO } from "../../types/Profile";

export function PostAvatar({ ProfilePicture }: ProfileDTO) {
  return (
    <div className="Avatar mx-5 max-w-[050px] max-h-[010px]">
      <img className="rounded-full" src={ProfilePicture} alt="" />
    </div>
  );
}
