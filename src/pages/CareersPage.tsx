import { motion } from "framer-motion";
import { Building, CheckCircle, Clock, MapPin } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

const CareersPage: React.FC = () => {
  const featuredPositions = [
    {
      title: "Executive Chef",
      location: "Dubai, UAE",
      type: "Full-time",
      company: "Luxury Beach Resort",
      description:
        "Leading 5-star resort seeking an Executive Chef to oversee all culinary operations across multiple dining outlets. Minimum 8 years experience in luxury hospitality required.",
    },
    {
      title: "Hotel Manager",
      location: "Beirut, Lebanon",
      type: "Full-time",
      company: "Boutique Luxury Hotel",
      description:
        "Exclusive boutique hotel seeking an experienced Hotel Manager to oversee all aspects of operations while maintaining the highest standards of guest service.",
    },
    {
      title: "Food & Beverage Director",
      location: "Berlin, Germany",
      type: "Full-time",
      company: "Fine Dining Restaurant Group",
      description:
        "Prestigious restaurant group seeking a strategic F&B Director to oversee multiple venues and drive culinary excellence and business growth.",
    },
    {
      title: "Sommelier",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      company: "Michelin-Star Restaurant",
      description:
        "Award-winning restaurant seeking a certified Sommelier with extensive knowledge of fine wines and exceptional guest service skills.",
    },
    {
      title: "Spa Director",
      location: "Doha, Qatar",
      type: "Full-time",
      company: "Luxury Wellness Resort",
      description:
        "Leading wellness destination seeking an experienced Spa Director to oversee all aspects of spa operations and team management.",
    },
    {
      title: "Guest Relations Manager",
      location: "Munich, Germany",
      type: "Full-time",
      company: "Historic Luxury Hotel",
      description:
        "Iconic hotel seeking a Guest Relations Manager with exceptional interpersonal skills and a passion for delivering memorable guest experiences.",
    },
  ];

  const benefits = [
    {
      title: "Global Opportunities",
      description:
        "Access to positions in prestigious establishments across the Middle East, Europe, and beyond.",
      icon: <MapPin className="h-6 w-6 text-gold-500" />,
    },
    {
      title: "Career Advancement",
      description:
        "We specialize in placing candidates in roles that offer growth potential and career progression.",
      icon: <CheckCircle className="h-6 w-6 text-gold-500" />,
    },
    {
      title: "Personalized Matching",
      description:
        "We take the time to understand your skills, goals, and preferences to find your ideal position.",
      icon: <Building className="h-6 w-6 text-gold-500" />,
    },
    {
      title: "Long-term Support",
      description:
        "Our relationship doesn't end with placement—we stay connected to ensure your continued success.",
      icon: <Clock className="h-6 w-6 text-gold-500" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Black Olive Solutions</title>
        <meta
          name="description"
          content="Explore exciting career opportunities in the hospitality industry with Black Olive Solutions. Submit your profile to join our talent pool."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative pt-40 pb-20 bg-blue-900"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2907192/pexels-photo-2907192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Elevate Your Hospitality Career
          </h1>
          <p className="text-xl text-gold-400 max-w-3xl mx-auto font-raleway">
            Join our talent pool and connect with prestigious hospitality
            establishments worldwide
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Why Join Our Talent Pool
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Benefits of Working With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-playfair font-bold text-blue-900 text-center mb-2">
                  {benefit.title}
                </h3>
                <p className="font-raleway text-gray-600 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Positions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Current Openings
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Featured Positions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPositions.map((position, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-blue-900 mb-2">
                    {position.title}
                  </h3>
                  <p className="font-raleway text-gold-500 font-medium mb-4">
                    {position.company}
                  </p>

                  <div className="flex items-center mb-4">
                    <MapPin size={16} className="text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500 mr-4">
                      {position.location}
                    </span>
                    <Clock size={16} className="text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">
                      {position.type}
                    </span>
                  </div>

                  <p className="font-raleway text-gray-600 mb-4">
                    {position.description}
                  </p>

                  <a
                    href="#apply-now"
                    className="text-blue-900 font-raleway font-medium hover:text-gold-500 inline-flex items-center"
                  >
                    Join Our Talent Pool
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-raleway text-gray-600 mb-4">
              Don't see a position that matches your skills? Submit your profile
              to our talent pool, and we'll contact you when the right
              opportunity arises.
            </p>
            <a
              href="#apply-now"
              className="inline-block px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-raleway font-medium rounded-md transition duration-300"
            >
              Join Our Talent Pool
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              What Our Candidates Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <blockquote className="italic text-gray-600 font-raleway text-center mb-4">
                "Black Olive Solutions helped me secure a position at a
                Michelin-selected restaurant in Doha. Their guidance throughout
                the interview process was invaluable."
              </blockquote>
              <div className="text-center">
                <p className="font-playfair font-bold text-blue-900">
                  Ahmad Salman
                </p>
                <p className="text-gold-500 font-raleway text-sm">
                  Bar Manager, Doha
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <blockquote className="italic text-gray-600 font-raleway text-center mb-4">
                "I've worked with several recruitment agencies, but none
                understand the hospitality industry like Black Olive. They found
                me a role that perfectly matched my career aspirations."
              </blockquote>
              <div className="text-center">
                <p className="font-playfair font-bold text-blue-900">
                  Ali Sharara
                </p>
                <p className="text-gold-500 font-raleway text-sm">
                  Restaurant Manager, Doha
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <blockquote className="italic text-gray-600 font-raleway text-center mb-4">
                "Thanks to Black Olive Solutions, I was able to relocate from
                Lebanon to Saudi Arabia for my job. Their international
                expertise is second to none."
              </blockquote>
              <div className="text-center">
                <p className="font-playfair font-bold text-blue-900">
                  Jennifer Semaan
                </p>
                <p className="text-gold-500 font-raleway text-sm">
                  Headwaitress, Riyadh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-now" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
                Join Our Talent Pool
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
                Submit Your Application
              </h2>
            </div>

            <ContactForm
              type="talent"
              title="Tell Us About Yourself"
              description="Share your experience and career goals, and we'll connect you with matching opportunities in the hospitality industry."
            />

            <div className="bg-blue-900 text-white p-6 rounded-lg mt-8">
              <h3 className="font-playfair font-bold text-xl mb-2">
                What Happens Next?
              </h3>
              <ol className="list-decimal pl-5 font-raleway space-y-2">
                <li>Our recruitment experts will review your application</li>
                <li>We'll contact you for an initial screening interview</li>
                <li>
                  Based on your qualifications, we'll match you with suitable
                  positions
                </li>
                <li>
                  We'll guide you through the interview process with potential
                  employers
                </li>
                <li>
                  Once you receive an offer, we'll support you through the
                  onboarding process
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
