import React, { lazy, Suspense } from "react";

// Dynamically import the Tina admin UI.
// The `then` callback wraps the TinaAdmin component in an object with a `default` property.
// This is the required module shape for React.lazy.
const TinaAdmin = lazy(() =>
  import("tinacms").then((m) => ({ default: m.TinaAdmin }))
);

const AdminPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TinaAdmin />
      </Suspense>
    </div>
  );
};

export default AdminPage;