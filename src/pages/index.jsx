import Header from '~/components/Header'
import Profile from '~/components/Profile'
import SideBar from '~/components/SideBar'

function Home() {
  return (
    <div className='container h-[90%] flex flex-col bg-white rounded-xl'>
      {/* Header */}
      <Header/>
      <div className="main-content flex h-full">
        {/* SideBar */}
        <SideBar/>
        {/* MainContent */}
        <Profile/>
      </div>
    </div>
  )
}

export default Home
