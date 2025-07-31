import React from "react";
import ContainerCard from "../../components/common/UI/ContainerCard";
import ChildCard from "./ChildCard";


const ChildNavbar = ({ mockChildren= [], selectedChild, setSelectedChild }) => {

    return (
        <ContainerCard title='اختر الطفل لعرض بياناته'>
            <div className="row d-lg-flex">
            {mockChildren.map(child => (
                <div key={child.id} className="col-md-6 col-lg-3 mb-3">
                    <ChildCard
                        child={child}
                        isSelected={selectedChild?.id === child.id}
                        onSelect={setSelectedChild}
                    />
                </div>
            ))}
            </div>
        </ContainerCard>
    );
}

export default ChildNavbar;

