import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/ja/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Японский</h3>
    </div>
  )
}
