"use client";
import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL!);
export const SocketContext = createContext(socket);

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
