import React, { useCallback } from 'react';
import S from './ExpenseFormStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ExpenseForm = React.memo(({charge, amount, handleCharge, edit, handleAmount, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <S.FormWrapper>
                <S.ChargeWrapper>
                    <S.Label htmlFor='charge'>지출 항목</S.Label>
                    <S.CostInput 
                        type='text'
                        id='charge'
                        name='charge'
                        placeholder='예) 렌트비'
                        value={charge}
                        onChange={handleCharge}
                    />
                </S.ChargeWrapper>
                <S.AmountWrapper>
                    <S.Label htmlFor='amount'>비용</S.Label>
                    <S.CostInput
                        type='number'
                        id='amount'
                        name='amount'
                        placeholder='예) 100'
                        value={amount}
                        onChange={handleAmount}
                    />
                </S.AmountWrapper>
            </S.FormWrapper>
            <S.SubmitBtn type='submit'>
                {edit ? (
                    <>
                        <span>수정</span><FontAwesomeIcon icon={faPaperPlane} className='paperPlane'/>
                    </>
                ) : (
                    <>
                        <span>제출</span><FontAwesomeIcon icon={faPaperPlane} className='paperPlane'/>
                    </>
                )}
            </S.SubmitBtn>
        </form>
    );
})

export default ExpenseForm;