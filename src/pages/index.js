import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import PropertyForm from '../components/PropertyForm';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import AttributeSection from '@/components/AttributeSction';
import { attributesData, properties } from '@/data/properties';
import ImageOverlay from '@/components/ImageOverlay';

export default function Home() {
    return (
        <>
            <Hero />
            <div className="p-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">Minimum Living Cost for everything</h2>
                    <div className="flex flex-wrap">
                        {attributesData.map((card, index) => (
                            <AttributeSection key={index} icon={card.icon} text={card.text} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">List Of Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map((property, index) => (
                            <PropertyCard key={index} property={property} />
                        ))}
                    </div>
                    <div className="mt-6">
                        <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">View All Property</button>
                    </div>
                </div>
            </div>

            <FeaturesSection />

            <section className="py-8">
                <div className="container mx-auto px-4">
                    <PropertyForm />
                </div>
            </section>

            <div className="flex container mx-auto p-4">
                <div className="w-1/2">
                    <Testimonials />
                </div>
                <div className="w-1/2">
                    <ImageOverlay />
                </div>
            </div>

            <Footer />
        </>
    );
}
