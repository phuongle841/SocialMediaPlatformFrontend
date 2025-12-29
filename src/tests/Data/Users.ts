import type { ProfileDTO } from "../../types/Profile";

export const MockUsers: ProfileDTO[] = [
  {
    ProfileId: 0,
    Email: "Phuongleminh841@gmail.com",
    DisplayName: "Columbia Hyposthenia",
    ProfilePicture:
      "https://scontent.fsgn20-1.fna.fbcdn.net/v/t39.30808-6/451873851_2194454344254599_7489112632263919315_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2ghe979RwZQQ7kNvwFmvH6Y&_nc_oc=AdkN5zCxvgpRrHPu352o7j49TwozirYLd-t4rfx47_P-V6RoxvRuB-FnxfRzluE4eOY&_nc_zt=23&_nc_ht=scontent.fsgn20-1.fna&_nc_gid=S5EYZDWaYL6uOXbD7-aD4A&oh=00_AflrOIIFT8rrb6p1DUt_i-ikWERkI4bova9-v-gThNWI3g&oe=6952D577",
    Bio: "Respect to 2 gentlemen in Paris.",
    DateOfBirth: new Date(1, 1, 2002).toUTCString(),
    IsActive: false,
  },
  {
    ProfileId: 1,
    Email: "ITITIU20281@student.hcmiu.edu.vn",
    DisplayName: "유즈✨부코 CF17_18",
    ProfilePicture:
      "https://pbs.twimg.com/profile_images/1805481251484352512/MaPKJ58l_400x400.jpg",
    Bio: "💛 그리고 싶은걸 그려요 : D 🎮 게임,애니 2차 창작위주(모든 댓글에 답글 달기는 어렵지만, 모두 읽고 있습니다.정말 감사합니다😊!)",
    DateOfBirth: new Date(1, 1, 2002).toUTCString(),
    IsActive: false,
  },
  {
    ProfileId: 2,
    Email: "@YuppieDrawings",
    DisplayName: "Yuppie 🐏",
    ProfilePicture:
      "https://pbs.twimg.com/profile_images/2002011557723525120/8asWTGe0_400x400.jpg",
    Bio: "No AI, no NSFW, no toxic. Just adorable creatures.Don't publish my art🐑English&Español🐑Art and handmade plushies!Header created by",
    DateOfBirth: new Date(1, 1, 2002).toUTCString(),
    IsActive: false,
  },
];
