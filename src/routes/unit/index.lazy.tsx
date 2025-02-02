import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/unit/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Welcome Words Home!" />
    </div>
  );
}
