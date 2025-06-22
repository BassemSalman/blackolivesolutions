import {
  Briefcase as BriefcaseBusiness,
  Building2,
  GraduationCap,
  Trophy,
  UserCheck,
  UsersRound,
} from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import ClientCarousel from "../components/ClientCarousel";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import StorySection from "../components/StorySection";

const HomePage: React.FC = () => {
  const Solutions = [
    {
      icon: <UsersRound size={24} />,
      title: "Executive Recruitment",
      description:
        "Specialized recruitment for senior management positions in the hospitality industry, from Hotel Managers to Executive Chefs.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Open Day Organization",
      description:
        "Organizing and managing open day events for walk-in interviews to attract and evaluate potential candidates efficiently.",
    },
    {
      icon: <Trophy size={24} />,
      title: "Reference Checks",
      description:
        'To ensure having "The Right Person in the Right Place" we carefully study the application of candidates individually with a propper reference check to increase realiability.',
    },
    {
      icon: <BriefcaseBusiness size={24} />,
      title: "Temporary Staffing",
      description:
        "Flexible staffing Solutions for seasonal demands, special events, and temporary replacements in the hospitality sector.",
    },
    {
      icon: <UserCheck size={24} />,
      title: "CV Coaching",
      description:
        "We support candidates that are interested in improving their acceptance probability by making a professional and presentable CV ",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Staff Training",
      description:
        "Professional development programs designed to enhance the skills and knowledge of your team members in Food Safety and ettiquette service.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Black Olive Solutions - Premium Recruitment Agency</title>
        <meta
          name="description"
          content="Black Olive Solutions is a premier recruitment agency specializing in connecting exceptional hospitality professionals with luxury establishments in the Middle East, Europe, and beyond."
        />
        <meta
          name="keywords"
          content="hospitality recruitment, luxury hotels, fine dining, restaurant staffing, hotel jobs, hospitality careers, Dubai, UAE, Lebanon, Germany"
        />
      </Helmet>

      <HeroSection backgroundImage="https://www.merian.de/uploads/media/jalag-content-image/06/11106-restaurants-berlin-lovis.webp?v=1-0" />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2 mb-6">
            Premium Hospitality Recruitment
          </h2>
          <p className="max-w-3xl mx-auto font-raleway text-gray-600 text-lg">
            Black Olive Solutions connects exceptional professionals with
            premier hospitality establishments. With our deep industry knowledge
            and extensive network, we find the perfect match for both employers
            and candidates in the luxury hospitality sector.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Our Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Solutions.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <StorySection
        title="Our Partners in Qatar"
        content="We proudly support our partners in Doha by providing tailored recruitment Solutions for the hospitality industry, including luxury hotels and exclusive members clubs, establishments that embody the highest standards of service excellence."
        image="https://images.pexels.com/photos/2628289/pexels-photo-2628289.jpeg"
        location="Doha, Qatar"
      />

      <StorySection
        title="Our Network in Saudi Arabia"
        content="As the Kingdom of Saudi Arabia is booming with the 2030 Vision, massive Hotels and world class restaurant chains are expanding through the country. Our agency has successfully recruited seasonal professionals to the Riyadh Season and permanent employees for long term contracts."
        image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-riyadh-skyline-at-night-hany-musallam.jpg"
        reverse={true}
        location="Riyadh, KSA"
      />

      <StorySection
        title="Our Presence in Lebanon"
        content="It all began in our beloved Lebanon, the Switzerland of the Middle East, where our expertise was shaped through collaborations with the country's top-ranked hotels and hospitality group. Our recruitment team includes former F&B departmental trainers from the Intercontinental Hotels Group (IHG) who have successfully integrated staff members into brand-standard operations."
        image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/95/af/c4/beirut-marina-at-night.jpg?w=1200&h=-1&s=1"
        location="Beirut, Lebanon"
      />

      <StorySection
        title="Our Partners in Kuwait"
        content="With Kuwait's expanding investment in hospitality and lifestyle projects, demand for qualified talent has never been higher. Our recruitment agency supports this development by connecting local and international professionals with premium hotels, cafes, and entertainment venues—ensuring high standards and long-term staffing Solutions."
        image="https://mediaim.expedia.com/destination/1/b9d212f92b2d308b19b9c6b8af5047ad.jpg"
        reverse={true}
        location="Kuwait, Kuwait"
      />

      <StorySection
        title="Our Clients in Oman"
        content="Oman's tourism and hospitality sector is gaining momentum with its emphasis on cultural experiences and sustainable luxury. Our agency has played a key role in supplying skilled personnel to boutique resorts and high-standard restaurants, helping our clients maintain exceptional service and operational efficiency."
        image="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/59000/59871-Muscat.jpg"
        location="Muscat, Oman"
      />

      <StorySection
        title="Our Partners in the UAE"
        content="As the UAE continues to evolve as a global hospitality and business hub, iconic hotels and high-end dining experiences are flourishing across cities like Dubai and Abu Dhabi. Our agency has proudly contributed to this growth by providing experienced hospitality professionals for seasonal events such as Expo and long-term placements in luxury establishments."
        image="https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Dubai-UAE.jpg"
        reverse={true}
        location="Dubai, UAE"
      />

      {/* Partners & Clients */}
      <ClientCarousel />

      {/* Contact Forms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Let's Work Together
            </h2>
          </div>

          <div className="flex justify-center items-center min-h-screen">
            <ContactForm
              type="talent"
              title="Join Our Talent Pool"
              description="Are you a hospitality professional looking for new opportunities? Submit your details, and we'll be in touch with relevant positions."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
