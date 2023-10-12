import "./Welcome.scss";
import SoundWave from "../../Assets/SummerSoundWave.png"


function Welcome( ) {


    return (
        <section className="welcome">
                
                <h1 className="welcome_header">Step Back into the sunshine with SummerSoundWave </h1>
                <img src={SoundWave} alt="girl listening to music" className="welcome_image" />
                <p className="welcome_description">Welcome to SummerSoundWave - your personalized musical escape to the radiant vibes of Summer '23. Uncover a playlist crafted to echo the unforgettable rhythms and melodies that defined your sun-soaked moments. Each tune is a journey, inviting you to relive the warmth and nostalgia with every note. Share your top 5 favorites and the entire playlist with friends, letting the harmonies spread the sunshine of memorable days. Dive in, let the music dance, and bask in the golden echoes of summer with every listen.</p>
        </section>
    );
}

export default Welcome;
