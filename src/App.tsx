/** @jsxImportSource @emotion/react  */
import { css } from "@emotion/react";
import { App as AntApp, ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./router/Router";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Message: {
            zIndexPopup: 9999,
          },
        },
      }}
    >
      <AntApp css={cssApp}>
        <RouterProvider router={Router} />
      </AntApp>
    </ConfigProvider>
  );
}

export default App;

const cssApp = css`
  width: 100vw;
  height: 100dvh;
`;
