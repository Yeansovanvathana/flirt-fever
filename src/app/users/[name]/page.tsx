import { FC } from "react";

interface pageProps {
  params: { name: string };
}

const page: FC<pageProps> = ({ params }) => {
  return <div>user name is : {params.name}</div>;
};

export default page;
