import styled from 'styled-components';



export const StyledButton: any = styled.div`
    button {
        background-color: ${(properties: any) => properties.theme.night};
        color: ${(properties: any) => properties.theme.light};
        font-family: ${(properties: any) => properties.theme.fonts.headings};
        outline: 1px solid ${(properties: any) => properties.theme.night};
        width: ${(properties: any) => {
            if (properties.constrained) {
                return '200px';
            }

            return '100%';
        }};

        height: 40px;
        font-size: 1rem;
        border: none;
        cursor: pointer;
        user-select: none;

        :hover,
        :focus {
            background-color: ${(properties: any) => properties.theme.dusk};
            outline: 1px solid ${(properties: any) => properties.theme.dusk};
        }
    }
`;
