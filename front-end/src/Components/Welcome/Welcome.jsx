import './Welcome.scss';
import GetStartedButton from '../GetStartedButton/GetStartedButton';


function Welcome({ code }){
    return(
        <section>
            <h1>Hey {code}! </h1>
                    <div>
                        <h3>
                            Let's relive this past summer's anthems with your favorite tracks all in one place. Enjoy!
                        </h3>
                        <GetStartedButton />
                    </div>
        </section>
    )
}

export default Welcome;