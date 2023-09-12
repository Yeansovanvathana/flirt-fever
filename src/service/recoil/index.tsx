import { Conversation } from "@/utils/type";
import { atom } from "recoil";

export const activeTabState = atom({
  key: "activeTab",
  default: "userDetailTab",
});

export const activeFormState = atom({
  key: "activeForm",
  default: "login",
});

export const activeTabMenu = atom({
  key: "activeTabMenu",
  default: "homePage",
});

export const conversationsValue = atom({
  key: "conversationsValue",
  default: [] as Conversation[], // Ensure the default value matches the type
});
