import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { TbDog } from 'react-icons/tb';
import dog from '../assets/dog.svg';
import { DogIcon } from '../components/DogIcon';

export function Footer(){
    return(
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>
      
                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>
      
                <div className="col-6 col-md-2 mb-3">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                    </ul>
                </div>
      
                <div className="col-md-5 offset-md-1 mb-3">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
      
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-body-emphasis" href="/"><DogIcon color="blue" size="50px" /></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><DogIcon color="green" size="2em" /></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><TbDog /></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><img src={dog} alt=""/></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/">
                <svg stroke="currentColor" 
                     fill="currentColor" 
                     strokeWidth="0" 
                     viewBox="0 0 576 512" 
                     height="1em" width="1em" 
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"></path>
                </svg>
                
                
                </a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><FaTwitter /></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><FaInstagram /></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><FaFacebook /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
}