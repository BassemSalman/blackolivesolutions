import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

const ContactPage: React.FC = () => {
  const officeLocations = [
    {
      city: "Beirut",
      country: "Lebanon",
      address: "Hamra, Assafir Newspaper, 2nd Floor",
      phone: "+961 3 529 271",
      email: "TODO",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5769107793336!2d35.50283691519919!3d33.89751983398133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99b7461!2sBeirut%20Souks!5e0!3m2!1sen!2sus!4v1651230175703!5m2!1sen!2sus",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Black Olive Solutions</title>
        <meta
          name="description"
          content="Contact Black Olive Solutions for all your hospitality recruitment needs. Reach our office in Beirut"
        />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative pt-40 pb-20 bg-blue-900"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gold-400 max-w-3xl mx-auto font-raleway">
            We'd love to hear from you. Reach out to any of our global offices.
          </p>
        </div>
      </div>

      {/* Contact Forms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm
              type="company"
              title="Looking to Hire?"
              description="Tell us about your staffing needs, and we'll connect you with the perfect hospitality professionals for your establishment."
            />

            <ContactForm
              type="talent"
              title="Join Our Talent Pool"
              description="Are you a hospitality professional looking for new opportunities? Submit your details, and we'll be in touch with relevant positions."
            />
          </div>
        </div>
      </section>

      {/* Office Locations */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Where To Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Our Offices
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>

            {officeLocations.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-56">
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.city} Office Location`}
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-blue-900 mb-1">
                    {office.city}, {office.country}
                  </h3>
                  <ul className="mt-4 space-y-3 font-raleway text-gray-600">
                    <li className="flex items-start">
                      <MapPin
                        size={18}
                        className="mr-2 text-gold-500 flex-shrink-0 mt-1"
                      />
                      <span>{office.address}</span>
                    </li>
                    <li className="flex items-center">
                      <Phone
                        size={18}
                        className="mr-2 text-gold-500 flex-shrink-0"
                      />
                      <a
                        href={`tel:${office.phone}`}
                        className="hover:text-gold-500 transition-colors duration-200"
                      >
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Mail
                        size={18}
                        className="mr-2 text-gold-500 flex-shrink-0"
                      />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-gold-500 transition-colors duration-200"
                      >
                        {office.email}
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Clock
                        size={18}
                        className="mr-2 text-gold-500 flex-shrink-0"
                      />
                      <span>{office.hours}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold-500 font-raleway uppercase tracking-wider font-medium">
              Have Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-playfair font-bold text-blue-900 mb-2">
                  What areas of hospitality do you specialize in?
                </h3>
                <p className="font-raleway text-gray-600">
                  We specialize in recruitment for luxury hotels, fine dining
                  restaurants, resorts, and cruise lines. Our expertise covers
                  all departments including management, culinary, food &
                  beverage service, front office, housekeeping, and more.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-playfair font-bold text-blue-900 mb-2">
                  How long does the recruitment process typically take?
                </h3>
                <p className="font-raleway text-gray-600">
                  The timeline varies depending on the position and specific
                  requirements. For standard roles, we can usually present a
                  shortlist of qualified candidates within 2-3 weeks. Executive
                  searches may take 4-6 weeks to ensure we find the perfect
                  match.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-playfair font-bold text-blue-900 mb-2">
                  Do you offer temporary staffing Solutions?
                </h3>
                <p className="font-raleway text-gray-600">
                  Yes, we provide temporary staffing Solutions for seasonal
                  demands, special events, and interim positions. Our flexible
                  staffing options help you maintain service excellence even
                  during transitional periods or peak seasons.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-playfair font-bold text-blue-900 mb-2">
                  What makes your recruitment approach different?
                </h3>
                <p className="font-raleway text-gray-600">
                  Our approach is distinguished by our deep industry knowledge,
                  our focus on cultural fit, and our meticulous vetting process.
                  We don't just match skills—we ensure candidates align with
                  your establishment's values, culture, and service philosophy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
