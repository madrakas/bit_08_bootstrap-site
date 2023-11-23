import { Link } from "react-router-dom";
import style from "./Auth.module.css";
import { useState } from "react";
import { isValidEmail, isValidPassword, isValidPhone, isValidUsername } from "../lib/IsValid";

export function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('');
    const [tos, setTos] = useState(false);
    
    
    function handleChangeUserName (event) {
        setUsername(event.target.value);
    }
    

    function handleChangeEmail (event) {
        setEmail(event.target.value);
    }

    function handleChangePhone (event) {
        setPhone(event.target.value);
    }

    function handleChangePassword (event) {
        setPass(event.target.value);
    }


    function handleChangeRepeatedePassword (event) {
        setRepass(event.target.value);
    }

    function handleChangeTos (event) {
        setTos(!tos);
    }

    function handleSubmit (event){
        event.preventDefault();

        console.log({
            username,
            email,
            phone,
            pass,
            repass,
            tos,
        });

        let isAllInfoOK = true;

        if (!isValidUsername(username)) {
            isAllInfoOK = false;
        }

        if (!isValidEmail(email)) {
            isAllInfoOK = false;
        }

        if (!isValidPhone(phone)) {
            isAllInfoOK = false;
        }

        if (!isValidPassword(pass)) {
            isAllInfoOK = false;
        }
        
        if (!isValidPassword(repass)) {
            isAllInfoOK = false;
        }

        if (tos !== true) {
            isAllInfoOK = false;
        }

        console.log ('Ar viskas OK:', isAllInfoOK);
    }

    return(
        <section>
            <div className="row">
                <form onSubmit={handleSubmit}className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5">
                    <h1 className={style.mainTitle + " h3 mb-3 font-weight-normal"}>Please sign in</h1>
                    
                    <div className="form-floating">
                        <input onChange={handleChangeUserName} value={username} type="text" id="username" className="form-control" placeholder="User name" required="" autoFocus="" />
                        <label htmlFor="inputUserName">User Name</label>
                    </div>                                        
                    
                    <div className="form-floating">
                        <input onChange={handleChangeEmail} value={email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
                        <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input onChange={handleChangePhone} value={phone} type="tel" id="inputPhone" className="form-control" placeholder="Email address" required="" />
                        <label htmlFor="inputPhone">Phone number</label>
                    </div>
                    
                    <div className="form-floating">
                        <input onChange={handleChangePassword} value={pass} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="form-floating">
                        <input onChange={handleChangeRepeatedePassword} value={repass} type="password" id="inputPasswordRepeat" className="form-control" placeholder="Password" required="" />
                        <label htmlFor="inputPasswordRepeat">Repeat Password</label>
                    </div>

                    <div className="form-floating">
                        <div className="checkbox mb-3">
                            <label>
                            <input onChange={handleChangeTos} type="checkbox" value={tos}/> Agree to <Link to="/bit_10_bootstrap-site/tos">Terms of Service</Link>
                            </label>
                        </div>
                    </div>

                    <div className="form-floating">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                    </div>
                </form>
            </div>
        </section>
        
    );
}