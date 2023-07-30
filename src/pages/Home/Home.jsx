// Import components
import Cta from "../../components/Cta/Cta";
import WeekSpecials from "../../components/WeekSpecials/WeekSpecials";
import Testimonials from "../../components/Testimonials/Testimonials";
import Presentation from "../../components/Presentation/Presentation";

function Home() {
    return (
        <main>
            <Cta />
            <WeekSpecials />
            <Testimonials />
            <Presentation />
        </main>
    )
}

export default Home