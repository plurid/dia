import styled from 'styled-components';



export const StyledSelector: any = styled.div`
    display: grid;
    place-content: center;
    margin: 0 0.5rem;

    svg {
        height: 20px;
        width: 20px;
        cursor: pointer;

        fill: ${(properties: any) => {
            if (properties.selected) {
                return properties.theme.night;
            }

            return 'none';
        }};
        stroke: ${(properties: any) => properties.theme.night};
    }
`;
