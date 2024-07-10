import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-img.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-5 text-white">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 mr-3" />
          <span className="text-xl font-bold">Minimum Living Cost</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Our Mission</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Landlord</a>
          <a href="#" className="hover:text-gray-300">Tenants</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
          <button className="bg-white text-black px-4 py-2 rounded-md">Log In</button>
          <button className="bg-orange-600 px-4 py-2 rounded-md">Sign Up</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bg-black text-white flex flex-col items-center space-y-6 py-6 md:hidden">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Our Mission</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Landlord</a>
          <a href="#" className="hover:text-gray-300">Tenants</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
          <button className="bg-white text-black px-4 py-2 rounded-md">Log In</button>
          <button className="bg-orange-600 px-4 py-2 rounded-md">Sign Up</button>
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">The Most Affordable Place To Stay</h1>
        <div className="flex items-center justify-center w-full max-w-2xl space-x-4">
          <select className="p-3 bg-white text-black rounded-md">
            <option>Lease</option>
            <option>Rent</option>
            <option>Buy</option>
          </select>
          <input type="text" placeholder="Search Locality" className="p-3 flex-1 rounded-md" />
          <button className="p-3 bg-orange-600 rounded-md">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h6m-3 0v12m0 0l-3-3m3 3l3-3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
