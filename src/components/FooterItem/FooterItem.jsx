// Import CSS module
import styles from './FooterItem.module.css'

function FooterItem({ title, list }) {

    const liList = list.map((li) => <li className={styles.li} key={li}>{li}</li>)
    return (
        <div className={styles.item}>
            <div className={styles.title}>{title}</div>
            <ul className={styles.ul}>{liList}</ul>
        </div>
    )
}

export default FooterItem