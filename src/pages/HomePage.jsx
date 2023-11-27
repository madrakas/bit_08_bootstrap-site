import { Header } from "../sections/Header";
import { Services } from "../sections/Services";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { BusinessGrowth } from "../sections/BusinessGrowth";
import { HowCanWeHelp } from "../sections/HowCanWeHelp";

export function HomePage(){
    return(
        <>
            <Header />
            <main>
                <Hero />
                <Services limit={3}/>
                <BusinessGrowth />
                <HowCanWeHelp />
            </main>
            <Footer />
        </>
    );
}