import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/zh/alphabet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      404 Not found :)
    </div>
  );
}
