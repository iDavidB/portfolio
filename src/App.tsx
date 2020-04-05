import React, { FC } from "react";

import { Routes } from "./Constants/Routes";
import { Layout } from "./Layout/Layout";

const App: FC = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
