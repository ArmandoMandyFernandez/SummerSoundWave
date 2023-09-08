import './Welcome.scss';
import GetStartedButton from '../GetStartedButton/GetStartedButton';


function Welcome({name, href, images}){
    return(
        <section>
            <h1>Hey {name} {images}! </h1>
                    <div>
                        <h3>
                            Let's relive this past summer's anthems with your favorite tracks all in one place. Enjoy!
                        </h3>
                        <GetStartedButton href={href}/>
                    </div>
        </section>
    )
}

export default Welcome;