module.exports = [
  {
    id: 1,
    icon: 'laptop',
    name: '主页',
    router: '/dashboard',
  },
  {
    id: 2,
    bpid: 1,
    name: '用户管理',
    icon: 'user',
    router: '/user',
  },
  {
    id: 21,
    mpid: -1,
    bpid: 2,
    name: '用户详情',
    router: '/user/:id',
  },
  {
    id: 3,
    bpid: 1,
    name: '请求测试',
    icon: 'api',
    router: '/request',
  },
  {
    id: 4,
    bpid: 1,
    name: '定制UI元素',
    icon: 'camera-o',
  },
  {
    id: 41,
    bpid: 4,
    mpid: 4,
    name: 'IconFont',
    icon: 'heart-o',
    router: '/UIElement/iconfont',
  },
  {
    id: 42,
    bpid: 4,
    mpid: 4,
    name: 'DataTable',
    icon: 'database',
    router: '/UIElement/dataTable',
  },
  {
    id: 43,
    bpid: 4,
    mpid: 4,
    name: 'DropOption',
    icon: 'bars',
    router: '/UIElement/dropOption',
  },
  {
    id: 44,
    bpid: 4,
    mpid: 4,
    name: 'Search',
    icon: 'search',
    router: '/UIElement/search',
  },
  {
    id: 45,
    bpid: 4,
    mpid: 4,
    name: 'Editor',
    icon: 'edit',
    router: '/UIElement/editor',
  },
  {
    id: 46,
    bpid: 4,
    mpid: 4,
    name: 'layer (Function)',
    icon: 'credit-card',
    router: '/UIElement/layer',
  },
  {
    id: 5,
    bpid: 1,
    name: '图表',
    icon: 'code-o',
  },
  {
    id: 51,
    bpid: 5,
    mpid: 5,
    name: 'LineChart',
    icon: 'line-chart',
    router: '/chart/lineChart',
  },
  {
    id: 52,
    bpid: 5,
    mpid: 5,
    name: 'BarChart',
    icon: 'bar-chart',
    router: '/chart/barChart',
  },
  {
    id: 53,
    bpid: 5,
    mpid: 5,
    name: 'AreaChart',
    icon: 'area-chart',
    router: '/chart/areaChart',
  },
  {
    id: 6,
    bpid: 1,
    name: '导航测试',
    icon: 'setting',
  },
  {
    id: 61,
    bpid: 6,
    mpid: 6,
    name: '二级导航1',
    router: '/navigation/navigation1',
  },
  {
    id: 62,
    bpid: 6,
    mpid: 6,
    name: '二级导航2',
    router: '/navigation/navigation2',
  },
  {
    id: 621,
    bpid: 62,
    mpid: 62,
    name: '三级导航1',
    router: '/navigation/navigation2/navigation1',
  },
  {
    id: 622,
    bpid: 62,
    mpid: 62,
    name: '三级导航2',
    router: '/navigation/navigation2/navigation2',
  },
  {
    id: 7,
    bpid: 1,
    name: '业务原型',
    icon: 'gift',
    router: '/showcases',
  },
  {
    id: 71,
    bpid: 7,
    mpid: 7,
    name: '报销申请',
    router: '/showcases/apply',
  },
  {
    id: 72,
    bpid: 7,
    mpid: 7,
    name: '报销审批',
    router: '/showcases/approve',
  },
  {
    id: 73,
    bpid: 7,
    mpid: 7,
    name: '预算分析',
    router: '/showcases/budget',
  },
]
