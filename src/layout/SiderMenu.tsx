import { Layout, Nav } from '@douyinfe/semi-ui';

export default function SiderMenu() {
  return <Layout.Sider>
    <Nav
      style={{ 
        maxWidth: 190, 
        height: '100%', 
        background: 'transparent',
        border: 'none',
      }}
      items={[
        { itemKey: 'Home', text: '首页', },
        { itemKey: 'Histogram', text: '基础数据',  },
        { itemKey: 'Live', text: '测试功能', },
        { itemKey: 'Setting', text: '设置',  },
      ]}
      footer={{
        collapseButton: true,
        collapseText: (collapsed) => collapsed ? '展开' : '收起',
      }}
    />
  </Layout.Sider>;
}