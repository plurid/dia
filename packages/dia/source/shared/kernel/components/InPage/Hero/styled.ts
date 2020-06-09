import styled from 'styled-components';



export const StyledHero: any = styled.div`
    background-color: ${(properties: any) => {
        if (properties.simple) {
            return;
        }

        return properties.theme.dawn;
    }};

    height: ${(properties: any) => {
        if (properties.simple) {
            return 'auto';
        }

        return '90vh';
    }};

    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
    padding-bottom: 0;
    position: relative;

    @media (max-width: 900px) {
        height: auto;
        grid-template-columns: 1fr;
        padding: 2rem;
        padding-bottom: 0;
    }
`;


export const StyledHeroText: any = styled.div`
    min-height: ${(properties: any) => {
        if (properties.simple) {
            return '300px';
        }

        return '360px';
    }};

    display: flex;
    align-items: center;

    @media (max-width: 900px) {
        min-height: ${(properties: any) => {
            if (properties.simple) {
                return 'auto';
            }

            return '200px';
        }};

        margin-top: 4rem;
    }
`;


export const StyledHeroImage = styled.div`
    img {
        width: 100%;
        height: auto;
        transform: translateY(50px);
    }
`;
