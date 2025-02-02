import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/fr/alphabet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Французский алфавит" />
    </div>
  );
}
