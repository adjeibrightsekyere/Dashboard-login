function Edit(props) {
    return (
        <div className="mb-4">
            <h1>{props.draft}</h1>
            <div className="border border-[#CBCBCB] w-72 h-60  flex rounded-lg mt-4 ">
            <div className="flex flex-col justify-between mx-8 mt-4 mb-4 ">
                <div className="flex justify-between">
                    <img src={props.img1} alt="" />
                    <span className="flex">
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
        </div>
        
    );
};
export default Edit;