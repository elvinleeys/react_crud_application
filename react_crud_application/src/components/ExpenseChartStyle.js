import styled from "styled-components";

const S = {};

S.PieChartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 98%; 
    background-color: white; 
    padding: 1rem;
`

S.PieChartWrapper = styled.div`
    width: 30rem;
    height: 30rem;
`

S.BarChartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 98%; 
    background-color: white; 
    padding: 1rem;
`

S.BarChartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40rem;
    height: 25rem;
`

S.DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
`

S.HighPointText = styled.span`
    font-size: 2rem;
    color: #C55150;
    font-weight: bold;
`

S.LowPointText = styled.span`
    font-size: 2rem;
    color: #4582EC;
    font-weight: bold;
`

S.NoDataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 98%; 
    background-color: white; 
    padding: 1rem;
`

export default S;