import { createLazyFileRoute } from '@tanstack/react-router'

import AppTitle from '@/features/AppTitle'

export const Route = createLazyFileRoute('/ja/alphabet')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Японский алфавит" />
    </div>
  )
}
