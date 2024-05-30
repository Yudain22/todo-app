import { useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

const mockTodo=[
  {id:0, isDone:false, content:"Reset 공부하기", createdDate: new Date().getTime(),},
  {id:1, isDone:false, content:"Spring 공부하기", createdDate: new Date().getTime(),},
  {id:2, isDone:false, content:"빅데이터 공부하기", createdDate: new Date().getTime(),}
]

function App() {
  const idRef = useRef(3);
  const [todo, setTodo]=useState([mockTodo]);

  const onUpdate = (targetId) =>{
    setTodo (
      todo.map((it)=>
        it.id === targetId? {...it,isDone : !it.isDone} :it)
    );
  };

  const onCreate = (content) => {
    const newItem = {
      id:idRef.current,
      content,
      isDone: false,
      createdDate : new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it)=> it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
