import { Landmark, Utensils, Camera, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-red-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Discover China</h1>
          <p className="text-xl mb-8">Experience the wonders of an ancient civilization</p>
          <button className="bg-yellow-500 text-red-600 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300">
            Plan Your Trip
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Landmark className="h-12 w-12 text-red-600" />}
              title="Rich History"
              description="Explore ancient wonders and imperial palaces"
            />
            <FeatureCard
              icon={<Utensils className="h-12 w-12 text-red-600" />}
              title="Culinary Delights"
              description="Savor diverse and delicious Chinese cuisine"
            />
            <FeatureCard
              icon={<Camera className="h-12 w-12 text-red-600" />}
              title="Scenic Beauty"
              description="Witness breathtaking landscapes and natural wonders"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-red-600" />}
              title="Cultural Immersion"
              description="Experience the warmth of Chinese hospitality"
            />
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AttractionCard
              image="/placeholder.svg"
              title="Great Wall of China"
              description="Walk along this ancient wonder stretching over 13,000 miles"
            />
            <AttractionCard
              image="/placeholder.svg"
              title="Forbidden City"
              description="Explore the imperial palace complex in the heart of Beijing"
            />
            <AttractionCard
              image="/placeholder.svg"
              title="Terracotta Army"
              description="Witness the famous terracotta warriors in Xi'an"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience China?</h2>
          <p className="text-xl mb-8">Book your journey today and create unforgettable memories</p>
          <button className="bg-yellow-500 text-red-600 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300">
            Start Planning
          </button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AttractionCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Index;
