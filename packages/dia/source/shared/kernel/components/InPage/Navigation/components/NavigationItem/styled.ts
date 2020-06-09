import styled from 'styled-components';



export const StyledNavigationItem: any = styled.div`
    position: relative;
    margin: 0.5rem 0;
`;


export const StyledNavigationText: any = styled.div`
    position: absolute;
    right: 3rem;
    top: -50%;
    width: 200px;
    text-align: center;
    padding: 0.5rem;

    color: ${({ theme}: any) => theme.light};
    background: ${({ theme}: any) => theme.night};

    ::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -1rem;
        transform: translateY(-50%);
        width: 0;
        height: 0;

        border-top: 0.7rem solid transparent;
        border-bottom: 0.7rem solid transparent;

        border-left: 1rem solid ${({ theme}: any) => theme.night};
    }
`;
