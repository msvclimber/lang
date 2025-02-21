import { createLazyFileRoute } from "@tanstack/react-router";

import UnderConstruction from "@/features/UnderConstruction";

export const Route = createLazyFileRoute("/hi/idioms/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <UnderConstruction />
    </div>
  );
}
