// pages/index.tsx

import type { ReactElement } from "react";
import Layout from "../components/layout";
// import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <h1>per page header</h1>
      {page}
      {/* <NestedLayout>{page}</NestedLayout> */}
    </div>
  );
};

export default Page;
