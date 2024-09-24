import React from 'react';
import Chart, { Colors } from 'chart.js/auto';
import { Bar, Pie } from 'react-chartjs-2';
import S from './ExpenseChartStyle';

const ExpenseChart = React.memo(({ expenses }) => {

    Chart.register(Colors);

    // expenses 데이터가 없을 때 메시지를 표시
    if (!expenses || expenses.length === 0) {
        return (
            <>
                <h1>예산 사용 비율</h1>
                <S.NoDataContainer>
                    <p>현재 데이터가 없습니다.</p>
                </S.NoDataContainer>
            </>
        );
    }

    // 총 금액 구하기
    const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    // 각 항목의 백분율 계산
    const percentageData = expenses.map((expense) => ((expense.amount / totalAmount) * 100));
    console.log(percentageData)
    console.log(typeof percentageData)
    // 가장 높은 비율과 낮은 비율 구하기
    // toFixed 일정 고정 소수점 이하 숫자를 반올림하고 그 결과를 문자열로 반환
    // 가장 높은 비율과 낮은 비율 구하기
    const maxPercentage = Math.max(...percentageData);
    const minPercentage = Math.min(...percentageData);
    const maxIndex = percentageData.indexOf(maxPercentage);
    const minIndex = percentageData.indexOf(minPercentage);

    // 필요할 때만 소수점 고정
    const formattedPercentageData = percentageData.map((percentData) => percentData.toFixed(2));

    const pieData = {
        labels: expenses.map((expense) => expense.charge),
        datasets: [{
          label: '예산 사용 비율',
          data: formattedPercentageData,
          hoverOffset: 4
        }]
      };

    const pieOptions = {
        plugins: {
            colors: {
                forceOverride: true
            }
        }
    };
    
    const barData = {
        labels: expenses.map((expense) => expense.charge),
        datasets: [{
          axis: 'y',
          label: '예산 사용 금액',
          data: expenses.map((expense) => expense.amount),
          fill: false,
          borderWidth: 1
        }]
      };

    const barOptions = {
        indexAxis: 'y',
        plugins: {
            colors: {
                forceOverride: true
            }
        }
    };

    return (
        <>
            <h1>예산 사용 비율</h1>
            <S.PieChartContainer>
                <S.PieChartWrapper>
                    <Pie data={pieData} options={pieOptions} />
                </S.PieChartWrapper>
                <S.DescriptionContainer>
                    <p>
                        <S.HighPointText>가장 높은 비율</S.HighPointText>을 차지한 것은 <S.HighPointText>{expenses[maxIndex].charge}</S.HighPointText> 입니다. <S.HighPointText>({formattedPercentageData[maxIndex]}%)</S.HighPointText>
                    </p>
                    <p>
                        <S.LowPointText>가장 낮은 비율</S.LowPointText>을 차지한 것은 <S.LowPointText>{expenses[minIndex].charge}</S.LowPointText> 입니다. <S.LowPointText>({formattedPercentageData[minIndex]}%)</S.LowPointText>
                    </p>
                </S.DescriptionContainer>
            </S.PieChartContainer>
            <S.BarChartContainer>
                <S.BarChartWrapper>
                    <Bar data={barData} options={barOptions} />
                </S.BarChartWrapper>
                <S.DescriptionContainer>
                    <p>
                        <S.HighPointText>가장 높은 비율</S.HighPointText>을 차지한 <S.HighPointText>{expenses[maxIndex].charge}</S.HighPointText>는 <S.HighPointText>{expenses[maxIndex].amount}원</S.HighPointText> 입니다.
                    </p>
                    <p>
                        <S.LowPointText>가장 낮은 비율</S.LowPointText>을 차지한 <S.LowPointText>{expenses[minIndex].charge}</S.LowPointText>는 <S.LowPointText>{expenses[minIndex].amount}원</S.LowPointText> 입니다. 
                    </p>
                </S.DescriptionContainer>
            </S.BarChartContainer>
        </>
    );
})

export default ExpenseChart;