import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/words/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Words Home!</h3>
    </div>
  )
}
