import { Carousel } from './slide.model';
import style from './slide.module.scss';

type Props = {
  slides: Carousel[];
  activeIndex: number;
};

export default function Slide({ slides, activeIndex }: Props) {
  return (
    <>
      {slides.map((s, index) => (
        <div className={(index === activeIndex ? style.active : style.slide)} key={index}>
          <div style={{ backgroundImage: `url(${s.image})` }} className={style.image}>
            <h2 className={style.text + ' p-4'}>{s.text}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
