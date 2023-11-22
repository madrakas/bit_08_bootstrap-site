import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { Register } from "../sections/Register";

export function RegisterPage(){
    return(
        <>
            <Header />
            <main>
                <Register />
            </main>
            <Footer />
        </>
    );
}