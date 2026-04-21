import { notFound } from "next/navigation";
import React from "react";

const NotFound = async ({ params }) => {
  const { id } = await params;
  const data = [];
  const found = data?.find((f) => f?.id == id);
  if (!found) {
    notFound();
  }
  return (
    <div>
      <h2>This is Installation details page</h2>
    </div>
  );
};

export default NotFound;
