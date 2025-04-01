import React from 'react';

const Form: React.FC = () => {
    return (
        <div>
            <p>Enter your name and email (so I can contact you if you chose the WRONG GOAT!)</p>
            <form>
                <label htmlFor="name">Your name:</label>
                <input type="text" id="name" name="name" /><br />
                <label htmlFor="answer">Your email:</label>
                <input type="text" id="answer" name="answer" /><br />

                <h3>Do you even know how to play basketball?</h3>
                <input type="checkbox" id="yes" />
                <label htmlFor="yes">Yes</label>
                <input type="checkbox" id="no" />
                <label htmlFor="no">No</label>
                <input type="checkbox" id="somewhat" />
                <label htmlFor="somewhat">Somewhat</label>

                <h2>Choose the GOAT:</h2>
                <input type="radio" id="lebron" name="goat" value="LeBron James" />
                <label htmlFor="lebron">LeGoat James</label><br />
                <input type="radio" id="curry" name="goat" value="Stephen Curry" />
                <label htmlFor="curry">Stephen Curry</label><br />
                <input type="radio" id="jordan" name="goat" value="Michael Jordan" />
                <label htmlFor="jordan">Michael Jordan</label><br />
                <input type="radio" id="kobe" name="goat" value="Kobe Bryant" />
                <label htmlFor="kobe">Kobe Bryant</label><br />
                <input type="radio" id="bronny" name="goat" value="Bronny James Jr" />
                <label htmlFor="bronny">Bronny James Jr</label><br />

                <label htmlFor="comments">Why do you think so?</label><br />
                <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br />

                <label htmlFor="thoughts">Should Bronny continue playing in the NBA?</label>
                <select id="thoughts" name="thoughts">
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unsure">He is not HIM</option>
                </select>

                <br />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Form;
