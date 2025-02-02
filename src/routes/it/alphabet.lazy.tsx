import { createLazyFileRoute } from '@tanstack/react-router'

import AppTitle from '@/features/AppTitle'

export const Route = createLazyFileRoute('/it/alphabet')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Итальянский алфавит" />
    </div>
  )
}
