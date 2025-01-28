import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pronouns/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Местоимения</h3>
    </div>
  )
}
