import { createGlobalStyle } from "styled-components";
import "./reset.css";

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        gap: 30px;
        background-color: white;
        width: 100vw;
        height: 100vw;

         @media (max-width: 769px) {
                .App > header {
                    height: 80px;
                    padding: 0px 1.5rem 0px 1rem;
                }
            }

        header {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 3.125rem 0px 4.375rem;

            background-color: var(--grey-0);

            form {
                width: 25rem;
                height: 3.125rem;
                position: relative;
                border-radius: 5px;
                background-color: white;
                border: 2px solid var(--grey-20);
            }

            input {
                width: 80%;
                height: 100%;
                padding-left: 0.938rem;
                
                text-align: start;
            }

            input:focus {
                outline: pink;
            }

            @media (max-width: 770px) {

                input {
                    width: 100%;
                    min-width: 12.625rem;
                    font-size: 0.800rem;
                }

                button {
                    width: 2.438rem;
                    height: 1.25rem;
                    position: absolute;
                }

                img {
                    width: 6.25rem;
                    margin-right: 10px;
                }
            }

            input::placeholder {
                color: var(--grey-50);
            }

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 10%;
                height: 1.75rem;
                position: absolute;
                right: 5%;
                top: 20%;

                background-color: var(--Color-primary);
                border-radius: 5px;
                color: white;
                cursor: pointer;
            }

            button:hover {
                background-color: var(--Color-primary-50);
            }
        }

        main {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            padding: 0px 2.5rem 0px 1.875rem;
        }

        @media (max-width: 769px) {
         
            main {
                flex-wrap: wrap;

                .ContainerProduct {
                    width: 100%;
                    height: 22rem;
                    
                    ul {
                        overflow-x: scroll;
                        flex-wrap: nowrap;
                    }
                }
            }
        }
    }
`;
export default GlobalStyle;
