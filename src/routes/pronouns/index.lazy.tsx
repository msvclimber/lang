import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute("/pronouns/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Местоимения" />
    </div>
  );
}
