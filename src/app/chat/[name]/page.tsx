import { FC } from "react";

interface pageProps {
  params: { name: string };
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <div className="px-2 max-auto w-screen">
      <div className="mx-auto max-w-screen-sm px-4 ">
        <div>user name is : {params.name}</div>
      </div>
    </div>
  );
};

export default page;
