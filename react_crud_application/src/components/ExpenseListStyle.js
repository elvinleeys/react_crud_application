import styled from "styled-components";

const S = {};

S.List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

S.AllDeleteBtn = styled.button`
    width: 8rem;
    height: 2.5rem;
    color: white;
    background-color: #8EA959;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
    transition: all ease-in-out 300ms;
    & span {
        margin-right: 0.5rem;
    }
    &:hover {
        box-shadow: 0px 37px 20px -15px rgba(0,0,0,0.2);
        transform: translate(0px, -5px);
    }
`

export default S;