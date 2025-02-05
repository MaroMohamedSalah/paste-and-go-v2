"use client";
import Script from "next/script";

const UserWayProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Script
        src="https://cdn.userway.org/widget.js"
        data-account="NE0ON2a6Ol"
        strategy="lazyOnload"
      />
      {children}
    </>
  );
};

export default UserWayProvider;
