import { AcademicCapIcon, FlagIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureItem) => (

  <div className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex  mb-6">
      <Icon className="h-14 w-14 text-[#1c1162] p-3 bg-blue-50 rounded-2xl" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-left">{title}</h3>
    <p className="text-gray-600 text-left leading-relaxed">{description}</p>
  </div>
);

export default function FeatureSection() {
  const features: FeatureItem[] = [
    {
      icon: AcademicCapIcon,
      title: "Accident Data",
      description: "Clear overview of reported accidents and their severity.",
    },
    {
      icon: FlagIcon,
      title: "Title Issues",
      description: "Flags any salvage rebuilt  or branded titles.",
    },
    {
      icon: PresentationChartLineIcon,
      title: "Odometer Readings",
      description: "Track mileage history for potential fraud detection.",
    },
  ];

  return (
    <section className="py-20 bg-[#2d1c59] px-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#c8c1da] rounded-xl py-10 md:px-12 md:py-14 cursor-pointer">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#1c1162]">
          Sample Vehicle History Report Preview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="text-left mt-16">
          <button className="bg-blue-900 text-white px-10 py-4 rounded-xl text-lg font-medium transition-colors shadow-md hover:shadow-lg md:text-center hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            View a Sample Report
          </button>
        </div>
      </div>
    </section>  
  );
}