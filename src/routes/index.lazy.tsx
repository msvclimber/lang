import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <AppTitle title="Welcome Home!" />
    </div>
  );
}
