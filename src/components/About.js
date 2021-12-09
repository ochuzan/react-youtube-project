import './About.css';
import Navbar from './Navbar';

const About = () => {
    return (
        <header>
            <Navbar />
            <h1>
            Create a React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch.
            </h1>
            <p>
                Alex Tan: Full Stack Web Fellow at Pursuit, lived in Virginia before moving to New York to learn how to become a better coder.
                <a href="https://github.com/AlexTan21">My GitHub</a>
            </p>
            <br/>
            <p>
                David Vidals: Full Stack Web Fellow at Pursuit. Born and raised in NYC. I recommend searching Bad Bunny using our YouTube page!
                <a href="https://github.com/Davidvidals">My Github!</a>
            </p>
            <p>
                Oliver Chuzan: Full Stack Web Fellow at Pursuit, formerly a Workday Financials Business Systems Associate
                <a href="https://github.com/ochuzan">Oliver Chuzan's Github</a>
            </p>
        </header>
    );
};

export default About;