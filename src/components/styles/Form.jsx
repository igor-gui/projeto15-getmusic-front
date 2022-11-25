import styled from "styled-components";

const Form = styled.form`
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 9px;
    div{
        display: flex;
        position: relative;
        ion-icon{
        z-index: 10;
        width: 22px;
        color: black;
        position: absolute;
        left: 340px;
        top: 10px;
    }
    }
`
export default Form