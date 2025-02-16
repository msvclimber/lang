import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/en/pronouns/")({
  component: Index,
});

function Index() {
  return (
    <div>
    </div>
  );
}
