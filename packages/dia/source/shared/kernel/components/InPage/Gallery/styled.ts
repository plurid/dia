import styled from 'styled-components';



export const StyledGallery: any = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 -4rem;
`;


export const StyledViewContainer: any = styled.div`
    overflow: hidden;
`;


export const StyledView: any = styled.div`
    display: grid;
    grid-template-columns: repeat(${(properties: any) => properties.numberOfSlides}, 1fr);
    overflow: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    pointer-events: none;
    padding: 1rem 0;


    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background: transparent;
    }
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
`;
