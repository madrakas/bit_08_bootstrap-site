import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { Services } from "../sections/Services";
import { Listing } from "../sections/Listing";

export function ListingPage(){
    return(
        <>
            <Header />
            <main>
                <Listing />
            </main>
            <Footer />
        </>
    );
}