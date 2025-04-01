import listCooking from './listCooking.tsx';
import tableCooking from './tableCooking.tsx';
import formCooking from './formCooking.tsx';

const cooking = () => {
    return (
        <div>
            <h2>Syed's Cooking Hobby</h2>
            <img src="/cooking.png" alt="Cooking" />

            <p>
                I'm Syed Shazli, a sophomore at WPI studying Computer Science & ECE. I live 30 minutes
                west of Worcester. Outside of the classroom, I like playing soccer, cooking, travelling,
                and exploring nature.
            </p>

            <p>
                I have only just started cooking last year, and I've begun to enjoy it a lot. Following
                recipes or putting my own twist on some makes cooking very fun! Oftentimes I seek the
                help of my mom, and I also cook alongside my brother and my sister over the weekends.
            </p>

            <h3>Cuisines I've Cooked</h3>
            <listCooking />

            <h3>Dinner Plan</h3>
            <tableCooking />

            <formCooking />
        </div>
    );
};

export default cooking;