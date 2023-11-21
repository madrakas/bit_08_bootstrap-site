import { Header } from "../sections/Header";
import { Services } from "../sections/Services";
import { Footer } from "../sections/Footer";

export function HomePage(){
    return(
        <>
            <Header />
            <main>
                <Services limit={3}/>
            </main>
            <Footer />
        </>
    );
}