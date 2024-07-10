const features = [
  {
    image: '/images/Feature1.png', 
    title: 'Flexible Leases',
  },
  {
    image: '/images/Feature2.png', 
    title: '7-Day Happiness Guaranteed',
  },
  {
    image: '/images/Feature3.png', 
    title: 'Monthly House Cleaning',
  },
  {
    image: '/images/Feature4.png', 
    title: 'Choose Your Own Roommate',
  },
];

const FeatureCard = ({ feature }) => (
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
    <img className="w-full h-48 object-cover" src={feature.image} alt={feature.title} />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h3 className="text-white text-lg font-semibold">{feature.title}</h3>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="p-10 flex items-center justify-center">
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
      <div className="lg:ml-10 mt-10 lg:mt-0 lg:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Flexibility and options to suit your lifestyle.</h2>
        <p className="text-lg mb-6">
          You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
        </p>
        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">Search Rooms</button>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
