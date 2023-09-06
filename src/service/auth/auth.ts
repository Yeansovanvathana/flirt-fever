// import { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { getUserProfileApi } from "../axios/api";

// // Provide default values for user and loading
// const defaultAuthContext = {
//   user: null,
//   loading: true,
//   login: () => {}, // Provide default empty functions
//   logout: () => {},
//   isAuthenticated: () => false,
//   getAccessToken: () => null,
// };

// const AuthContext = createContext(defaultAuthContext);

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const checkUserLoggedIn = async () => {
//       try {
//         const accessToken = localStorage.getItem("accessToken");

//         if (accessToken) {
//           const response = await getUserProfileApi(accessToken);
//           const data = response.data;

//           if (data) {
//             setUser(data);
//           } else {
//             clearTokens();
//           }
//         } else {
//           clearTokens();
//         }
//       } catch (error) {
//         console.error("Error getting user profile:", error);
//         clearTokens();
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkUserLoggedIn();
//   }, []);

//   const setTokens = (accessToken: string) => {
//     localStorage.setItem("accessToken", accessToken);
//     localStorage.setItem("tokenIssuedAt", new Date().getTime().toString());
//   };

//   const clearTokens = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("tokenIssuedAt");
//     setUser(null);
//   };

//   const login = async (accessToken: string, profile: any) => {
//     setTokens(accessToken);
//     setUser(profile);
//     router.push("/");
//   };

//   const logout = () => {
//     clearTokens();
//     router.push("/login"); // Redirect to the login page after logout
//   };

//   const isAuthenticated = () => {
//     const accessToken = localStorage.getItem("accessToken");
//     return !!accessToken;
//   };

//   const getAccessToken = () => {
//     return localStorage.getItem("accessToken");
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         login,
//         logout,
//         isAuthenticated,
//         getAccessToken,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }
