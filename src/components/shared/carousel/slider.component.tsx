import { useState } from 'react';
import LeftArrow from './arrows/left-arrow.component';
import RightArrow from './arrows/right-arrow.component';
import { Carousel } from './slide/slide.model';
import Slide from './slide/slide.component';
import style from './slider.module.scss';

type Props = {
  carousel: Carousel[];
};

export default function Slider({ carousel }: Props) {
  const [slider, setSlider] = useState({ activeIndex: 0, length: carousel?.length });
  setTimeout(goToNextSlide, 5000);
  function goToPrevSlide(): void {
    let index = slider.activeIndex;
    let length = slider.length;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    setSlider({
      ...slider,
      activeIndex: index,
    });
  }
  function goToNextSlide(): void {
    let index = slider.activeIndex;
    let length = slider.length;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    setSlider({
      ...slider,
      activeIndex: index,
    });
  }

  return (
    <div className={style.slider}>
      <LeftArrow goToPrevSlide={goToPrevSlide} />
      <Slide slides={carousel} activeIndex={slider.activeIndex} />
      <RightArrow goToNextSlide={goToNextSlide} />
    </div>
  );
}
