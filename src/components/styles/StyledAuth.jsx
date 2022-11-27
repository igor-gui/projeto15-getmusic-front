import styled from "styled-components";
import elGuitar from '../../assets/images/electric_guitar.jpg'

const StyledAuth = styled.main`
    background-image: url(${elGuitar});
    width: 100%;
    height: 844px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 74px;

    section {
        background-color: rgba(0,0,0, 0.65);
        padding: 10px;
        height: max-content;
        border-radius: 15px;
        box-sizing: border-box;
        padding-top: 30px;
    }

`

export default StyledAuth