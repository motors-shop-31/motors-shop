import styled from "styled-components";

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48%;
        padding: 1rem 2rem;
        border: 1px solid var(--grey4);
        border-radius: 4px;
        input { display: none; }
        cursor: pointer;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
    }

    .option_selected {
        background-color: var(--brand1);
        border: none;
        color: var(--whiteFixed);
    }
`


