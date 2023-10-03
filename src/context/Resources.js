import { createContext, useEffect, useState, useContext } from "react";
import { UserContext } from "./UserAuth";
import axios from "axios";

export const ResourcesContext = createContext({});

export function ResourcesContextProvider({ children }) {
  const [appUsers, setAppUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [services, setServices] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [totalService, setTotalService] = useState("");
  const [totalBooking, setTotalBooking] = useState("");
  const [totalCoupon, setTotalCoupon] = useState(0);
  const [totalUsers, setTotalUsers] = useState("");

  const { token } = useContext(UserContext);

  useEffect(() => {
    const fetchResource = async () => {
      // axios
      //   .get("/users", {
      //     headers: {
      //       "Content-type": "application/json",
      //       Authorization: `Token ${token}`,
      //     },
      //   })
      //   .then(({ data }) => {
      //     try {
      //       setUsers(data);
      //       setTotalUsers(users.data.length);
      //     } catch {
      //       setTotalCoupon(0);
      //     }
      //   });
      axios
        .get("/coupons", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
        .then((respond) => {
          try {
            setCoupons(respond.data);
            setTotalCoupon(coupons.data.length);
          } catch {
            setTotalCoupon(0);
          }
        });

      axios
        .get("/bookings", {
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
        .then(({ data }) => {
          try {
            setBookings(data);
            setTotalBooking(bookings.data.length);
          } catch {
            setTotalBooking(0);
          }
        });

      // axios
      //   .get("/services", {
      //     headers: {
      //       "Content-type": "application/json",
      //       Authorization: `Token ${token}`,
      //     },
      //   })
      //   .then(({ data }) => {
      //     setServices(data);
      //     setTotalService(services.data.length + 1);
      //   });
    };

    fetchResource();
  }, [token]);

  return (
    <ResourcesContext.Provider
      value={{ appUsers, bookings, jobs, services, coupons }}>
      {children}
    </ResourcesContext.Provider>
  );
}
