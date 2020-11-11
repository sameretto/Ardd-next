import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    goToNextSlide: () => void;
}
export default function RightArrow({goToNextSlide}: Props) {
  return (
    <div className="cursor-pointer" onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faAngleRight} size="3x"/>
    </div>
  );
}