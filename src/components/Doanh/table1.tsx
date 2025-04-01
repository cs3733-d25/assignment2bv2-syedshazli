import React from 'react';

const Table1: React.FC = () => {
    return (
        <div>
            <h2>Basketball Legends Statistics</h2>
            <table className="collapse">
                <caption>Total Career Stats</caption>
                <tr>
                    <th>Player</th>
                    <th>Total Points</th>
                    <th>Championship Rings</th>
                    <th>Finals MVPs</th>
                </tr>
                <tr>
                    <td>LeBron James</td>
                    <td>41941</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Stephen Curry</td>
                    <td>25117</td>
                    <td>4</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Michael Jordan</td>
                    <td>32292</td>
                    <td>6</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Kobe Bryant</td>
                    <td>33643</td>
                    <td>5</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Bronny James Jr</td>
                    <td>52</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    );
}

export default Table1;
