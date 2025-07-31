import React from "react";
import { User } from "lucide-react";

const UserInfoCard = ({ UserData = {} }) => {
    return (
        <>
            <div className="p-3 bg-light border-bottom">
                <div className="d-flex align-items-center">
                    <div className="rounded-circle main-bg-color mx-2 d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                        <User className="text-white" size={20} />
                    </div>
                    <div>
                        <h6 className="mb-0">{UserData.name}</h6>
                        <small className="text-muted">{UserData.role}</small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfoCard;