import { createGlobalStyle } from "styled-components";

export const ButtonStyle = createGlobalStyle`


   .big {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    padding: 28px 24px;
    border-radius: 4px;

    color: var(--whiteFixed);
   }

   .medium {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    padding: 19px 20px;
    
    padding: 1rem;

    color: var(--whiteFixed);
   }

   .grey1 {
        background-color: var(--grey0);
        border: 1.5px solid var(--grey0);

        &:hover {
            background-color: var(--grey1);
            border: 1.5px solid var(--grey1);
        }
   }

   .negative {
        background-color: var(--grey6);
        border: 1.5px solid var(--grey6);

        color: var(--grey2);

        &:hover {
            background-color: var(--grey5);
            border: 1.5px solid var(--grey5);
        }
   }

   .disable {
        background-color: var(--grey5);
        border: 1.5px solid var(--grey5);
   }

   .brand1 {
        background-color: var(--brand1);
        border: 1.5px solid var(--brand1);

        &:hover {
            background-color: var(--brand2);
            border: 1.5px solid var(--brand2);
        }
   }

   .BrandOpacity {
        background-color: var(--brand4);
        border: 1.5px solid var(--brand4);

        color: var(--brand1);
   }

   .Light {
        background-color: var(--grey10);
        border: 1.5px solid var(--grey10);

        color: var(--grey1);
   }

   .outlineLight {
        background-color: transparent;
        border: 1.5px solid var(--grey10);

        &:hover {
            background-color: var(--grey10);
            border: 1.5px solid var(--grey10);

            color: var(--grey1);
        }
   }



   .Outline1 {
        background-color: transparent;
        border: 1.5px solid var(--grey0);

        color: var(--grey0);
   }

   .big45 {
        background-color: var(--grey1);
        border: 1.5px solid var(--grey1);

        color: var(--grey10);

        &:hover {
            background-color: var(--grey1);
            border: 1.5px solid var(--grey1);
        }
   }

   .Outline2 {
        background-color: transparent;
        border: 1.5px solid var(--grey4);

        color: var(--grey0);

        &:hover {
            background-color: var(--grey1);
            border: 1.5px solid var(--grey1);

            color: var(--whiteFixed);
        }
   }

   .outlineBrand1 {
        background-color: transparent;
        border: 1.5px solid var(--brand1);

        color: var(--brand1);

        &:hover {
            background-color: var(--brand4);
        }
   }

   .link {
        background-color: transparent;
        border: 1.5px solid transparent;

        color: var(--grey0);

        &:hover {
            background-color: var(--grey8);
            border: 1.5px solid var(--grey8);
        }
   }

   .alert {
        background-color: var(--alert3);
        border: 1.5px solid var(--alert3);

        color: var(--alert1);

        &:hover {
            background-color: var(--alert2);
            border: 1.5px solid var(--alert2);
        }
   }

   .sucess {
        background-color: var(--sucess3);
        border: 1.5px solid var(--sucess3);

        color: var(--sucess1);

        &:hover {
            background-color: var(--sucess2);
            border: 1.5px solid var(--sucess2);
        }
   }
   
   .brandDisable {
        background-color: var(--brand3);
        border: 1.5px solid var(--brand3);
   }
`;
