import ListCooking from './ListCooking.tsx';
import TableCooking from './TableCooking.tsx';
import FormCooking from './FormCooking.tsx';
import CookingImage from '../../assets/cooking.png';

const Cooking = () => {
    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h2>Syed's Cooking Hobby</h2>
            <img src={CookingImage} alt="Cooking" width="640"/>

            <h3>Hey there again! Learn a little more about my journey so far in cooking.</h3>
            <p>
                I have only just started cooking last year, and I've begun to enjoy it a lot. Following
                recipes or putting my own twist on some makes cooking very fun! Oftentimes I seek the
                help of my mom, and I also cook alongside my brother and my sister over the weekends.
            </p>

            <h3>Cuisines I've Cooked</h3>
           <ListCooking/>

            <h3>Dinner Plan</h3>
            <TableCooking />


            <FormCooking />

        </div>
    );
};

export default Cooking;