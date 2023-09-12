export type createUserParam = {
  username: string;
  email: string;
  password: string;
};

export type userCredentialParam = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  username: string;
  age: number;
  bio: string;
  email: string;
  height: string;
  weight: string;
  location: string;
  interests: [];
  page: number;
  preference: string;
  profile_url: string;
  verify: boolean;
};

export type Conversation = {
  id: number;
  fromUser: User;
  toUser: User;
};

export type Message = {
  id: number;
  content: string;
  createAt: string;
  author: User;
};
