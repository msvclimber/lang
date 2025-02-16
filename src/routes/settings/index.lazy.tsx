import { createLazyFileRoute } from '@tanstack/react-router'

// import styles from './styles.module.scss'

export const Route = createLazyFileRoute('/settings/')({
  component: Index,
})

function Index() {
  return (
    <div>Настройки
    </div>
  )
}
