import styled from 'styled-components';



export const StyledNumbered: any = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 4rem;
    padding: 2rem 0;

    grid-template-areas: ${(properties: any) => {
        if (properties.imageLayout === 'right') {
            return `'text image'`;
        }

        return `'image text'`;
    }};

    @media (max-width: 900px) {
        grid-gap: 2rem;
        grid-template-columns: 1fr;
        grid-template-areas: 'image'
                             'text';
    }
`;


export const StyledNumberedText: any = styled.div`
    grid-area: text;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 4rem auto;
`;


export const StyledNumberedImage: any = styled.div`
    grid-area: image;

    img {
        width: 100%;
        height: auto;
    }
`;


export const StyledNumber: any = styled.div`
    width: 4rem;
    height: 4rem;
    display: grid;
    place-content: center;
    font-size: 2rem;
    font-weight: bold;
    position: relative;

    background: -webkit-linear-gradient(45deg, ${(properties: any) => properties.theme.gradientNight} 0%, ${(properties: any) => properties.theme.gradientLight} 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;


export const StyledNumberContour: any = styled.div`
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 0;
    left: 0;

    img {
        height: 4rem;
        width: 4rem;
        user-select: none;
        pointer-events: none;
    }
`;
