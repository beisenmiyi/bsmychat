import { useState } from 'react'
import styles from './LeftBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faBars, faUserGroup, faImage } from '@fortawesome/free-solid-svg-icons';

export default function LeftBar() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className={styles.root}>
            <div className={styles.logoContainer}><FontAwesomeIcon icon={faImage} /></div>
            <div className={styles.items}>
                {
                    [1, 2, 3, 4].map(index => (
                        <div
                            key={index}
                            className={activeIndex === index ? styles.itemActive : styles.itemInactive}
                            onClick={() => handleClick(index)}
                        >
                            {
                                index === 1 ? <FontAwesomeIcon icon={faUser} /> : 
                                index === 2 ? <FontAwesomeIcon icon={faComment} /> : 
                                index === 3 ? <FontAwesomeIcon icon={faUserGroup} /> : 
                                <FontAwesomeIcon icon={faBars} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}