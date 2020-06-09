import styled from 'styled-components';



export const StyledImageText: any = styled.div`
    position: relative;
    padding: 4rem;
    overflow: hidden;

    background-color: ${(properties: any) => {
        if (properties.backgrounded) {
            return properties.theme.dawn;
        }

        return 'initial';
    }};

    @media (max-width: 900px) {
        padding: 2rem;
    }
`;
