import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Slider from '../components/shared/carousel/slider.component';
import { PAGES_COLLECTIONS } from '../core/constants/articles.const';
import { HomePage } from '../core/models/home-page.model';
import admin from '../core/utils/firebase-admin.util';
import timeStampCasting from '../core/utils/timestamp-casting.util';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const page = `homePage-${context.locale}`;
    const data = timeStampCasting((await admin.firestore().collection(PAGES_COLLECTIONS).doc(page).get()).data() as HomePage);
    return {
        props: { data }
    }
}

export default function home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (<Slider carousel={props.data?.carousel!}></Slider>)
}

