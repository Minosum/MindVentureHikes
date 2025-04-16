import NavBar from "./components/NavBar/NavBar";
import ToursSection from "./components/ToursSection/ToursSection";
import { pageData } from '@/app/data/pageData'
import JoinUs from "./components/JoinUs/JoinUs";


export default function Home() {
    return (
        <>
            <div style={{ height: '700px' }}>
                <NavBar heading={pageData.title} description={pageData.introduction.description} />
            </div>

            {/* <InstagramPosts /> */}
            <ToursSection />
            <JoinUs />
        </>
    );
}
