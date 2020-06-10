import {
    PageElementKind,
} from '../enumerations';



export interface PageElementBase {
    kind: keyof typeof PageElementKind;
}

export interface PageElementHead extends PageElementBase {
    kind: 'Head';
    data: HeadProperties;
}

export interface PageElementNavigation extends PageElementBase {
    kind: 'Navigation';
    data: NavigationProperties;
}

export interface PageElementHero extends PageElementBase {
    kind: 'Hero';
    data: HeroProperties;
}

export interface PageElementImageText extends PageElementBase {
    kind: 'ImageText';
    data: ImageTextProperties;
}

export interface PageElementVideo extends PageElementBase {
    kind: 'Video';
    data: VideoProperties;
}

export interface PageElementStripe extends PageElementBase {
    kind: 'Stripe';
    data: StripeProperties;
}

export interface PageElementCustom extends PageElementBase {
    kind: 'Custom';
    Element: React.FC<any>;
}


export type PageElement =
    | PageElementHead
    | PageElementNavigation
    | PageElementHero
    | PageElementImageText
    | PageElementVideo
    | PageElementStripe
    | PageElementCustom;



export interface HeadProperties {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogImage?: string;
    ogURL?: string;
    ogDescription?: string;
    canonicalURL?: string;
}

export interface NavigationProperties {
    items: NavigationItem[];
}

export interface HeroProperties {
    heading: string[];
    image?: Image;
    Element?: React.FC<any>;
    simple?: boolean;
}

export type ImageTextProperties = ImageText;

export interface VideoProperties {
    source: string;
}

export interface StripeProperties {
    heading: string[];
    text?: string[];
    Element?: React.FC<any>;
    image?: Image;
    backgrounded?: boolean;
    absolute?: boolean;
    grid?: boolean;
    link?: string;
}




export interface Image {
    link: string;
    alt: string;
}


export interface ImageTextBase {
    kind: 'readmore' | 'numbered';
    imageLayout: 'left' | 'right';
    image: Image;
    heading: string[];
    text: string[];
    backgrounded?: boolean;
}

export interface ImageTextReadMore extends ImageTextBase {
    kind: 'readmore';
    readMoreLink: string;
}

export interface ImageTextNumbered extends ImageTextBase {
    kind: 'numbered';
    number: number;
}

export type ImageText =
    | ImageTextReadMore
    | ImageTextNumbered;



export interface NavigationItem {
    text: string;
    link: string;
}
