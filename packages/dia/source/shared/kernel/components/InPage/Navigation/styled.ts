import styled from 'styled-components';



export const StyledNavigation: any = styled.div`
    position: fixed;
    right: 4rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9998;

    @media (max-width: 900px) {
        right: 2rem;
    }
`;


export const StyledNavigationItems: any = styled.div`
    display: flex;
    flex-direction: column;
`;
