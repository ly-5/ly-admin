import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'
import { CircleCheckIcon, CircleAlertIcon, CircleXIcon, Loader2Icon } from 'lucide-react'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="fill-success size-5 text-white" />,
        warning: <CircleAlertIcon className="fill-warning size-5 text-white" />,
        error: <CircleXIcon className="fill-destructive size-5 text-white" />,
        loading: <Loader2Icon className="size-5 animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
          '--width': 'max-content',
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: 'cn-toast',
          title: '!leading-[normal]',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
