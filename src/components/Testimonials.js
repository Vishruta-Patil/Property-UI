const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center text-orange-500 h-full p-8 bg-red-50">
      <div className="text-6xl mb-4">“</div>
      <p className="text-xl mb-6 text-center md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
      </p>
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="/images/user.png"
          alt="Property Owner"
        />
        <div>
          <div className="font-bold">Property Owner</div>
        </div>
      </div>
      <div className="mt-4 flex">
        <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
        <span className="h-2 w-2 bg-gray-500 rounded-full mr-2"></span>
        <span className="h-2 w-2 bg-gray-500 rounded-full mr-2"></span>
      </div>
    </div>
  );
};

export default Testimonial;
