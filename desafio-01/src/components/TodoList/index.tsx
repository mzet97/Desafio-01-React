import { ClipboardText } from 'phosphor-react';
import styles from './index.module.css';
import Todo from '../../models/todo';
import { TodoItem } from '../TodoItem';

interface TodolistProps{
  list: Todo[];
  handleTodoDone(item: Todo): void;
  handleTodoDelete(item: Todo): void;
}

export function TodoList({list, handleTodoDone, handleTodoDelete}: TodolistProps ) {
    return (
      <div>
        {list.length ? (
              list.map(todo => {
                return (
                  <TodoItem key={todo.id} item={todo} handleTodoDone={handleTodoDone} handleTodoDelete={handleTodoDelete} />
                )
              })
              ) : (
        <div className={styles.box}>
          <ClipboardText size={80} />
          <h1 className={styles.text}>
          Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer
          </h1>
        </div>
      )}
      </div>
      
    );
  }