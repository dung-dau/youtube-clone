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
      <div className='flex'>
        <MenuIcon className='navBtn mx-6 my-4'/>
        <img src={logo} 
             className='h-5 mx-0.25 my-5'
             alt=''/>
      </div>
      <div className='flex'>
        <input type="text" />
        <SearchIcon className='navBtn'/>
        <MicIcon className='navBtn'/>
      </div>
      <div className='flex'>
        <div>
          <VideoCallOutlinedIcon className='navBtn'/>
          <AppsIcon className='navBtn'/>
          <NotificationsNoneIcon className='navBtn'/>
        </div>
        <div>
          <img src='https://i.stack.imgur.com/34AD2.jpg' 
               className='h-8 w-8 rounded-full mr-11 mt-3 ml-5'
               alt=""
          />
        </div>

      </div>
    </div>
    

  )
}

export default Header