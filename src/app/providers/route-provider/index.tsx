import { router } from "@/app/routers";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

export const RouteProvider = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
