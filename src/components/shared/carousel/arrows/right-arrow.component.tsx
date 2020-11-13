import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './arrow.module.scss';

type Props = {
    goToNextSlide: () => void;
}
export default function RightArrow({goToNextSlide}: Props) {
  return (
    <div className={'cursor-pointer ' + style['right-arrow']} onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faChevronRight} size="3x"/>
    </div>
  );
}