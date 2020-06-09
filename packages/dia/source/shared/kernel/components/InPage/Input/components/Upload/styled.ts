import styled from 'styled-components';



export const StyledUpload: any = styled.div`
    position: relative;

    input {
        position: absolute;
        z-index: -1;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
        padding: 0;
    }
`;


export const StyledUploadLabel: any = styled.label`
    background-color: ${({ theme }: any) => theme.dawn};
    border: 1px solid ${(properties: any) => {
        if (properties.value === '') {
            return 'transparent';
        }

        return properties.theme.night;
    }};

    display: grid;
    cursor: pointer;
    grid-template-columns: auto 3rem;
    align-items: center;
    font-size: 1.1rem;
`;


export const StyledName: any = styled.span`
    display: block;
    padding: 0.6rem 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    background-color: ${(properties: any) => {
        if (properties.value !== '') {
            return properties.theme.dawn;
        }

        return properties.theme.night;
    }};
    color: ${(properties: any) => {
        if (properties.value !== '') {
            return properties.theme.night;
        }

        return properties.theme.dawn;
    }};
`;


export const StyledSign: any = styled.span`
    display: block;
    padding: 0.6rem 1rem;

    border: 1px solid ${(properties: any) => {
        if (properties.value === '') {
            return properties.theme.night;
        }

        return properties.theme.dawn;
    }};
`;
