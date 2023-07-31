import Router from './services/configuration/router'
import GlobalStyles from '@/assets/styles/global-styles'
import Dashboard from './pages/dashboard'
import Login from './pages/login/login'
import CardNeedHelp from './components/ui/cardNeedHelp'

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  )
}

export default App
