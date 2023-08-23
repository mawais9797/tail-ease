// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'

import HomeOutline from 'mdi-material-ui/HomeOutline'

import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'



const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/sidebar/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/sidebar/account-settings'
    },
   
    {
      title: 'Login',
      icon: Login,
      path: '/sidebar/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/sidebar/register',
      openInNewTab: true
    },
    
   
    {
      title: 'Tables',
      icon: Table,
      path: '/sidebar/tables'
    },
    
   
  ]
}

export default navigation
