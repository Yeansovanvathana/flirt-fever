"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserInfo } from "../api/user";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

// Provide default values for user and loading
const defaultAuthContext = {
  user: null,
  loading: true, // Provide default empty functions
  logout: () => {},
  isAuthenticated: () => false,
  getAccessToken: () => {},
};

const AuthContext = createContext(defaultAuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const accessToken = getCookie("accessToken");

        if (accessToken) {
          const response = await getUserInfo(accessToken);
          const data = response.data;

          if (data) {
            setUser(data);
          } else {
            clearTokens();
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

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        isAuthenticated,
        getAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
