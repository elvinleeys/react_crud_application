import styled from "styled-components";

const S = {};

S.Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #e6e6e6;
    &:hover {
        scale: 1.01;
        transition: all 0.2s ease-in-out;
    }
`

S.ItemWrapper = styled.div`
    display: flex;
    align-items: center;
`

S.Charge = styled.span`
    display: inline-block;
    width: 51rem;
`

S.Amount = styled.span`
    display: inline-block;
    width: 40rem;
    color: gray;
`

S.EditItemBtn = styled.button`
    width: 3rem;
    border: none;
    background-color: white;
    color: #63A667;
    cursor: pointer;
    font-size: 1rem;
`

S.DeleteItemBtn = styled.button`
    width: 3rem;
    border: none;
    background-color: white;
    color: #C55150;
    cursor: pointer;
    font-size: 1rem;
`

export default S;