// Import assets
import pbateman from '../../assets/testimonials/patrick-bateman.jpg'
import thomas from '../../assets/testimonials/thomas.jpg';
import felicity from '../../assets/testimonials/felicity.jpg';
import olivia from '../../assets/testimonials/olivia.jpg'

// Import components
import TestimonialCard from '../TestimonialCard/TestimonialCard';

// Import CSS module
import styles from './Testimonials.module.css'

const testimonials = [
    {
        id: 0,
        name: 'Patrick',
        image: pbateman,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 1,
        name: 'Thomas',
        image: thomas,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 2,
        name: 'Felicity',
        image: felicity,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        name: 'Olivia',
        image: olivia,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
];

function Testimonials() {


    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2>Testimonials</h2>
                <div className={styles.articles}>
                    {testimonials.map((testimonial) =>
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Testimonials