import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.png";
import Navbar from "../components/shared/Navbar";
import PopularCategory from "../components/Home Page/PopularCategory";
import HowWorks from "../components/Home Page/HowWorks";
import Team from "../components/Home Page/Team";
import Brands from "../components/Home Page/Brands";
import Testimonial from "../components/Home Page/Testimonial";

const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef}>
                <div className="hero-content">
                    <div className="text-content">
                        <h1>
                            Get Your <span className="fancy">Dream Job </span> 
                            Today!
                        </h1>
                        <p>
                        Jobportal is one of the most demanding  and popular job portal websites for many job seekers to search for their desired job as per location. jobportal, is a Cameroon-based job portal that has now gone globally. It was popular several years ago because of its simplest design and ease of use. Applicants’ easiest tools to search through and filter job postings made it more convenient for job seekers. 
                        </p>
                        <div className="btn-grp">
                            <Link className="btn" to="/all-jobs">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </Wrapper>
            <div>
            <PopularCategory/>
            <HowWorks/>
            <Team/>
            <Testimonial/>
            <Brands/>
            </div>
        </>
    );
};

export default Landing;