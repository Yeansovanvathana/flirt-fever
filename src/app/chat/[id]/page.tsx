"use client";
import { getMessage } from "@/service/api/chat";
import { useAuth } from "@/service/auth/auth";
import { conversationsValue } from "@/service/recoil";
import { Conversation } from "@/utils/type";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { getCookie } from "cookies-next";
import { FC, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import MessageContainer from "@/app/component/Layout/Menu/chat/MessageContainer";
import MessageInput from "@/app/component/Layout/Menu/chat/MessageInput";

interface pageProps {
  params: { id: number };
}

const page: FC<pageProps> = ({ params }) => {
  const { user } = useAuth();
  const token = getCookie("accessToken") as string;
  const conversations = useRecoilValue(conversationsValue);
  const router = useRouter();

  const getUser = conversations.filter((user) => user.id == params.id);
  console.log("from me", getUser);

  const getDisplayUser = (conversation: Conversation) => {
    return conversation.toUser.id == user?.id
      ? conversation.fromUser
      : conversation.toUser;
  };

  useEffect(() => {
    getMessage(token, params.id)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="px-2 w-screen">
      <div className="mx-auto max-w-screen-sm px-4">
        <div>
          {getUser.map((conversation, idx) => (
            <div key={idx}>
              <div className="flex items-center space-x-5">
                <ChevronLeftIcon
                  className="icon cursor-pointer"
                  onClick={handleBack}
                />
                <button className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={
                      getDisplayUser(conversation).profile_url ?? "/profile.png"
                    }
                    alt=""
                    className="object-cover rounded-full w-10 h-10"
                  />
                </button>
                <div className="text-base text-AuroMetalSaurus-800">
                  <h1 className="font-medium">
                    {getDisplayUser(conversation).username}
                  </h1>
                  <p className="text-xs">simple text</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MessageContainer />
        <div className="bg-black">
          <MessageInput />
        </div>
      </div>
    </div>
  );
};

export default page;
