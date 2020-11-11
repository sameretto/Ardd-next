import { Carousel } from './slide.model';
import style from './slide.module.scss';

type Props = {
  slides: Carousel[];
  activeIndex: number;
};

export default function Slide({ slides, activeIndex }: Props) {
  console.log(slides);

  return (<>
      {slides.map((s, index) => (
        <div className={index === activeIndex ? style.active : style.slide} key={index}>
          <div style={{backgroundImage: `url(${s.image})`}} className={style.image}></div>
          <div className={style.text}>{s.text}</div>
        </div>
      ))}
      </>
  );
}
