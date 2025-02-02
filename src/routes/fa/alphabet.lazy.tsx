import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/fa/alphabet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Персидский алфавит" />
    </div>
  );
}
