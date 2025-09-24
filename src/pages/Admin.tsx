import React, { lazy, Suspense } from "react";
import config from "../tina/config";

// Dynamically import the Tina admin UI
const TinaAdmin = lazy(() => import("tinacms").then((m) => m.TinaAdmin));

const AdminPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TinaAdmin config={config} />
      </Suspense>
    </div>
  );
};

export default AdminPage;