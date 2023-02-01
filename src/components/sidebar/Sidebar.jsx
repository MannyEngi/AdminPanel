import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo"> WEP Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard </span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <PersonOutlineIcon className="icon"/>
                    <span>Users </span>
                </li>
                <li>
                    <StoreIcon className="icon"/>
                    <span>Products </span>
                </li>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Estimates </span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartIcon className="icon"/>
                    <span>Status </span>
                </li>
                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Notifications </span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className="icon"/>
                    <span>System Health </span>
                </li>
                <li>
                    <PsychologyIcon className="icon"/>
                    <span>Logs </span>
                </li>
                <li>
                    <SettingsIcon className="icon"/>
                    <span>Settings </span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="icon"/>
                    <span>Profile </span>
                </li>
                <li>
                    <ExitToAppIcon className="icon"/>
                    <span>Logout </span>
                </li>
            </ul>
        </div>
            
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar