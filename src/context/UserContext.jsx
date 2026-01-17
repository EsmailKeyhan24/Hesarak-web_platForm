// src/context/UserContext.jsx
// import { createContext, useState, useContext } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // هوک برای استفاده راحت
// export const useUser = () => useContext(UserContext);

// import { createContext, useState, useContext, useEffect } from "react";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     // موقع بارگذاری اولیه، user رو از localStorage بخون
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   // هر بار که user تغییر کرد، دوباره توی localStorage ذخیره کن
//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [user]);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);



import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuthStatus = async () => {
    try {
      const res = await fetch("https://hesarak-backend.vercel.app/api/users/me", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // ارسال کوکی به بک‌اند
      });

      if (res.status === 200) {
        const data = await res.json();
        setIsLoggedIn(true);
        setUser(data);
        console.log(data)
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  
  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, checkAuthStatus }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);
