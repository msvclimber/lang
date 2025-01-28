import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/es/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Испанский</h3>
    </div>
  );
}
