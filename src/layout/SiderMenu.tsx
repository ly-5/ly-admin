import { Layout, Nav } from '@douyinfe/semi-ui';

export default function SiderMenu() {
  return <Layout.Sider>
    <Nav
      style={{ maxWidth: 220, height: '100%' }}
      items={[
        { itemKey: 'Home', text: '首页', },
        { itemKey: 'Histogram', text: '基础数据',  },
        { itemKey: 'Live', text: '测试功能', },
        { itemKey: 'Setting', text: '设置',  },
      ]}
    />
  </Layout.Sider>;
}