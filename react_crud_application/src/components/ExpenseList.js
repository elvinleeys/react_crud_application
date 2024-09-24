import React from 'react';
import ExpenseItem from './ExpenseItem';
import S from './ExpenseListStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ExpenseList = React.memo(({ handleDelete, initialExpenses, handleEdit, handleAllDelete }) => {
    return (
        <>
            <S.List>
                {
                    initialExpenses.map(expense => {
                        return <ExpenseItem 
                                    key={expense.id} 
                                    expense={expense}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                    })
                }
            </S.List>
            <S.AllDeleteBtn onClick={() => handleAllDelete()}>
                <span>목록 지우기</span><FontAwesomeIcon icon={faTrash} className='all-delete'/>    
            </S.AllDeleteBtn>   
        </>
    );
})

export default ExpenseList;