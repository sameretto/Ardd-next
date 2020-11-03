import { ArticleCollection } from '../models/articles.model';

export const PAGES_COLLECTIONS = 'pages';
export const RECENT_PROPERTY = 'recent';

export type ContentType = 'newsroom' | 'publication' | 'event' | 'blog' | 'test' | 'project' | 'series';

export const ARTICLE_TYPES: ContentType[] = ['publication', 'blog', 'newsroom'];

export const ARTICLE_COLLECTIONS: { [type in ContentType]?: ArticleCollection } = {
    'newsroom': {
        page: 'news-room',
        collection: 'articles'
    },
    'publication': {
        page: 'publications',
        collection: 'articles'
    },
    'blog': {
        page: 'blogs',
        collection: 'articles'
    },
    'test': {
        page: 'test-data',
        collection: 'test-data'
    },
    'project': {
        page: 'projects',
        collection: 'projects'
    },
    'series': {
        page: 'series-home',
        collection: 'series'
    }
};


export const ARTICLE_TRANSLATIONS = {
    'all': {
        en: 'All',
        ar: 'الكل'
    },
    'newsroom': {
        en: 'News Room',
        ar: 'الغرفة الإعلامية'
    },
    'publication': {
        en: 'Publications',
        ar: 'المنشورات'
    },
    'blog': {
        en: 'Blogs',
        ar: 'المدونة'
    }
};

export const NEWS_TYPES = [
    {
        label: 'Our News',
        value: 'our-news',
        translation: 'أخبارنا'
    },
    {
        label: 'Media coverage',
        value: 'media-coverage',
        translation: 'تغطيات'
    },
    {
        label: 'Panorama',
        value: 'panorama',
        translation: 'بانوراما مواد مختارة'
    },
    {
        label: 'Articles & Commentaries',
        value: 'articles-commentaries',
        translation: 'مقالات وتعليقات'
    },
    {
        label: 'Opinion Papers',
        value: 'opinion-papers',
        translation: 'أوراق الرأي'
    },
    {
        label: 'Statements',
        value: 'statements',
        translation: 'بيانات صحفية'
    },
    {
        label: 'Newsletters & Bulletins',
        value: 'newsletters-bulletins',
        translation: 'نشرات صحفية وإخبارية'
    },
    {
        label: 'Other',
        value: 'other',
        translation: 'أخرى'
    }
];
export const PUBLICATION_TYPES = [
    {
        label: 'Books',
        value: 'books',
        translation: 'كتب'
    },
    {
        label: 'Reports',
        value: 'reports',
        translation: 'تقارير'
    },
    {
        label: 'Studies',
        value: 'studies',
        translation: 'دراسات'
    },
    {
        label: 'Legal Papers',
        value: 'legal-papers',
        translation: 'أوراق قانونية'
    },
    {
        label: 'Executive Summaries',
        value: 'executive-summaries',
        translation: 'ملخصات تنفيذية'
    },
    {
        label: 'Policy Papers',
        value: 'policy-papers',
        translation: 'أوراق السياسات'
    },
    {
        label: 'Manuals',
        value: 'manuals',
        translation: 'أدلة'
    },
    {
        label: 'Awareness & Factsheets',
        value: 'awareness-&-factsheets',
        translation: 'مطبوعات توعوية وإرشادية'
    },
    {
        label: 'Annual Report',
        value: 'annual-report',
        translation: 'التقرير السنوي'
    },
    {
        label: 'Other',
        value: 'other',
        translation: 'أخرى'
    }
];

export const NEWS_TOPICS = [
    {
        label: 'Board of Trustees',
        value: 'board-of-trustees',
        translation: 'مجلس الأمناء'
    },
    {
        label: 'Legal Aid',
        value: 'legal-aid',
        translation: 'العون القانوني'
    },
    {
        label: 'Gender Justice & Women Participation',
        value: 'gender-justice-women-participation',
        translation: 'العدالة الجندرية ومشاركة المرأة'
    },
    {
        label: 'Youth Empowerment',
        value: 'youth-enablement',
        translation: 'تمكين الشباب'
    },
    {
        label: 'Solidarity & Social Cohesion',
        value: 'solidarity-social-cohesion',
        translation: 'التضامن والسِلم الاجتماعيين'
    },
    {
        label: 'Governance & Accountability',
        value: 'governance-accountability',
        translation: 'الحَوْكَمة والمساءلة'
    },
    {
        label: 'Justice Sector Reform',
        value: 'justice-sector-reform',
        translation: 'تطوير قطاع العدالة'
    },
    {
        label: 'Right to Know & Freedom of Speech',
        value: 'freedom-of-speech',
        translation: 'الحق بالمعرفة وحريّة التعبير'
    },
    {
        label: 'Forced Migration, Asylum & SHATAT',
        value: 'forced-migration',
        translation: 'الهجرة القسرية واللجوء والشتات'
    },
    {
        label: 'Refinement & Education',
        value: 'refinement-education',
        translation: 'التربية والتعليم'
    },
    {
        label: 'Development & Economic development',
        value: 'economic-development',
        translation: 'التنمية والتنمية الاقتصادية'
    },
    {
        label: 'NAHDA Center',
        value: 'nahda-center',
        translation: 'مركز النهضة الفكري'
    },
    {
        label: 'NAHDA Forum',
        value: 'nahda-forum',
        translation: 'منتدى النهضة العربية'
    },
    {
        label: 'NAHDA Youth',
        value: 'nahda-youth',
        translation: 'شباب النهضة'
    },
    {
        label: 'Regional',
        value: 'regional',
        translation: 'إقليمي'
    },
    {
        label: 'International',
        value: 'international',
        translation: 'دولي'
    },
    {
        label: 'Events & Activates',
        value: 'events-activates',
        translation: 'فعاليات وأنشطة'
    },
    {
        label: 'Participations',
        value: 'participations',
        translation: 'مشاركات'
    },
    {
        label: 'General',
        value: 'general',
        translation: 'عام'
    }
];