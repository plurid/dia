import styled from 'styled-components';



export const StyledCheckmark: any = styled.div`
    display: grid;
    grid-template-columns: 2rem auto;
`;


export const StyledCheckbox: any = styled.div`
    position: relative;
    justify-self: left;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
`;


export const StyledCheck: any = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    z-index: 9999;
`;
