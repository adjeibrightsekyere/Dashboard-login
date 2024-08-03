function SideItems(props) {
    return(
        <div>
             <img src={props.img} alt=""/>
             <h1 className="font-poppins font-normal text-lg text-[#3A3A3A]">{props.name}</h1>
        </div>
    )
}
export default SideItems;