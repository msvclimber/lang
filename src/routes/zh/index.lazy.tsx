import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/zh/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Китайский</h3>
    </div>
  )
}
