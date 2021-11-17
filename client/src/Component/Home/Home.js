import React, { useEffect, useState } from "react";
import About from "../../About/About";
import Reviews from "../../Reviews/Reviews";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <section className="all--tours">
        <h2 className="display-5 text-center section-heading">
          MOST POPULAR TOURS
        </h2>
        <div className="container">
          <div className="row p-3 ">
            {services.map((service) => (
              <Service service={service} key={service.id}></Service>
            ))}
          </div>
        </div>
      </section>
      <About></About>
      <Reviews />
    </>
  );
};

export default Home;
