import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/en/alphabet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Английский алфавит" />
    </div>
  );
}
