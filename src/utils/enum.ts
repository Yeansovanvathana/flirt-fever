export enum HomePageTab {
  HOME = "home",
  NEWFEED = "new-feed",
  CHAT = "chat",
  PROFILE = "profile",
}

export const API_ENDPOINT = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  USER: {
    INFO: "/user/",
    INFO_UPDATE: (id: string) => "/user/",
    GET_FAVORITES: (id: string) => "/user/" + id + "/favorites",
  },
};
