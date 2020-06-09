import styled from 'styled-components';



export const StyledStripe: any = styled.div`
    padding: 4rem;
    position: relative;
    min-height: 500px;
    overflow: hidden;

    display: ${(properties: any) => {
        if (properties.grid) {
            return 'grid';
        }

        return 'block';
    }};
    grid-template-columns: ${(properties: any) => {
        if (properties.grid) {
            return '1fr 1fr';
        }

        return 'initial';
    }};

    background-color: ${(properties: any) => {
        if (properties.backgrounded) {
            return properties.theme.dawn;
        }

        return 'initial';
    }};

    @media (max-width: 900px) {
        padding: 2rem;
        grid-template-columns: ${(properties: any) => {
            if (properties.grid) {
                return '1fr';
            }

            return 'initial';
        }};
    }
`;


export const StyledHeading: any = styled.div`
    width: ${(properties: any) => {
        if (properties.grid) {
            return '100%';
        }

        return '60%';
    }};

    @media (max-width: 900px) {
        width: 100%;
    }

    top: ${(properties: any) => {
        if (properties.absolute) {
            return '4rem';
        }

        return 'initial';
    }};
    left: ${(properties: any) => {
        if (properties.absolute) {
            return '4rem';
        }

        return 'initial';
    }};
    position: ${(properties: any) => {
        if (properties.absolute) {
            return 'absolute';
        }

        return 'initial';
    }};

    @media (max-width: 900px) {
        top: ${(properties: any) => {
            if (properties.absolute) {
                return '2rem';
            }

            return 'initial';
        }};
        left: ${(properties: any) => {
            if (properties.absolute) {
                return '2rem';
            }

            return 'initial';
        }};
    }
`;


export const StyledStripeImage: any = styled.div`
    display: grid;
    place-content: center;

    img {
        display: block;
        height: 100%;
        min-height: 200px;
        max-height: 300px;
        padding: 2rem 0;
    }
`;
