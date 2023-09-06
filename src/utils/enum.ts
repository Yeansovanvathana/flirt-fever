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
  // USER: {
  //   INFO: (id: string) => '/user/' + id,
  //   GET_FAVORITES: (id: string) => '/user/' + id + '/favorites',
  //   CHANGE_PASSWORD: (id: string) => `/user/${id}/password`,
  //   BOOK_TO_FAVORITES: (id: string, bookId: string) =>
  //     `/user/${id}/favorites/${bookId}`,
  //   FORGOT_PASSWORD: (email: string) => '/user/forgot-password?email=' + email,
  //   RESET_PASSWORD: '/user/forgot-password/update'
  // },
};
