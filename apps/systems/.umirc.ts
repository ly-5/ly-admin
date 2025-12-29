import defineConfig from "@ly/umi-config";

export default defineConfig({
  qiankun: {
    master: {},
  },
  layout: {
    colorPrimary: "#1890ff",
    locale: false,
    title: "智云平台",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  },
  routes: [
    {
      path: "/",
      name: "首页",
      component: "./index",
    },
    {
      path: "/veh",
      name: "车辆管理",
      microApp: "veh",
    },
  ],
});
