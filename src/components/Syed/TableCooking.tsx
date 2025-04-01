const tableCooking = () => {
    return (
        <table className="collapse">
            <caption>Dinner Plan Week of 3/24/2025</caption>
            <thead>
            <tr>
                <th>Day</th>
                <th>Meal</th>
                <th>Recipe</th>
                <th>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Monday</td>
                <td>Dinner</td>
                <td>Pasta</td>
                <td>30 min</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>Dinner</td>
                <td>Curry</td>
                <td>45 min</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>Dinner</td>
                <td>Pizza</td>
                <td>60 min</td>
            </tr>
            </tbody>
        </table>
    );
};

export default tableCooking;
