import styled from 'styled-components';



export const StyledInput: any = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${(properties: any) => {
        if (properties.type === 'textarea') {
            return '2rem auto 2rem';
        }

        return '2rem 2rem 2rem';
    }};

    input {
        background-color: ${({ theme }: any) => theme.dawn};
        color: ${({ theme }: any) => theme.night};
        width: 100%;
        padding: 0.6rem 1rem;
        font-size: 1.1rem;
        border: none;
        outline: 1px solid ${({ theme }: any) => theme.dawn};

        :focus {
            outline: 1px solid ${({ theme }: any) => theme.night};
        }
    }

    textarea {
        background-color: ${({ theme }: any) => theme.dawn};
        color: ${({ theme }: any) => theme.night};
        outline: 1px solid ${({ theme }: any) => theme.dawn};
        font-size: 1.1rem;
        line-height: 1.5rem;
        border: none;
        padding: 0.6rem 1rem;
        width: 100%;
        resize: vertical;
        min-height: 200px;
        max-height: 600px;
        font-family: ${({ theme }: any) => theme.fonts.body};

        :focus {
            outline: 1px solid ${({ theme }: any) => theme.night};
        }
    }
`;
