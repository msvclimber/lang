import { createLazyFileRoute } from "@tanstack/react-router";

import UnderConstruction from "@/features/UnderConstruction";

export const Route = createLazyFileRoute("/tr/alphabet")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>
    <h2>Алфавит</h2>
    <UnderConstruction />
  </div>;
}
