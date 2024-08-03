import React from "react";
import { useSelector } from "react-redux";
import SideItems from "../components/sidebarItems";
import Card from "../components/new_card";
import Edit from "../components/edit_card";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="flex ">
            <div className="flex w-full ">
                <div className="sidebar flex border-r-2 border-[#909090] w-80">
                    <div className="mt-7 mx-10">
                        <div className="flex">
                            <h1 className="font-krona font-normal text-3xl text-[#02208D]">Orbut</h1>
                            <img src="" alt="" />
                        </div>
                        <div className="flex flex-col mt-8 gap-y-4">
                            <SideItems
                                img=''
                                name='Dashboard'
                            />
                            <SideItems
                                img=''
                                name='Campaigns'
                            />
                            <SideItems
                                img=''
                                name='Chat'
                            />
                            <SideItems
                                img=''
                                name='Support center'
                            />
                            <SideItems
                                img=''
                                name='Leads'
                            />
                            <SideItems
                                img=''
                                name='Archive'
                            />
                        </div>
                    </div>
                </div>
                <div className="header flex-grow flex ">
                    <div className=" mt-7 mx-10 w-full">
                        <div className="flex justify-between">
                            <h1 className="font-poppins font-normal text-2xl">Campaigns</h1>
                            <div className="flex justify-end">
                                <img src="" alt="" />
                                <span className="flex">
                                    <img src="" alt="" />
                                    <h1 className="font-poppins font-medium text-base">Ebenezer Frimpong</h1>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col mt-10">
                            <h1 className="font-poppins font-semibold text-4xl text-[#2D2D2D]">Your total revenue</h1>
                            <span className="flex justify-between">
                                <h1 className="font-poppins font-semibold text-4xl text-[#FFC93E]">GHC6,609,234.00</h1>
                                <div className="flex font-poppins font-semibold text-base text-black gap-4">
                                    <div className="flex">
                                        <img src="" alt="" />
                                        Select dates
                                    </div>
                                    <div className="flex">
                                        <img src="" alt="" />
                                        Filter
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="third flex gap-5">
                            <Card title="New Subscription" number="875" week="Compared to last week" />
                            <Card title="New Orders" number="500" week="Compared to last week" />
                            <Card title="Average Revenue" number="GHC8,673" week="Compared to last week" />
                        </div>
                        <div className="flex justify-between mt-2">
                            <h1 className="font-poppins font-semibold text-2xl">Recent Campaigns</h1>
                            <div className="flex font-poppins font-normal text-xl">
                                <h1>View all</h1>
                                <img src="" alt="" />
                            </div>

                        </div>
                        <div className="flex gap-5">
                            <Edit draft='Draft' img1='' para='15 steps to automate your campaigns with Rancard' status='Not Started'/>
                            <Edit draft='In Progress' img1='' para='Engage Procurers and Retailers using Agile ' status='In Progress'/>
                            <Edit draft='Complete' img1='' para='Introduce Anagro to hospitals in Tamale' status='Completed'/>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex gap-2 border border-[#9F53FFA1] rounded-lg w-72 h-16 items-center justify-center">
                                <img src="" alt="" />
                                <h1 className="flex font-poppins font-normal text-base">Add Campaign</h1>
                            </div>
                            <div className="">
                            <Edit  img1='' para='15 steps to automate your campaigns with Rancard' status='Not Started'/>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default Dashboard;