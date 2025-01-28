import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pt/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Португальский</h3>
    </div>
  )
}
