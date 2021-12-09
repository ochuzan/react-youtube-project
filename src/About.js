import './About.css';

const About = () => {
    return (
        <header>
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="about.asp">About</a></li>
                <li><a href="view.asp">View</a></li>
            </ul>
            <h1>
            Create a React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch.
            </h1>
            <p>
                Alex Tan: Full Stack Web Fellow at Pursuit, lived in Virginia before moving to New York to learn how to become a better coder.
                <a href="https://github.com/AlexTan21">My GitHub</a>
            </p>
        </header>
    );
};

export default About;