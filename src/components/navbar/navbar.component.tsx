import Image from 'next/image';
import style from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <div className={style.navbar + " py-2 px-5"}>
            <a className={style.logo}>
                <Image src="/Images/ardd-logo.png" height="75" width="52" alt="Ardd logo" />
                <div className="my-auto ml-3">
                    <p className={style['logo-font']}>Arab Renaissance for</p>
                    <p className={style['logo-font']}>Democracy & Development</p>
                </div>
            </a>
            <div className={style.tabs}></div>
            <div className={style.options + ' my-auto'}>
                <a className={style['arabic-translation-word'] + ' mr-3'}>عربى</a>
                <FontAwesomeIcon className="my-auto" icon={faSearch} />
            </div>
        </div>
    )
}