import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/fr/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Французский</h3>
    </div>
  );
}
