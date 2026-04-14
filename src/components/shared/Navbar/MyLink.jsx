import Link from "next/link";
import React from "react";

const MyLink = ({href,children}) => {
  return (
    <div>
      <li key={href}>
        <Link href={href}>{children}</Link>
      </li>
    </div>
  );
};

export default MyLink;
