import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/notFoundComponent')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/notFoundComponent"!</div>
}
