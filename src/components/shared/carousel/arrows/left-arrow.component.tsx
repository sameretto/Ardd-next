import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    goToPrevSlide: () => void;
}
export default function LeftArrow({goToPrevSlide}: Props) {
  return (
    <div className="cursor-pointer" onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} size="3x"/>
    </div>
  );
}