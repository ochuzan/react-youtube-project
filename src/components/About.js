import './About.css';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar /> 
            <div id='about-display'>
                <h4>
                    Create a React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch.
                </h4>
                <br/>
                <div class='bio-container'> 
                    <div class='wrapper'>
                        <div class='our-name'>Alex Tan</div>
                    </div>
                    <p>Full Stack Web Fellow at Pursuit, lived in Virginia before moving to New York to learn how to become a better coder.</p>
                    <button class='github-button'><a href="https://github.com/AlexTan21">My GitHub!</a></button>
                </div>
                <br/>
                <div class='bio-container'> 
                    <div class='wrapper'>
                        <div class='our-name'>David Vidals</div>
                    </div>
                    <p>Full Stack Web Fellow at Pursuit. Born and raised in NYC. I recommend searching Bad Bunny using our YouTube page!</p>
                    <br/>
                    <button class='github-button'> <a href="https://github.com/Davidvidals">My Github!</a></button>
                </div>
                <br/>
                <div class='bio-container'> 
                    <div class='wrapper'>
                        <div class='our-name'>Oliver Chuzan</div>
                    </div>
                    <p>Full Stack Web Fellow at Pursuit, formerly a Workday Financials Business Systems Associate</p>
                    <br/>
                    <button class='github-button'><a href="https://github.com/ochuzan">My Github!</a></button>
                </div>
            </div>
        </div>
    );
};

export default About;