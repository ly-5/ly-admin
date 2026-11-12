import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Header, SiderMenu } from '@/layout';
import { Layout } from '@douyinfe/semi-ui';


export const Route = createFileRoute('/_admin')({
  ssr: false,
  component: () => (
    <Layout className="h-full">
      <Header />
      <Layout>
        <SiderMenu />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  ),
})