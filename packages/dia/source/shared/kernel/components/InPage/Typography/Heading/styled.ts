import styled from 'styled-components';



export const StyledHeading = styled.div`
    h1 {
        text-transform: uppercase;
        margin-top: 0;
        font-size: 4rem;
    }

    h2 {
        text-transform: none;
        margin-top: 0;
        font-size: 3rem;
    }

    @media (max-width: 900px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
        }
    }
`;
