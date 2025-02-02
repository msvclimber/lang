import { createLazyFileRoute } from '@tanstack/react-router';

import AppTitle from "@/features/AppTitle";

export const Route = createLazyFileRoute('/users/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <AppTitle title="Welcome User Home!" />
    </div>
  )
}
