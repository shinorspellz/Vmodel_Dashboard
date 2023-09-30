import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setReady(true);
        console.log("User data updated:", user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [user]);
    
    

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
