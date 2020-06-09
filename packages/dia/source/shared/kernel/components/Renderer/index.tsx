import React from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    PageElement,
} from '../../data/interfaces';

import {
    PageElementKind,
} from '../../data/enumerations';

import Head from '../Head';
import Navigation from '../InPage/Navigation';
import Hero from '../InPage/Hero';
import ImageText from '../InPage/ImageText';
import Video from '../InPage/Video';
import Stripe from '../InPage/Stripe';



const renderContent = (
    page: PageElement[],
) => {
    const content: JSX.Element[] = [];

    for (const element of page) {
        switch (element.kind) {
            case PageElementKind.Head: {
                const {
                    data,
                } = element;

                content.push((
                    <Head
                        key={uuid.generate()}
                        {...data}
                    />
                ));
                break;
            }
            case PageElementKind.Navigation: {
                const {
                    data,
                } = element;

                content.push((
                    <Navigation
                        key={uuid.generate()}
                        {...data}
                    />
                ));
                break;
            }
            case PageElementKind.Hero: {
                const {
                    data,
                } = element;

                content.push((
                    <Hero
                        key={uuid.generate()}
                        {...data}
                    />
                ));
                break;
            }
            case PageElementKind.ImageText: {
                const {
                    data,
                } = element;

                content.push((
                    <ImageText
                        key={uuid.generate()}
                        {...data}
                    />
                ));
                break;
            }
            case PageElementKind.Video: {
                const {
                    data,
                } = element;

                content.push((
                    <Video
                        key={uuid.generate()}
                        {...data}
                    />
                ));
                break;
            }
            case PageElementKind.Stripe: {
                const {
                    data,
                } = element;

                content.push((
                    <Stripe
                        key={uuid.generate()}
                        {...data}
                    />
                ));
                break;
            }
            case PageElementKind.Custom: {
                const {
                    Element,
                } = element;

                content.push((
                    <Element
                        key={uuid.generate()}
                    />
                ));
                break;
            }
        }
    }

    return content;
}


export interface RendererProperties {
    page: PageElement[];
}

const Renderer: React.FC<RendererProperties> = (
    properties,
) => {
    /** properties */
    const {
        page,
    } = properties;


    /** render */
    const content = renderContent(page);

    return (
        <>
            {content}
        </>
    );
}


export default Renderer;
