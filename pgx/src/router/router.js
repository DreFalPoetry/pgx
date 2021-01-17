const router = [
  {
    title: 'PGT-A',
    key: '/pgt-a',
    children: [
      {
        title: '总览',
        icon: 'sidebar-icon-dashboard',
        key: '/pgt-a/dashboard'
      },
      {
        title: '报告列表',
        icon: 'sidebar-icon-report',
        key: '/pgt-a/report'
      },
      {
        title: '数据管理',
        icon: 'sidebar-icon-data_manage',
        key: '/pgt-a/data_manage'
      },
      {
        title: '统计',
        icon: 'sidebar-icon-statistics',
        key: '/pgt-a/statistics'
      },
      {
        title: '数据回顾',
        icon: 'sidebar-icon-statistics',
        key: '/pgt-a/data_statistics'
      },
      {
        title: '回收站',
        icon: 'sidebar-icon-recycle_bin',
        key: '/pgt-a/recycle_bin'
      }
    ]
  },
  {
    title: 'CNV-seq',
    key: '/cnv-seq',
    children: [
      {
        title: '总览',
        icon: 'sidebar-icon-dashboard',
        key: '/cnv-seq/dashboard'
      },
      {
        title: '报告列表',
        icon: 'sidebar-icon-report',
        key: '/cnv-seq/report'
      },
      {
        title: '数据管理',
        icon: 'sidebar-icon-data_manage',
        key: '/cnv-seq/data_manage'
      },
      {
        title: '统计',
        icon: 'sidebar-icon-statistics',
        key: '/cnv-seq/statistics'
      },
      {
        title: '回收站',
        icon: 'sidebar-icon-recycle_bin',
        key: '/cnv-seq/recycle_bin'
      }
    ]
  },
  {
    title: 'AZF',
    key: '/azf',
    children: [
      {
        title: '总览',
        icon: 'sidebar-icon-dashboard',
        key: '/azf/dashboard'
      },
      {
        title: '报告列表',
        icon: 'sidebar-icon-report',
        key: '/azf/report'
      },
      {
        title: '数据管理',
        icon: 'sidebar-icon-data_manage',
        key: '/azf/data_manage'
      },
      {
        title: '统计',
        icon: 'sidebar-icon-statistics',
        key: '/azf/statistics'
      },
      {
        title: '回收站',
        icon: 'sidebar-icon-recycle_bin',
        key: '/azf/recycle_bin'
      }
    ]
  }
];

export default router;