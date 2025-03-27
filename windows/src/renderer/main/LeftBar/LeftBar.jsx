import styles from './LeftBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faBars, faUserGroup, faImage } from '@fortawesome/free-solid-svg-icons';

export default function LeftBar({ leftBarItemSelectedId, setLeftBarItemSelectedId }) {

    return (
        <div className={styles.root}>
            <div className={styles.logoContainer}><FontAwesomeIcon icon={faImage} className={styles.FontAwesomeIcon} /></div>
            <div className={styles.items}>
                {
                    [0, 1, 2, 3].map(index => (
                        <div
                            key={index}
                            className={leftBarItemSelectedId === index ? styles.itemActive : styles.itemInactive}
                            onClick={() => setLeftBarItemSelectedId(index)}
                        >
                            {
                                index === 0 ? <FontAwesomeIcon icon={faUser} className={styles.FontAwesomeIcon} /> : 
                                index === 1 ? <FontAwesomeIcon icon={faComment} className={styles.FontAwesomeIcon} /> : 
                                index === 2 ? <FontAwesomeIcon icon={faUserGroup} className={styles.FontAwesomeIcon} /> : 
                                <FontAwesomeIcon icon={faBars} className={styles.FontAwesomeIcon} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}