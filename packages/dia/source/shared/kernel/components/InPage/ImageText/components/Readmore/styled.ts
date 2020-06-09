import styled from 'styled-components';



export const StyledReadmore: any = styled.div`
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


export const StyledReadmoreText = styled.div`
    grid-area: text;
`;

export const StyledReadmoreImage = styled.div`
    grid-area: image;

    img {
        width: 100%;
        height: auto;
    }
`;
