import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer"
import { Login } from "../sections/Login";

export function RegisterPage(){
    return(
        <>
            <Header />
            <main>
                <Login />
            </main>
            <Footer />
        </>
    );
}