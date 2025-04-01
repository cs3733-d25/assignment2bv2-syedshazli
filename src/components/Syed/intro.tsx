import React from "react";

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <div className="intro">
            <p>Hi, I'm {name1}, a 6' international student who knows how to code. My current max bench PR is 185lbs, and I'm aiming for 225lbs by the end of D term.</p>
            <br/>
            <br/>

            <p> Hi! I'm {name2} Shazli, a sophomore at WPI studying Computer Science & ECE. I live 30 minutes
                west of Worcester. Outside of the classroom, I like playing soccer, cooking, travelling,
                and exploring nature.</p>
        </div>
    );
}

export default Intro;
