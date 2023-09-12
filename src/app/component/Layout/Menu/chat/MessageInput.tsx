import NavigationSvg from "@/app/component/icon/NavigationSvg";
import { postMessage } from "@/service/api/chat";
import { useAuth } from "@/service/auth/auth";
import { getCookie } from "cookies-next";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

interface pageProps {
  conversationId: number;
}

const MessageInput: FC<pageProps> = ({ conversationId }) => {
  const { register, handleSubmit, reset } = useForm();
  const token = getCookie("accessToken")!;
  const { user } = useAuth();
  console.log(user?.username, conversationId);
  const username = user?.username!;
  const conversation = Number(conversationId);
  // console.log(typeof conversation);

  const onSubmit = (data: any) => {
    try {
      const content = data.content;
      postMessage(token, username, conversation, content);
      // console.log(data.content);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className="flex  items-center justify-center p-3 border-2 border-AuroMetalSaurus-100 rounded-full text-AuroMetalSaurus-400 cursor-pointer"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        {...register("content")} // Register the input field with react-hook-form
        placeholder="Message"
        autoComplete="off" // Set autocomplete to "off"
        className="outline-none bg-transparent text-sm pl-3 w-full"
      />
      <button type="submit">
        <NavigationSvg />
      </button>
    </form>
  );
};

export default MessageInput;
