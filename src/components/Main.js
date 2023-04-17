import Cards from "./Cards"
import data from "../data"
function Main(props) {
  const main = data.map( (item) => {
    return (
    <Cards 
        key={item.id}
          item={item}
      />
    )
  })

  return (
    <div className="px-16 py-6 md:col-span-2">
       <div className="flex justify-center md:justify-end">
        <a href="#" className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Login</a>
        <a href="#" className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign Up</a>
      </div>

     <header>
      <h3 className="text-gray-700 text-6xl font-semibold">Recipes</h3>
      <h4 className="text-2xl font-semibold">For Ninja</h4>
     </header>

     <div>       
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        {main}
     </div>
     <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popoular</h4>
     </div>

     <div className="flex justify-center">
      <div className="btn bg-secondary-100 text-secondary-200 shadow-inner transform hover:scale-125
      hover:bg-opacity-50 transition ease-out duration-300">Load more</div>
    </div> 


    </div>


  
  );
}

export default Main;