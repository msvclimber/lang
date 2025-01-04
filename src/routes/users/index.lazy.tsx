import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/users/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome User Home!</h3>
    </div>
  )
}
