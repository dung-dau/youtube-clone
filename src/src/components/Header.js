import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from '../logo.png';

function Header() {
  return (
    <div className='flex justify-between'>
      <div className='flex grow-0'>
        <MenuIcon className='navBtn mx-6 my-4'/>
        <img src={logo} 
             className='h-5 mx-0.25 my-5 cursor-pointer'
             alt=''
        />
        <div className='relative'>
          <div className='absolute top-2 left-1 text-gray-500 text-xs font-medium'>CA</div>
        </div>
      </div>
      <div className='flex grow justify-center'>
        <input type="text" className=' focus:border-blue-600 ml-11' placeholder='Search' size='75'/>
        <div>
          <SearchIcon className='navBtn'/>
        </div>
        <div className='flex h-10 w-10 mt-2 bg-gray-50 rounded-full'>
        </div>
        <MicIcon className='navBtn relative right-11'/>
      </div>
      <div className='flex grow-0'>
        <div>
          <VideoCallOutlinedIcon className='navBtn'/>
          <AppsIcon className='navBtn'/>
          <NotificationsNoneIcon className='navBtn'/>
        </div>
        <div>
          <img src='https://i.stack.imgur.com/34AD2.jpg' 
               className='h-8 w-8 rounded-full mr-11 mt-3 ml-5 cursor-pointer'
               alt=""
          />
        </div>

      </div>
    </div>
    

  )
}

export default Header