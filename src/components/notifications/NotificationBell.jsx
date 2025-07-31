import React, {useState} from "react";
import { Bell } from "lucide-react";



const NotificationBell = ({unreadCount = 0, notifications}) => {
    const [showNotifications, setShowNotifications] = useState(false);
    return (
        <div className="position-relative mx-2">
            <button
                className="btn btn-outline-light position-relative"
                onClick={() => setShowNotifications(!showNotifications)}
            >
                <Bell size={20} />
                {unreadCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {unreadCount}
                    </span>
                )}
            </button>
            {showNotifications && (
                <div className="position-absolute top-100 end-0 mt-2 bg-white rounded shadow-lg p-3" style={{ minWidth: '300px', zIndex: 1000 }}>
                    <h6 className="text-dark mb-3">الإشعارات</h6>
                    {notifications.slice(0, 3).map(notification => (
                        <div key={notification.id} className={`p-2 mb-2 rounded ${!notification.read ? 'bg-light' : ''}`}>
                            <small className="text-muted">{notification.date}</small>
                            <p className="text-dark mb-1 fw-bold" style={{ fontSize: '0.9rem' }}>{notification.title}</p>
                            <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>{notification.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NotificationBell;