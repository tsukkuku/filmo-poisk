import { router } from "@/app/routers";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { SyncLoader } from "react-spinners";

export const RouteProvider = () => {
  return (
    <Suspense
      fallback={
        <SyncLoader
          color="var(--text-color)"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90vh",
            fontSize: "48px",
          }}
        />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};
