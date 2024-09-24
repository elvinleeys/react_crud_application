import logo from './logo.svg';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';
import ExpenseChart from './components/ExpenseChart';

function App() {
  // 변수 ===> 랜더링 ===> 초기화
  // useRef ===> ref.current ===> 랜더링 ==> 초기화X 
  // state ===> 페이지 새로고침 => 초기화
  const [ expenses, setExpenses] = useState([
    {id: 1, charge: "렌트비", amount: 1000},
    {id: 2, charge: "교통비", amount: 2000},
    {id: 3, charge: "식비", amount: 3000},
  ]);

  const [edit, setEdit] = useState(false);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [id, setId] = useState('');

  const [itemCreationMsg, setItemCreationMsg] = useState(false);
  const [itemEditMsg, setItemEditMsg] = useState(false);
  const [itemDeleteMsg, setItemDeleteMsg] = useState(false);

  const handleEdit = (id) => {
    const expense = expenses.find(item => item.id === id);
    const {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    // 숫자만을 값으로 받기 위해
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(charge !== "" && amount > 0) {
      if(edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        })

        setExpenses(newExpenses);
        setEdit(false);
        setItemEditMsg(true);
        setTimeout(() => {
          setItemEditMsg(false);
        }, 3000);
      } else {
        const newExpense = {
          id: crypto.randomUUID(),
          // js에서 key와 value의 이름이 동일할 시 하나만 쓸 수 있음
          charge,
          amount
        }
        // shallow copy
        setExpenses([...expenses, newExpense]);
        setItemCreationMsg(true);
        setTimeout(() => {
          setItemCreationMsg(false);
        }, 3000);
      }
      setCharge('');
      setAmount(0);
    } else {
      console.log('error');
    }
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
    setItemDeleteMsg(true);
    setTimeout(() => {
      setItemDeleteMsg(false);
    }, 3000);
  }

  const handleAllDelete = (id) => {
    const newExpenses = [];
    setExpenses(newExpenses);
    setItemDeleteMsg(true);
    setTimeout(() => {
      setItemDeleteMsg(false);
    }, 3000);
  }

  return (
    <main>
      {itemCreationMsg ? <div className='itemSucessMsg'>아이템이 생성되었습니다.</div> : ''}
      {itemEditMsg ? <div className='itemSucessMsg'>아이템이 수정되었습니다.</div> : ''}
      {itemDeleteMsg ? <div className='itemDeleteMsg'>아이템이 삭제되었습니다.</div> : ''}
      <h1>예산 계산기</h1>

      <div className="expenseFormContainer">
        <ExpenseForm 
          edit={edit}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          charge={charge} 
          amount={amount}
          handleSubmit={handleSubmit}
        />
      </div>

      <div className='expenseListContainer'>
        <ExpenseList
          handleDelete={handleDelete} 
          handleAllDelete={handleAllDelete}
          initialExpenses={expenses}
          handleEdit={handleEdit}
        />
      </div>

      <div className='totalCostContainer'>
        <p>
          총지출: 
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
            원</span>
        </p>
      </div>
      <ExpenseChart expenses={expenses} />
    </main>
  );
}

export default App;
