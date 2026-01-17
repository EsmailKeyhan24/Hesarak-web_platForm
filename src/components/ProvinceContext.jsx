import React, { createContext, useContext, useState } from 'react';

const ProvinceContext = createContext();

export const ProvinceProvider = ({ children }) => {
  const [startProvince, setStartProvince] = useState(null);
  const [endProvince, setEndProvince] = useState(null);
  const [travelDate, setTravelDate] = useState(null);

  return (
    <ProvinceContext.Provider value={{
      startProvince, setStartProvince,
      endProvince, setEndProvince,
      travelDate, setTravelDate
    }}>
      {children}
    </ProvinceContext.Provider>
  );
};

export const useProvince = () => useContext(ProvinceContext);
