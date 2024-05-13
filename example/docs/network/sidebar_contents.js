module.exports = [
  {
    title: "107内网",
    path: "107-in",
    collapsable: true,
  },
  {
    title: "107外网",
    path: "107-out",
    collapsable: true,
  },
  // {
  // 	title:"107外网备用-映射福州正式环境",
  // 	path:'fuzhou-default-mark',
  // 	collapsable: true,
  // },
  {
    title: "福州正式环境",
    path: "fuzhou-default",
    collapsable: true,
  },
  {
    title: "福州测试环境",
    path: "fuzhou-test",
    collapsable: true,
  },
  {
    title: "上钮大城市实验室",
    path: "shangniuda",
    collapsable: true,
  },
  {
    title: "上海_外",
    path: "shanghai_out",
    collapsable: true,
  },

  {
    title: "自动化部署",
    path: "zidong",
    collapsable: true,
    children: [
      {
        title: "自动化部署",
        path: "zidong",
        collapsable: true,
      },
      {
        title: "sh_w_001",
        path: "./shanghai_try",
        collapsable: true,
      },
      {
        title: "sh_w_002",
        path: "shanghai_try_two",
        collapsable: true,
      },
    ],
  },
];
