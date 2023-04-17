import Main from "./Main";
import Navbar from "./Navbar";




function Home() {

  return (
    <div className="text-gray-600">
      <div className="grid md:grid-cols-3">
      <Navbar />
      <Main />
      </div>
    </div>
  );
}

export default Home;