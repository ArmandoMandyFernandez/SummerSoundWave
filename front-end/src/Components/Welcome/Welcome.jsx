import './Welcome.scss';
import GetStartedButton from '../GetStartedButton/GetStartedButton';


function Welcome({name}){
    return(
        <section>
            <h1>Hey {name}! </h1>
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