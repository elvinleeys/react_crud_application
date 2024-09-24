import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './ExpenseItemStyle';

const ExpenseItem = React.memo(({expense, handleDelete, handleEdit}) => {
    return (
        <S.Item>
            <S.ItemWrapper>
                <S.Charge>{expense.charge}</S.Charge>
                <S.Amount>{expense.amount}원</S.Amount>
            </S.ItemWrapper>
            <div>
                <S.EditItemBtn
                    onClick={() => handleEdit(expense.id)}
                >
                    <FontAwesomeIcon icon={faPen} className='editIcon' />
                </S.EditItemBtn>
                <S.DeleteItemBtn
                    onClick={() => handleDelete(expense.id)}
                >
                    <FontAwesomeIcon icon={faTrash} className='deleteIcon'/>
                </S.DeleteItemBtn>
            </div>
        </S.Item>
    );
})

export default ExpenseItem;