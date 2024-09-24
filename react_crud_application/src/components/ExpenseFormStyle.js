import styled from "styled-components";

const S = {};

S.FormWrapper = styled.div `
    display: flex;

`

S.ChargeWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
`

S.Label = styled.label`
    color: #E9B872;
`

S.AmountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
`

S.CostInput = styled.input`
    padding: 1rem 0;
    outline: none;
    border: none;
    border-bottom: 1px solid #DBD9D8;
`

S.SubmitBtn = styled.button`
    width: 6rem;
    height: 2.5rem;
    background-color: #8EA959;
    color: white;
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