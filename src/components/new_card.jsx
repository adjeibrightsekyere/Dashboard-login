function Card(props) {
    return (
        <div className="border border-[#CBCBCB] w-72 h-48  flex rounded-lg mt-4">
            <div className="flex flex-col justify-between mx-8 mt-4 mb-4">
                <h1 className="font-poppins font-normal text-base text-black">{props.title}</h1>
                <div>
                    <div className="flex">
                        <h1 className="font-poppins font-semibold text-2xl text-black">{props.number}</h1>
                        <img src={props.img} alt="" />
                    </div>
                    <h1 className="font-poppins font-normal text-sm text-black">{props.week}</h1>
                </div>
            </div>

        </div>
    );
};
export default Card;