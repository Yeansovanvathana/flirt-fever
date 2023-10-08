import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function withAuth<P>(Component: React.ComponentType<P>) {
  return function ProtectedRoute(props: React.PropsWithChildren<P>) {
    const router = useRouter();
    const token: string = getCookie("accessToken") as string;
    const userIsAuthenticated = token ? true : false;

    useEffect(() => {
      if (!userIsAuthenticated) {
        router.push("/auth");
      }
    }, [userIsAuthenticated, router]);

    return <Component {...props} />;
  };
}
