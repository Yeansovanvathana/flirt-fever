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
    // INFO: "/users",
    INFO: (username: string) => "/users/username/" + username,
    INFO_UPDATE: "/users/",
    GET_FAVORITES: (id: string) => "/user/" + id + "/favorites",
    GET_VERIFY_USER: "/users/verify",
    DELETE_USER: (username: string) => "/users/username/" + username,
  },
  MATCHING: {
    CREATE_MATCHING: "/matching",
    ACCEPT_MATCHING: (id: string) => "/matching/accept/" + id,
    GET_MATCHING_REQUEST: "/matching/requests",
    DELETE_MATCHING: (id: string) => "/matching" + id,
  },
  MESSAGE: {
    GET_MESSAGE: (id: number) => "/message/" + id,
  },
};
