// Import dependencies
import { Link } from 'react-router-dom';

// Import components
import Button from '../Button/Button';
import WeekSpecialCard from '../WeekSpecialCard/WeekSpecialCard';

// Import assets
import greekSalad from '../../assets/weekspecials/greek salad.jpg';
import bruschetta from '../../assets/weekspecials/bruchetta.svg';
import lemonDessert from '../../assets/weekspecials/lemon dessert.jpg'

// Import CSS module
import styles from './WeekSpecials.module.css'

const meals = [
  {
    id: 0,
    name: 'Greek Salad',
    image: greekSalad,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    id: 1,
    name: 'Bruschetta',
    image: bruschetta,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    id: 2,
    name: 'Lemon Dessert',
    image: lemonDessert,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

function WeekSpecials() {
  return (
    <section className={styles.specials}>
      <div className={styles.specialsHeader}>
        <h2>This week specials!</h2>
        <Link to="/order"><Button type="click" status={false} valid="Online Menu" invalid="invalid" /></Link>
      </div>
      <div className={styles.cards}>
        {meals.map((meal) =>
          <WeekSpecialCard key={meal.id} meal={meal} />
        )}
      </div>
    </section>
  );
};

export default WeekSpecials;
