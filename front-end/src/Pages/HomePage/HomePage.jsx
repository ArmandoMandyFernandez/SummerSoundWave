import './HomePage.scss';
import axios from 'axios';
import { useEffect } from 'react';
import useAuth from '../../Functions/useAuth';



function HomePage( { code } ){

    const accessToken = useAuth(code)

    // useEffect(() => {
    //     axios
    //     .get(`https://api.spotify.com/v1/${user.id}/top/tracks?limit=20`)
    //     .then((res)=>{
    //         console.log(res.data)
    //     })
    // })

    return(
        <section>
            Hello from Home 
            <div>{code}</div>
        
        </section>
    )
}

export default HomePage;