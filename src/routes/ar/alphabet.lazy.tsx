import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/ar/alphabet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Арабский алфавит" />
    </div>
  );
}
