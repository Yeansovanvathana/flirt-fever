import { atom } from "recoil";

export const activeTabState = atom({
  key: "activeTab",
  default: "userDetailTab",
});
