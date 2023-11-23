import { useEffect } from "react";
import { useState } from "react";

export function HowCanWeHelp() {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    
    useEffect(() =>{
        fetch('http://localhost:3000/bit_10_bootstrap-site/data/help0.json')
        .then(res => res.json())
        .then(resData => setData(resData.services))
        .catch(err => setIsError(true));
        // .then(() => console.log(data));
    },[]);

    const emptyServices = <div className="col-12">Loading services data...</div>;
    
    const servicesList =   data.map((service, idx) => (
        <div key={idx} className="col">
            <div className="d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <img src={service.img} alt="sertvice logo"></img>
            </div>
            <h3 className="fs-2 text-body-emphasis">{service.title}</h3>
            <p>{service.description}</p>
        </div>
    ));
    
    const errorServices = <div className="col-12">Opps! We can't...</div>;
        
    let content = emptyServices;

    if (isError) {
        content = errorServices; 
    } else if (data.length > 0) {
        content = servicesList;
    }
        
    return(
        <div className="container px-4 py-5 text-center" id="featured-3">
            <h2 className="pb-2 border-bottom text-center">How we can help?</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                
                  {content}
                
                
            </div>
        </div>

    );
}