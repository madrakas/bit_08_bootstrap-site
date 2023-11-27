import { useEffect } from "react";
import { useState } from "react";

export function Listing(){
    const [option, setOption] = useState('-');
    const [dict, setDict] = useState([]);
    

    useEffect(() => {
        if (option === '-'){
            setDict([]);
        } else {
            fetch(`http://localhost:3000/bit_10_bootstrap-site/data/${option}.json`)
            .then(res => res.json())
            .then(data => setDict(data.zodziai))
            .catch(err => console.error(err));
        }
    }, [option])
    
    function handleSelectChange(e){
        setOption(e.target.value);
    }

    return(
        <div className="container">
            <h1>Zodynas: {option === '-' ? '' : option}</h1>
            <div className="row mt-5 mb-5">
                <form className="col-12 com-md-6 col-lg-4">
                    <select onChange={handleSelectChange} style={{ width: '100%', padding: 10}} value={option}>
                        <option value="-">-</option>
                        <option value="daiktavardziai">Daiktavardžiai</option>
                        <option value="budvardziai">Būdvardžiai</option>
                        <option value="veiksmazodziai">Veiksmažodžiai</option>
                    </select>
                </form>
            </div>
            <ul className="row">
                { dict.map(word => <li key={word} className="col12 col-md-6 col-lg-4 card p-3 fs-3">{word}</li>) }
                
            </ul>
        </div>
    );
}