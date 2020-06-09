import styled from 'styled-components';



export const StyledSlide: any = styled.div`
    display: grid;
    grid-template-columns: repeat(${(properties: any) => properties.columns}, 1fr);
    grid-gap: 2rem;
    width: 100vw;
    scroll-snap-align: start;
`;
