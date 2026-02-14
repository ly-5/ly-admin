import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'

export default function SettingsButton() {
  return (
    <Button variant="ghost" size="icon" className="cursor-pointer">
      <Settings className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  )
}
