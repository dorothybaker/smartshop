import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="mx-auto max-w-7xl py-4">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 overflow-hidden lg:h-[500px] sm:h-[370px] h-[290px]">
          <div className="flex-1 overflow-hidden relative">
            <img
              src="https://images.pexels.com/photos/1620758/pexels-photo-1620758.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="kids"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
              <button className="btn text-white bg-primary hover:text-black uppercase border-none">
                <Link to={`/category/Kids`}>Kids</Link>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <img
              src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="women"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
              <button className="btn text-white bg-primary hover:text-black uppercase border-none">
                <Link to={`/category/Women`}>women</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden lg:h-[500px] sm:h-[370px] h-[290px] relative">
          <img
            src="https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="new season"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
            <button className="btn text-white bg-primary hover:text-black uppercase border-none">
              <Link to={`/category/Men`}>Men</Link>
            </button>
          </div>
        </div>
        <div className="col-span-2 lg:h-[500px] sm:h-[370px] h-[290px] gap-2 overflow-hidden relative">
          <img
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600"
            alt="latest"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
            <button className="btn text-white bg-primary hover:text-black uppercase border-none">
              <Link to={`/category/Latest`}>latest & new</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
