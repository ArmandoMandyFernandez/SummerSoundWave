import axios from 'axios';
import './GetStartedButton.scss';






function GetStartedButton( {href} ){
    

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