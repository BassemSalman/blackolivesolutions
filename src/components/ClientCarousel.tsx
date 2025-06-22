import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Client {
  id: number;
  name: string;
  logo: string;
  location: string;
  testimonial?: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: 'SAWA by Sanad',
    logo: 'https://www.datocms-assets.com/105528/1705498480-sanad-reception.jpg?auto=format&fit=max&w=1200',
    location: 'Doha, Qatar',
  },
  
  {
    id: 3,
    name: 'Flamingo Room by Tashas',
    logo: 'https://www.dubaireview.ae/wp-content/uploads/listing-uploads/logo/2021/04/70220247_2345929428827107_4640533286530056192_n.jpg',
    location: 'Riyadh, Saudi Arabia',
  },

  {
    id: 1,
    name: 'Hilton Hotels',
    logo: 'https://logowik.com/content/uploads/images/hilton-hotels-resorts4207.jpg',
    location: 'Beirut, Lebanon',
  },

  {
    id: 1,
    name: 'Lancaster Eden Bay',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQGAXHQ2QSfDfw/company-logo_200_200/company-logo_200_200/0/1630622664724/lancasteredenbay_logo?e=2147483647&v=beta&t=pqZUTPWEn9wF5cTbPvK2P1EhshDGaqXLbXdQ2t9trt4',
    location: 'Beirut, Lebanon',
  },

  {
    id: 1,
    name: 'Marriott Hotels & Resorts',
    logo: 'https://photos.prnewswire.com/prnfull/20090217/MARRIOTTINTLLOGO?max=200',
    location: 'Dubai, UAE',
  },
  
];

const ClientCarousel: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-900 text-center mb-12">
          Our Partners & Clients
        </h2>
        
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-900'
          }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          className="client-carousel"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-105">
                <div className="h-48 bg-blue-900 relative">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-playfair font-bold text-white">{client.name}</h3>
                    <p className="text-gold-400 font-raleway">{client.location}</p>
                  </div>
                </div>
                {client.testimonial && (
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <blockquote className="italic text-gray-600 font-raleway">
                      "{client.testimonial}"
                    </blockquote>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientCarousel;