import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './arrow.module.scss';

type Props = {
    goToPrevSlide: () => void;
}
export default function LeftArrow({goToPrevSlide}: Props) {
  return (
    <div className={'cursor-pointer ' + style['left-arrow']} onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} size="3x"/>
    </div>
  );
}