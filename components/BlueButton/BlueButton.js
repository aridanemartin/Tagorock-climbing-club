import styles from './BlueButton.module.css';

import Link from 'next/link';

const BlueButton = (props) => {
    return (
    <Link href={props.url}>
        <a className={styles.serviciosButton}>{props.title}</a>
    </Link>
    )

}

export default BlueButton;