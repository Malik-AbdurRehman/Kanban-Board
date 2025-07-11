const Card=({items})=>{
    const handleDragStart=(e,item)=>{
        e.dataTransfer.setData("taskid",item.id);
        e.dataTransfer.setData("sourceColumn",item.class);
    }
    return(
        <>
        <div>
            {items.map((item)=>(
                <div id="cd" draggable="true" onDragStart={(e)=>handleDragStart(e,item)} className="p-3 m-3 bg-white rounded-md cursor-pointer hover:shadow-xl duration-300" key={item.id}>
                    <p className="font-medium">Title : {item.title}</p>
                    <p>Text : {item.text}</p>
                </div>
            ))}
        </div>
        </>
    )
}
export default Card;