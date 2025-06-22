import React, { createContext, ReactNode, useState } from "react";

// Default agency information
const defaultAgency = {
  logo: "../../public/logo.jpeg",
  name: "Black Olive Solutions",
  tagline: "Harvesting Talent. Redefining Gastronomy",
  email: "TODO",
  phone: "+961 3 529 271",
  address: "Beirut, Lebanon",
  socialLinks: {
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};

// Context type definition
interface AgencyContextType {
  agency: typeof defaultAgency;
  updateAgency: (newData: Partial<typeof defaultAgency>) => void;
}

// Create context with default values
export const AgencyContext = createContext<AgencyContextType>({
  agency: defaultAgency,
  updateAgency: () => {},
});

// Provider component
export const AgencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [agency, setAgency] = useState(defaultAgency);

  const updateAgency = (newData: Partial<typeof defaultAgency>) => {
    setAgency((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    <AgencyContext.Provider value={{ agency, updateAgency }}>
      {children}
    </AgencyContext.Provider>
  );
};
