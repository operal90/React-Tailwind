
function Cards (props){
    return (
        <div className="card hover:shadow-lg">
        <img src={require("/src/assets/img/" + props.item.images)} alt="stew" class="w-full h-32 sm:h-48 object-cover"/>             
       <div className="bg-blend-color">
        <span className="font-bold">{props.item.description}</span>
        <span className="block text-gray-500 text-sm">{props.item.sub_description}</span>
        </div>
        <div className="badge">
              <svg className="w-4 inline-block h6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{props.item.time}</span>
            </div>
        </div>
    )
}
export default Cards