import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);

    return(
        <div>
            <div className=" w-80 h-full"></div>
            <div>hw</div>
        </div>
    );
};
export default Dashboard;