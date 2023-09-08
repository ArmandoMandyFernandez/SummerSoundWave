import './GetStartedButton.scss';
import { useNavigate } from 'react-router-dom';





function GetStartedButton(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/home');

    }

    return(
        <section>
            <button className='button__getTracks' onClick={handleButtonClick}>Get Started</button>
        </section>
    )
}

export default GetStartedButton;