import React from "react";
import Hero from "./components/hero/Hero";
import Testimonials from "./components/testimonials/Testimonials";

function Home({ data }) {
    return (
        <div className="md:max-w-[80%] max-w-full p-2 w-full mx-auto  my-[10px] md:my-[40px]">
            <div className="my-[40px]">
                <Testimonials data={data.testimonials} />
            </div>
            <div className="my-[40px]">
                <Hero />
            </div>
        </div>
    );
}

export default Home;
