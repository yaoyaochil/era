import { createFileRoute } from '@tanstack/react-router'
import WelcomeKit from '../components/welcome/WelcomeKit'
 
export const Route = createFileRoute('/')({
  component: () => <WelcomeKit />,
})