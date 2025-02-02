import { createLazyFileRoute } from '@tanstack/react-router'

import AppTitle from '@/features/AppTitle'

export const Route = createLazyFileRoute('/sw/alphabet')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Алфавит Суахили" />
    </div>
  )
}
