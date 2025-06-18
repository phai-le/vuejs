import type { RouteRecordRaw } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Tables from './views/Tables.vue'
import Properties from './views/Properties.vue'
import AdminLayout from './components/layouts/AdminLayout.vue'
import Bookings from './views/Bookings.vue'
import RoomType from './views/RoomType.vue'
import Rooms from './views/Room.vue'
import Profile from './views/Profile.vue'
import BookingList from './views/BookingList.vue'

const adminRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admins',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: Dashboard,
      },
      {
        path: 'tables',
        name: 'AdminTables',
        component: Tables,
      },
      {
        path: 'properties',
        name: 'AdminProperties',
        component: Properties,
      },
      {
        path: 'bookings',
        name: 'AdminBookings',
        component: Bookings,
      },
      {
        path: 'bookings-list',
        name: 'BookingList',
        component: BookingList,
      },
      {
        path: 'room-types',
        name: 'AdminRoomTypes',
        component: RoomType,
      },
      {
        path: '/',
        redirect: '/admins/login'
      },
      {
        path: 'rooms',
        name: 'Rooms',
        component: Rooms,
      },
      {
        path: 'profile',
        name: 'AdminProfile',
        component: Profile,
      },
    ],
  },
  {
    path: '/admins/login',
    name: 'AdminLogin',
    component: () => import('@/modules/admin/views/Auth/Login.vue'),
  },
]

export default adminRoutes
