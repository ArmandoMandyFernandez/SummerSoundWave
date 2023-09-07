import './GetStartedButton.scss';
import { useEffect } from 'react';
import axios from 'axios';




function GetStartedButton(){



    
        useEffect(() => {
                axios
                    .get(`https://api.spotify.com/v1/me/top/tracks?limit=30`)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }, []);


    return(
        <section>
            <button className='button__getTracks'>Get Started</button>
        </section>
    )
}

export default GetStartedButton;