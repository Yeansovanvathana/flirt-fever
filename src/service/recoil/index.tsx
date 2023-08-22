import { atom } from "recoil";

export const activeTabState = atom({
  key: "activeTab",
  default: "userDetailTab",
});

export const activeFormState = atom({
  key: "activeForm",
  default: "login",
});
