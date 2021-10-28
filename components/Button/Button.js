import styles from './Button.module.css';

import Link from 'next/link';

const Button = (props) => {
    return (
    <Link href={props.url}>
        <a className={styles.serviciosButton}>{props.title}</a>
    </Link>
    )

}

export default Button;