import Home from "./home";
import { Services } from "./services";
import { Reviews } from "./reviews";
import { CoursesPreview } from "./coursesPreview";
import { WhyUs } from "./whyUs";
import { Location } from "./location";

export default function LandingPage() {
    return (
        <>
            <Home />
            <Services />
            <Reviews />
            <WhyUs />
            <CoursesPreview />
            <Location />
        </>
    );
}
