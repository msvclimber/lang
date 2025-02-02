import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/id/alphabet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Инденезийский алфавит" />
    </div>
  );
}
