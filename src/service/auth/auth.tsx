"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getUserInfo } from "../api/user";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { User } from "@/utils/type";

// Provide default values for user and loading
const defaultAuthContext = {
  user: null as User | null,
  loading: true, // Provide default empty functions
  logout: () => {},
  isAuthenticated: () => false,
};

const AuthContext = createContext(defaultAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      router.refresh();
      try {
        const accessToken = getCookie("accessToken");
        const userName: string = getCookie("userName") as string;
        console.log(userName);

        if (accessToken) {
          const response = await getUserInfo(accessToken, userName);
          const data = response.data;
          // console.log(data);

          if (data) {
            setUser(data);
          }
        } else {
          clearTokens();
        }
      } catch (error) {
        console.error("Error getting user profile:", error);
        clearTokens();
      } finally {
        setLoading(false);
      }
    };

    checkUserLoggedIn();
  }, []);

  const setTokens = (accessToken: string) => {
    setCookie("accessToken", accessToken);
    setCookie("tokenIssuedAt", new Date().getTime().toString());
  };

  const clearTokens = () => {
    deleteCookie("accessToken");
    deleteCookie("tokenIssuedAt");
    setUser(null);
  };

  // const login = async (accessToken: string, profile: any) => {
  //   setTokens(accessToken);
  //   setUser(profile);
  //   router.push("/");
  // };

  const logout = () => {
    clearTokens();
    // router.push("/login"); // Redirect to the login page after logout
  };

  const isAuthenticated = () => {
    const accessToken = localStorage.getItem("accessToken");
    return !!accessToken;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
