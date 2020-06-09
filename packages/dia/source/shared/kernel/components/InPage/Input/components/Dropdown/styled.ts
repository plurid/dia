import styled from 'styled-components';



export const StyledDropdown: any = styled.div`
    user-select: none;
    position: relative;
`;


export const StyledSelected: any = styled.div`
    background-color: ${({ theme }: any) => theme.dawn};
    display: grid;
    grid-template-columns: auto 2rem;
    align-items: center;
    padding: 0.6rem 1rem;
    font-size: 1.1rem;
    cursor: pointer;

    border: 1px solid ${(properties: any) => {
        if (properties.value !== '' || properties.showSelectables) {
            return properties.theme.night;
        }

        return properties.theme.dawn;
    }};
`;


export const StyledSelectedMark: any = styled.div`
    justify-self: right;
`;


export const StyledSelectables: any = styled.div`
    position: absolute;
    top: 3.3rem;
    left: 0;

    display: grid;
    grid-template-columns: 1fr;
    z-index: 999;
    width: 100%;

    background-color: ${({ theme }: any) => theme.dawn};
    border: 1px solid ${({ theme }: any) => theme.night};
`;


export const StyledSelectable: any = styled.div`
    padding: 0.6rem 1rem;
    font-size: 1.1rem;
    cursor: pointer;

    :hover {
        background-color: ${({ theme }: any) => theme.night};
        color: ${({ theme }: any) => theme.dawn};
    }
`;
