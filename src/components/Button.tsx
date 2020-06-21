import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { defaultTheme } from '../utils';

const Button = styled.button`
    color: white;
    border-color: ${defaultTheme.primaryColor};
    border-radius: 3px;
    box-sizing: border-box;
    padding: 1rem;
    font-size: 1rem;
    min-width: 100px;
    margin-right: 1rem;
    outline: none;
    cursor: pointer;
    transition: background-color 0.2s linear;

    &:hover {
        background-color: ${defaultTheme.primaryHoverColor};
        box-shadow: 0 3px 2px rgba(0,0,0,0.08);
    }
`;

const BUTTON_MODIFIERS = {
    small: () => `
        padding: 0.5rem;
        font-size: ${defaultTheme.typeScale.helperText}
    `,
    large: () => `
        padding: 1.5rem;
        font-size: ${defaultTheme.typeScale.header5}
    `
}

export const PrimaryButton = styled(Button)<{modifiers?: string[]}>`
    background: ${defaultTheme.primaryColor};
    border: none;

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background: transparent;
    color: ${defaultTheme.primaryColor};

    &:hover {
        box-shadow: none;
        border-color: ${defaultTheme.primaryHoverColor};
        background-color: transparent;
    }
`;

export const TertiaryButton = styled(Button)`
    background: transparent;
    color: ${defaultTheme.primaryColor};
    border: none;

    &:hover {
        background-color: transparent;
        color: ${defaultTheme.primaryHoverColor};
    }
`;
