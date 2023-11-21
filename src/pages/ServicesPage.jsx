import { Header } from "../sections/Header";
import { Services } from "../sections/Services";
import { Footer } from "../sections/Footer";

export function ServicesPage(){
    return(
        <>
            <Header />
            <main>
                <Services sortby="price90"/>
            </main>
            <Footer />
        </>
    );
}