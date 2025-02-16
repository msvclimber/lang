import { createLazyFileRoute } from '@tanstack/react-router';

import UnderConstruction from "@/features/UnderConstruction";

export const Route = createLazyFileRoute('/users/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <h2>Раздел пользователей</h2>
      <UnderConstruction />
    </div>
  )
}
