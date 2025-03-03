import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/fr/phrases')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <ul>
        <li>C'est la vie - такова жизнь</li>
        <li>2</li>
      </ul>
    </div>
  )
}
