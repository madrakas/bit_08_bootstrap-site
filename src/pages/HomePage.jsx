
import { Services } from "../sections/Services";
import { Hero } from "../sections/Hero";
import { BusinessGrowth } from "../sections/BusinessGrowth";
import { HowCanWeHelp } from "../sections/HowCanWeHelp";

export function HomePage(){
    return(
        <>
            <Hero />
            <Services limit={3}/>
            <BusinessGrowth />
            <HowCanWeHelp />
        </>
    );
}