import { NextRouter } from 'next/router';

export default function adaptiveCss(class1: string, class2: string, router?: NextRouter) {
    return (router?.locale === 'en' ? class1 : class2);
}