export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index/Home.vue')
  },
  {
    path: '/stack',
    name: 'stack',
    component: () => import('@/views/index/Stack.vue')
  },
  {
    path: '/seach/:val',
    name: 'seach',
    component: () => import('@/views/index/Seach')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/index/List.vue'),
    children: [
      {
        path: '/list',
        name: 'list',
        component: () => import('@/components/list/ReightBox.vue')
      },
      {
        path: '/detailed/:id',
        component: () => import('@/components/list/DetailedList.vue'),
        props: true
      }
    ]
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('@/views/index/Details.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/index/User.vue'),
    children: [
      {
        path: '/',
        name: 'user',
        component: () => import('@/components/user/UserInfo.vue')
      },
      {
        path: '/bookshelf',
        name: 'user',
        component: () => import('@/components/user/Bookshelf.vue')
      },
      {
        path: '/browse',
        name: 'user',
        component: () => import('@/components/user/info/Browse.vue')
      },
      {
        path: '/personal',
        name: 'user',
        component: () => import('@/components/user/Personal.vue'),
        children: [
          {
            path: '/personal',
            name: 'user',
            component: () => import('@/components/user/info/Tbody.vue')
          },
          {
            path: '/head',
            name: 'user',
            component: () => import('@/components/user/info/Head.vue')
          },
          {
            path: '/modify',
            name: 'user',
            component: () => import('@/components/user/info/Modify.vue')
          }
        ],
        props: true
      }
    ]
  },
  {
    path: '/catalogue/:id',
    name: 'catalogue',
    component: () => import('@/views/index/Catalogue.vue')
  },
  {
    path: '/book/:id/:chapid',
    name: 'book',
    component: () => import('@/views/index/Book.vue')
  }
]
