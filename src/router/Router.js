import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Root = lazy(() => import("pages/Root"));
const Page1 = lazy(() => import("pages/Page1"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "page1",
        element: (
          <Suspense>
            <Page1 />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
