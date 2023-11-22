import { Link } from "react-router-dom";
import style from "./Auth.module.css";

export function Register(){
    return(
        <section>
            <div className="row">
                <form className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5">
                    <h1 className={style.mainTitle + " h3 mb-3 font-weight-normal"}>Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                    <label htmlFor="inputPasswordRepeat" className="sr-only">Repeat Password</label>
                    <input type="password" id="inputPasswordRepeat" className="form-control" placeholder="Password" required=""/>
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="tos"/> Agree to <Link to="/bit_10_bootstrap-site/tos">Terms of Service</Link>
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
        </section>
        
    );
}