import React, {useState} from "react";

function Edit(props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);



    return (
        <div className="mb-4">
            <h1>{props.draft}</h1>
            <div className="border border-[#CBCBCB] w-72 h-60  flex rounded-lg mt-4 ">
            <div className="flex flex-col justify-between mx-8 mt-4 mb-4 ">
                <div className="flex justify-between">
                    <img src={props.img1} alt="" />
                    <span onClick={openEditModal} className="flex">
                        <img src="" alt="" />
                        <h1>Edit</h1>
                    </span>
                </div>
                <h1 className="font-poppins font-normal text-base text-black mb-4 mt-5">
                    {props.para}
                </h1>
                <div>
                    <div className="flex mb-8">
                        <div className="flex border-b-8 rounded-sm w-60 gap-2">
                        <h1 className="font-poppins font-normal text-sm text-[#666666]">Status:</h1>
                        <h1 className="font-poppins font-normal text-sm text-[#979797]">{props.status}</h1>
                        </div>
                    </div>
                    <div className="flex gap-2 mb-20">
                    <h1 className="font-poppins font-normal text-sm text-black">Last Updated:</h1>
                    <h1 className="font-poppins font-normal text-sm text-black">April 10,2024</h1>
                    </div>
                    
                </div>
            </div>

        </div>
        {isEditModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="font-poppins font-semibold text-2xl mb-4">Update Campaign</h2>
                        <h2 className="font-poppins font-normal text-[#4E4E4E] text-base mb-4">Edit Campaign details by filling in the necessary details</h2>
                        <input type="text" placeholder="Lucky Kiosk" className="mb-4 p-2 border rounded-lg w-full font-poppins font-normal text-base text-[#707070]" />
                        <textarea placeholder="Description" className="mb-4 p-2 border rounded-lg w-full font-poppins font-normal text-base text-[#707070]" />
                        <div className="flex justify-between mb-4">
                            <input type="date" placeholder="Enter start date" className="p-2 border rounded-lg w-[48%] font-poppins font-normal text-base text-[#707070]" />
                            <input type="date" placeholder="Enter end date" className="p-2 border rounded-lg w-[48%] font-poppins font-normal text-base text-[#707070]" />
                        </div>
                        <input type="text" placeholder="www.wetriedandiamoutofideas.com" className="mb-4 p-2 border rounded w-full" />
                        <div className="relative">
                            <div className="flex items-center">
                                <select className="p-2 border rounded w-full">
                                    <option>In Progress</option>
                                </select>
                                <button type="button" onClick={() => {}} className="p-2">
                                    &#9662;
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-start mt-4">
                            <button onClick={closeEditModal} className="text-[#666666] w-36 text-lg font-poppins font-medium p-2 border border-black rounded-full mr-2">Cancel</button>
                            <button onClick={closeEditModal} className="bg-[#3F20FF] w-56 text-white text-lg font-poppins font-medium p-2 rounded-full">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    );
};
export default Edit;