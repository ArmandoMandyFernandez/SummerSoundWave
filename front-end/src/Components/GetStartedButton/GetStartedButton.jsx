import axios from 'axios';
import './GetStartedButton.scss';
import { useNavigate } from 'react-router-dom';





function GetStartedButton( {href} ){
    const navigate = useNavigate();

    const handleButtonClick = () => {

        axios
        .get(`${href}/top/tracks?limit=20`)
        .then((res)=>{
            console.log(res.data)
        }).catch(err => {
            console.log(err)
            err.sendStatus(400)
        })

    }

    return(
        <section>
            <button className='button__getTracks' onClick={handleButtonClick}>Get Started</button>
        </section>
    )
}

export default GetStartedButton;