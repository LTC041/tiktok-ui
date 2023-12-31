import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avartar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ad71cd7a2317443ee55d6aab79145037~c5_300x300.webp?x-expires=1692633600&x-signature=gQI0UtnlsSQ7n9hFIrIVBBKB0dM%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('user-name')}> Nguyen Van A</span>
            </div>
        </div>
    );
}

export default AccountItem;
