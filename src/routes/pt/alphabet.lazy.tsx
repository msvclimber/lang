import { createLazyFileRoute } from '@tanstack/react-router'

import AppTitle from '@/features/AppTitle'

export const Route = createLazyFileRoute('/pt/alphabet')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AppTitle title="Португальский алфавит" />
    </div>
  )
}
