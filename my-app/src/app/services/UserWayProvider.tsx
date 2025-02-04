import Head from "next/head";

const UserWayProvier = ({ children }: any) => {
  return (
    <>
      <Head>
        <Head>
          <script
            src="https://cdn.userway.org/widget.js"
            data-account="NE0ON2a6Ol"
          ></script>
        </Head>
      </Head>
      {children}
    </>
  );
};

export default UserWayProvier;
