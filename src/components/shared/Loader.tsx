import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="var(--primary)"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </section>
  );
};

export default Loader;
