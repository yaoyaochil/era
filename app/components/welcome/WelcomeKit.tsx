import { useState } from 'react'
import EraShape from './EraShape'
import EraContent from './contents/EraContent'
import ElectronContent from './contents/ElectronContent'
import ReactContent from './contents/ReactContent'
import ViteContent from './contents/ViteContent'
import TailwindContent from './contents/TailwindContent'
import { motion, AnimatePresence } from 'framer-motion'
import './styles.css'
import { Button } from '@heroui/react'
import { useTheme } from "@heroui/use-theme";

export default function WelcomeKit() {
  const [activePath, setActivePath] = useState<number>(4)

  const handlePathHover = (index: number) => {
    setActivePath(index)
  }

  const handlePathReset = () => {
    setActivePath(4)
  }

  const content = () => {
    switch (activePath) {
      case 0:
        return <ElectronContent />
      case 1:
        return <ReactContent />
      case 2:
        return <ViteContent />
      case 3:
        return <TailwindContent />
      case 4:
        return <EraContent />
      default:
        return <EraContent />
    }
  }

  return (
    <div className="welcome-content flex flex-col gap-5">
      <div className="flex gap-5 items-center h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={'content-' + activePath}
            style={{ zIndex: 2, flex: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            {content()}
          </motion.div>
        </AnimatePresence>
        <EraShape onPathHover={handlePathHover} onPathReset={handlePathReset} />
      </div>
      <div className="flex justify-center items-center gap-4 opacity-50 hover:opacity-80 transition-opacity">
        <DarkModeToggle />
      </div>
    </div>
  )
}

const DarkModeToggle = () => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center gap-2 text-sm cursor-pointer">
      <Button color="secondary">
        {theme === 'dark' ? '深色模式' : '浅色模式'}
      </Button>
    </div>
  )
}
