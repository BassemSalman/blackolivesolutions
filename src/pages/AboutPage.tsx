import { motion } from "framer-motion";
import { Award, Clock, Globe, PieChart, Users } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";

const AboutPage: React.FC = () => {
  const stats = [
    {
      icon: <Globe className="h-6 w-6 text-gold-500" />,
      value: "4+",
      label: "Countries",
    },
    {
      icon: <Users className="h-6 w-6 text-gold-500" />,
      value: "50+",
      label: "Placements",
    },
    {
      icon: <Award className="h-6 w-6 text-gold-500" />,
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      icon: <Clock className="h-6 w-6 text-gold-500" />,
      value: "5+",
      label: "Years Experience",
    },
  ];

  const team = [
    {
      name: "Mohamad Riad Salman",
      position: "Founder & Manager",
      bio: "With over 10 years of experience in high-end restaurants and luxury hotels across the Middle East, Salman has built a strong reputation in the hospitality industry as an F&B Trainer, thanks to his deep expertise in diverse cuisines and service concepts. He founded Black Olive Solutions to open doors for exceptional professionals, connecting them with elite hospitality groups across the region — all with the goal of elevating industry standards and redefining excellence.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGiE1d4u5x0GA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695131890065?e=1753920000&v=beta&t=qw_14sJoDTHd-Eotlb3-KOw9pg8fiRbaBMGvYKu-7Nk",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Black Olive Solutions</title>
        <meta
          name="description"
          content="Learn about Black Olive Solutions's mission, values, and team of recruitment experts specializing in the luxury hospitality industry."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative pt-40 pb-20 bg-blue-900"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-gold-400 max-w-3xl mx-auto font-raleway">
            Connecting exceptional talent with luxury hospitality establishments
            worldwide
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:col-span-2">
              <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2 mb-6">
                The Black Olive Solutions Story
              </h2>

              <div className="prose prose-lg max-w-none font-raleway text-gray-600">
                <p>
                  Founded in 2020, Black Olive Solutions was born from a vision
                  to transform how talent and employers connect in the
                  hospitality sector.
                </p>

                <p>
                  We've recognized a gap in the market for a recruitment agency
                  that truly understand the standards of high-end service and
                  the authentic meaning of a "Guest's Experience" . Having
                  worked in senior operational roles at prestigious hotels, we
                  experienced the challenges of finding staff who possessed both
                  technical skills and the right profile for luxury service.
                </p>

                <p>
                  Today, we're proud to have placed professionals in some of the
                  world's most prestigious hotels, resorts, and restaurants. Our
                  success stems from our deep industry knowledge, our
                  personalized approach, and our commitment to understanding the
                  unique culture of each establishment we work with.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-full">
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
                  <img
                    src="../../public/logo.jpeg"
                    alt="Team meeting"
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold-500 text-blue-900 py-2 px-4 rounded shadow-md font-raleway font-bold">
                  Est. 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="font-playfair font-bold text-3xl md:text-4xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-raleway text-gold-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2 mb-6">
              Our Mission
            </h2>
            <p className="font-raleway text-gray-600 text-lg">
              At Black Olive Solutions, we believe that hospitality is more than
              service - it's an art. <br /> Inspired by the timeless process of
              crafting pure olive oil, we apply the same concept to our
              recruitment process: only the best olives produce the finest oil,
              we believe only the most passionate individuals can deliver truly
              exceptional guest experiences. <br /> That's why we don't just
              recruit - we harvest, filter, and refine talent until it's the
              perfect fit.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={24} />
              </div>
              <h3 className="font-playfair font-bold text-xl text-blue-900 mb-2">
                Global Reach
              </h3>
              <p className="font-raleway text-gray-600">
                With partners across multiple countries, we connect you to
                talents form different nationalities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 text-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart size={24} />
              </div>
              <h3 className="font-playfair font-bold text-xl text-blue-900 mb-2">
                Industry Expertise
              </h3>
              <p className="font-raleway text-gray-600">
                Our team comes from hospitality backgrounds, giving us unique
                insight into the specific needs of luxury establishments.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-900 text-gold-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-playfair font-bold text-xl text-blue-900 mb-2">
                Personalized Approach
              </h3>
              <p className="font-raleway text-gray-600">
                We take the time to understand your unique culture, values, and
                requirements to ensure perfect matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium"></span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Our Leadership
            </h2>
          </div>

          {/* Centered single card container */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/2">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                      <h3 className="font-playfair font-bold text-2xl text-blue-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-gold-500 font-raleway font-medium mb-6 text-lg">
                        {member.position}
                      </p>
                      <p className="font-raleway text-gray-600 text-base leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
