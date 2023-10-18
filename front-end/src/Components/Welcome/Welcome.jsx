import "./Welcome.scss";
import SoundWave from "../../Assets/theSixMix.png"


function Welcome( ) {


    return (
        <section className="welcome">
                
                <h1 className="welcome_header">Welcome to The 6Mix </h1>
                <img src={SoundWave} alt="girl listening to music" className="welcome_image" />
                <p className="welcome_description">Dive into a musical journey tailored just for you with The 6Mix! Unleash the magic of your last six months of listening, seamlessly crafted into a sick mix of your own using Spotify. It's your musical diary, bringing together a blend of cherished favorites and forgotten gems, echoing the vibrant tunes of your past half-year!</p>
        </section>
    );
}

export default Welcome;
