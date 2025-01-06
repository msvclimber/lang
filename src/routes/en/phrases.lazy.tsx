import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/en/phrases')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <ul>
        <li>I understood you (формальное) - I got you (разговорное)</li>
        <li>It's nice to meet you too -&gt; Likewise</li>
        <li>I'll try -&gt; I'll give it a shot (неформальное)</li>
      </ul>
    </div>
  )
}