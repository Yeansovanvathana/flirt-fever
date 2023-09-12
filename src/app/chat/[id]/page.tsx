"use client";
import { getMessage } from "@/service/api/chat";
import { useAuth } from "@/service/auth/auth";
import { conversationsValue, messageValue } from "@/service/recoil";
import { Conversation, MessageEventPayload } from "@/utils/type";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { getCookie } from "cookies-next";
import { FC, useContext, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import MessageContainer from "@/app/component/Layout/Menu/chat/MessageContainer";
import MessageInput from "@/app/component/Layout/Menu/chat/MessageInput";
import { SocketContext } from "@/utils/context/SocketContext";

interface pageProps {
  params: { id: number };
}

const page: FC<pageProps> = ({ params }) => {
  const { user } = useAuth();
  const token = getCookie("accessToken") as string;
  const conversations = useRecoilValue(conversationsValue);
  const router = useRouter();
  const [_, setMessages] = useRecoilState(messageValue);
  const socket = useContext(SocketContext);

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
        setMessages(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.id]);

  useEffect(() => {
    // console.log(socket);
    socket.on("connected", () => console.log("connected"));
    socket.on("onMessage", (payload: MessageEventPayload) => {
      const { conversation, ...message } = payload;
      setMessages((prev) => [message, ...prev]);
    });
    return () => {
      socket.off("connected");
      socket.off("onMessage");
    };
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="px-2 w-screen">
      <div className="mx-auto max-w-screen-sm px-4 h-screen">
        <div>
          {getUser.map((conversation, idx) => (
            <div className="flex items-center space-x-5" key={idx}>
              <ChevronLeftIcon
                className="icon cursor-pointer"
                onClick={handleBack}
              />
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={
                    getDisplayUser(conversation).profile_url ?? "/profile.png"
                  }
                  alt=""
                  className="object-cover rounded-full w-10 h-10"
                />
              </div>
              <div className="text-base text-AuroMetalSaurus-800">
                <h1 className="font-medium">
                  {getDisplayUser(conversation).username}
                </h1>
                <p className="text-xs">simple text</p>
              </div>
            </div>
          ))}
        </div>
        <MessageContainer />

        <MessageInput conversationId={params.id} />
      </div>
    </div>
  );
};

export default page;
