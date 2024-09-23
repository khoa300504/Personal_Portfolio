import Header from '~/components/Header'
import Profile from '~/components/Profile'
import SideBar from '~/components/SideBar'

function Home() {
  return (
    <div className='container h-5/6 bg-white rounded-xl'>
      {/* Header */}
      <Header/>
      {/* SideBar */}
      <SideBar/>
      {/* MainContent */}
      <Profile/>
    </div>
  )
}

export default Home
