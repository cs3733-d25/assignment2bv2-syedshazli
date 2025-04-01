const FormCooking = () => {
    return (
        <div>
            <p>Any comments or future suggestions? I'm always ready to make a new meal. Let me know what you want me to cook by filling out the following fields:</p>
            <form>
                <div>
                    <label htmlFor="cook-name">Name:</label>
                    <input type="text" id="cook-name" name="name" />
                </div>

                <div>
                    <label htmlFor="cook-email">Email:</label>
                    <input type="text" id="cook-email" name="email" />
                </div>

                <div>
                    <label htmlFor="vegetarian">Vegetarian:</label>
                    <input type="checkbox" id="vegetarian" name="diet" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="vegan">Vegan:</label>
                    <input type="checkbox" id="vegan" name="diet" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="gluten-free">Gluten-Free:</label>
                    <input type="checkbox" id="gluten-free" name="diet" />
                </div>

                <div>
                    <label htmlFor="breakfast">Breakfast:</label>
                    <input type="radio" id="breakfast" name="meal-type" value="breakfast" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="lunch">Lunch:</label>
                    <input type="radio" id="lunch" name="meal-type" value="lunch" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="dinner">Dinner:</label>

                    <input type="radio" id="dinner" name="meal-type" value="dinner" />
                </div>

                <div>
                    <label htmlFor="cuisine">Cuisine:</label>
                    <select id="cuisine" name="cuisine">
                        <option value="italian">Italian</option>
                        <option value="mexican">Mexican</option>
                        <option value="thai">Thai</option>
                        <option value="indian">Indian</option>
                        <option value="american">American</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea id="comments" name="comments" rows={4} cols={50}></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormCooking;