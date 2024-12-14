import {notifText} from './notification.module.css'

const Notification = ({ message }) => <p className={notifText}>{message}</p>;

export default Notification