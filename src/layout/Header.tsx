import ThemeToggle from '@/components/ThemeToggle';
import { Layout } from '@douyinfe/semi-ui';

export default function Header() {
  return (
    <Layout.Header className="sticky top-0 z-50 px-4 backdrop-blur-lg">
      <nav className="flex flex-wrap items-center gap-x-3 py-1">
        <div></div>
        <div></div>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </Layout.Header>
  )
}
