import React, { lazy, Suspense } from "react";

const TinaAdmin = lazy(() =>
  import("tinacms").then((m) => ({ default: m.TinaAdmin }))
);

const AdminPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TinaAdmin config={{}} />
      </Suspense>
    </div>
  );
};

export default AdminPage;