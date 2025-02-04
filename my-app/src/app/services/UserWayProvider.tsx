"use client";
import Head from "next/head";

const UserWayProvier = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <script
          src="https://cdn.userway.org/widget.js"
          data-account="NE0ON2a6Ol"
        ></script>
      </Head>
      {children}
    </>
  );
};

export default UserWayProvier;
