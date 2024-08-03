import React, { useState } from "react";
import { useSelector } from "react-redux";
import SideItems from "../components/sidebarItems";
import Card from "../components/new_card";
import Edit from "../components/edit_card";
import { getCampaignById } from "../api/api";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [campaignId, setCampaignId] = useState('');
    const [campaignData, setCampaignData] = useState(null);
    const [error, setError] = useState(null);
    const token = useSelector((state) => state.auth.token);
    const toggleStatusDropdown = () => setIsStatusDropdownOpen(!isStatusDropdownOpen);

    const handleFetch = async () => {
        try {
            const data = await getCampaignById(campaignId, token);
            setCampaignData(data);
            setError(null);
            openModal();
        } catch (err) {
            setError(err.message);
            setCampaignData(null);
        }
    };

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
                            <Edit draft='Draft' img1='' para='15 steps to automate your campaigns with Rancard' status='Not Started' />
                            <Edit draft='In Progress' img1='' para='Engage Procurers and Retailers using Agile ' status='In Progress' />
                            <Edit draft='Complete' img1='' para='Introduce Anagro to hospitals in Tamale' status='Completed' />
                        </div>
                        <div className="flex gap-5">
                            <div onClick={openModal} className="flex gap-2 border border-[#9F53FFA1] rounded-lg w-72 h-16 items-center justify-center">
                                <img src="" alt="" />
                                <h1 className="flex font-poppins font-normal text-base">Add Campaign</h1>
                            </div>
                            <div className="">
                                <Edit img1='' para='15 steps to automate your campaigns with Rancard' status='Not Started' />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="font-poppins font-semibold text-2xl mb-4">Create Campaign</h2>
                        <h2 className="font-poppins font-normal text-[#4E4E4E] text-base mb-4">Add a new Campaigns by filling in the necessary details</h2>
                        <input type="text" placeholder="Campaign name" className="mb-4 p-2 border rounded-lg w-full font-poppins font-normal text-base text-[#707070]" />
                        <textarea placeholder="Description" className="mb-4 p-2 border rounded-lg w-full font-poppins font-normal text-base text-[#707070]" />
                        <div className="flex justify-between mb-4">
                            <input type="date" placeholder="Enter start date" className="p-2 border rounded-lg w-[48%] font-poppins font-normal text-base text-[#707070]" />
                            <input type="date" placeholder="Enter end date" className="p-2 border rounded-lg w-[48%] font-poppins font-normal text-base text-[#707070]" />
                        </div>
                        <input type="text" placeholder="Banner URL" className="mb-4 p-2 border rounded-lg w-full font-poppins font-normal text-base text-[#707070]" />
                        <div className="relative">
                            <div className="flex items-center">
                                <select className="p-2 border rounded-lg w-full font-poppins font-normal text-base text-[#707070]">
                                    <option>Select status</option>
                                </select>
                                <button type="button" onClick={toggleStatusDropdown} className="p-2">
                                    &#9662;
                                </button>
                            </div>
                            {isStatusDropdownOpen && (
                                <div className="absolute right-0 bg-white border p-2 mt-2 rounded shadow-lg z-10 font-poppins font-normal text-base text-[#707070]">
                                    <div className="cursor-pointer">Draft</div>
                                    <div className="cursor-pointer">In Progress</div>
                                    <div className="cursor-pointer">Completed</div>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-start mt-4">
                            <button onClick={closeModal} className=" text-[#666666] w-36 text-lg font-poppins font-medium p-2 border border-black rounded-full mr-2">Cancel</button>
                            <button onClick={closeModal} className="bg-[#3F20FF] w-56 text-white text-lg font-poppins font-medium p-2 rounded-full">Create Campaign</button>
                        </div>
                    </div>
                </div>
            )}

           {/* <div className="fixed bottom-10 right-10">
                <input
                    type="text"
                    value={campaignId}
                    onChange={(e) => setCampaignId(e.target.value)}
                    placeholder="Campaign ID"
                    className="p-2 border rounded"
                />
                <button onClick={handleFetch} className="ml-2 bg-blue-500 text-white p-2 rounded">
                    Fetch Campaign
                </button>
                {campaignData && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg">
                            <h2 className="text-2xl mb-4">Campaign Details</h2>
                            <pre>{JSON.stringify(campaignData, null, 2)}</pre>
                            <button onClick={() => setCampaignData(null)} className="mt-4 bg-red-500 text-white p-2 rounded">
                                Close
                            </button>
                        </div>
                    </div>
                )}
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>*/}
        </div>
    );
};
export default Dashboard;