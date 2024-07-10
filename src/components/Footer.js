const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold text-lg">MINIMUM LIVING COST</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl tellus rhoncus, imperdiet.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-white">
              <i className="fas fa-globe"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
       
        <div>
          <h3 className="font-bold mb-4">Pages</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home V1</a></li>
            <li><a href="#" className="hover:underline">Home V2</a></li>
            <li><a href="#" className="hover:underline">Home V3</a></li>
            <li><a href="#" className="hover:underline">About 1</a></li>
            <li><a href="#" className="hover:underline">About 2</a></li>
            <li><a href="#" className="hover:underline">Blog 1</a></li>
            <li><a href="#" className="hover:underline">Blog 2</a></li>
            <li><a href="#" className="hover:underline">Help Center 1</a></li>
          </ul>
        </div>
       
        <div>
          <h3 className="font-bold mb-4">Help Center</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Help Center V2</a></li>
            <li><a href="#" className="hover:underline">FAQ V1</a></li>
            <li><a href="#" className="hover:underline">FAQ V2</a></li>
            <li><a href="#" className="hover:underline">FAQ Detail</a></li>
            <li><a href="#" className="hover:underline">Contact V1</a></li>
            <li><a href="#" className="hover:underline">Contact V2</a></li>
            <li><a href="#" className="hover:underline">Checkout</a></li>
          </ul>
        </div>
       
        <div>
          <h3 className="font-bold mb-4">Utility Pages</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Sign In</a></li>
            <li><a href="#" className="hover:underline">Sign Up</a></li>
            <li><a href="#" className="hover:underline">Forgot Password</a></li>
            <li><a href="#" className="hover:underline">Reset Password</a></li>
            <li><a href="#" className="hover:underline">Email Confirmation</a></li>
            <li><a href="#" className="hover:underline">404 Page</a></li>
            <li><a href="#" className="hover:underline">Coming Soon</a></li>
            <li><a href="#" className="hover:underline">Style Guide</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
