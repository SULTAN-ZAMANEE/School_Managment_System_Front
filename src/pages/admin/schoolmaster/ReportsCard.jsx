import { Icon, Download } from "lucide-react";
import React from "react";




const ReportsCard = ({
    icon: Icon,
    title,
    descryption,
    className = '',
    varince='outline-primary'
}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card border-primary">
                <div className="card-body text-center">
                <Icon className={`text-primary mb-3 ${className}`} size={48} />
                    <h6>{title}</h6>
                    <p className="text-muted small">{descryption}</p>

                    <button className={`btn btn-${varince} btn-sm`}>
                        <Download className="me-2" size={14} />
                        تحميل التقرير
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReportsCard;