import styled from "styled-components"

export const CardProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 4px;

    gap: 12px;

    img {
        width: 56px;
        height: 56px;
        border-radius: 46px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        letter-spacing: 0.05em;

        span:first-child {
            font-weight: bolder;
            font-size:14px;
            color: #1B1D54;
        }

        span{
            color: #717178;
            font-weight: bold;
            font-size:12px;
            font-weight: 300;
        }

        span:nth-child(3) {
            font-weight: bolder;
            font-size:14px;
            color: #6C6C6E;
            font-weight: 500;
        }


        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            gap: 8px;

            & .dot {
                width: 8px;
                height: 8px;
                background-color: #8DF8B8;
                border-radius: 8px
            }

            > span {
                all: unset;
                font-size: 9px;
                font-weight: 200;
                color: #C6C6D3;
                letter-spacing: -0.5px
            }
        }
    }


`

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    gap: 12px;

    img {
        width: 56px;
        height: 56px;
        border-radius: 46px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        span:first-child {
            font-weight: bold;
            font-size:14px;
            color: #1B1D54;
        }

        span{
            color: #717178
        }

        button {
            all: unset;            
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            padding: 8px 6px;

            color: #2E3190;
            font-weight: bold;   

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 120px;
            
            img {
                margin-top: -5px;
                transform: rotate(27deg);
                height:16px;
                width: 16px;
                margin-right: 4px;
                
            }
        }
    }

`