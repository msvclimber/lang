import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/it/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Итальянский</h3>
    </div>
  );
}
