import Typical from 'react-typical';

export default function Title(){
    const string = "< Full Stack Developer />"
    return <>
    <div className="title-Container">
        <h2>Hi! My Name Is</h2>
        <h1>Tashrif Radin Ali</h1>
        <h2 className="typewriter">
        <Typical
                        loop={Infinity}
                        wrapper="span"
                        steps={[
                            '< Full Stack Developer />', 2000,
                            '< Frontend Enthusiast />', 2000,
                            '< Backend Enthusiast />', 2000,
                            '< Passionate Coder />', 2000
                        ]}
                    />
        </h2>
        
    </div>
    <p className="title-info">I am an enthusiastic programmer and web developer, passionate about bringing my <br/> creations to life on the screen. My goal is to design and build user-friendly, visually <br/> appealing websites that effectively showcase clients' ideas and markets.</p>
    </>
}