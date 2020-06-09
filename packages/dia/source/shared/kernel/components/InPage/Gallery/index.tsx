import React, {
    useRef,
    useState,
    useEffect,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledGallery,
    StyledViewContainer,
    StyledView,
} from './styled';

import Slide from './components/Slide';
import Selectors from './components/Selectors';



interface GalleryProperties {
    items: React.FC<any>[];
    rows: number;
    columns: number;
}

const Gallery: React.FC<GalleryProperties> = (
    properties,
) => {
    /** properties */
    const {
        items,
        rows,
        columns,
    } = properties;


    /** references */
    const viewContainer = useRef<HTMLDivElement>();
    const view = useRef<HTMLDivElement>();


    /** state */
    const [selectedSlide, setSelectedSlide] = useState(0);


    /** compute */
    const slideSize = rows * columns;
    const numberOfSlides = Math.floor(items.length / slideSize);

    const slides: React.FC<any>[][] = [];

    for (let i = 0; i < numberOfSlides; i++) {
        const slideItems = items.slice(i * slideSize, (i + 1) * slideSize);

        slides[i] = slideItems;
    }


    /** effects */
    useEffect(() => {
        if (view.current) {
            view.current.scrollLeft = selectedSlide * window.innerWidth;
        }
    }, [
        selectedSlide,
    ]);


    /** render */
    return (
        <StyledGallery>
            <StyledViewContainer
                ref={viewContainer}
            >
                <StyledView
                    ref={view}
                    numberOfSlides={numberOfSlides}
                >
                    {slides.map((slide, index) => (
                        <Slide
                            key={uuid.generate()}
                            index={index}
                            items={slide}
                            columns={columns}
                            setSelectedSlide={setSelectedSlide}
                            viewContainer={viewContainer}
                        />
                    ))}
                </StyledView>
            </StyledViewContainer>

            <Selectors
                selectedSlide={selectedSlide}
                setSelectedSlide={setSelectedSlide}
                numberOfSlides={numberOfSlides}
            />
        </StyledGallery>
    );
}


export default Gallery;
