import styled from "styled-components";
import blogBg from "../../assets/blog-bg.svg"

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #1A1A1A;


    section {
        width: 100vw;
        height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url(${blogBg});

        .name {
            width: 480px;
            height: 105px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 8px solid black;
            text-transform: uppercase;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 38px;
            letter-spacing: 0.43538em;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

`