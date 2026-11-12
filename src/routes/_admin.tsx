import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Header, Nav } from '@/layout';
import { Layout } from '@douyinfe/semi-ui';


export const Route = createFileRoute('/_admin')({
  ssr: false,
  component: () => (
    <Layout>
      <Header />
      <Layout>
        <Nav />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  ),
})