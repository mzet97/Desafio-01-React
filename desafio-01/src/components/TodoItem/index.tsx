import styles from './index.module.css';

import Todo from '../../models/todo';
import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';

interface TodoItem{
  item: Todo;
  handleTodoDone(item: Todo): void;
  handleTodoDelete(item: Todo): void;
}

export function TodoItem({item, handleTodoDone, handleTodoDelete}: TodoItem) {
  const [done, setDone] = useState(false);

  const onDone = () => {
    setDone(!done);
    handleTodoDone(item)
  }

  const onDelete = () => {
    handleTodoDelete(item)
  }

    return (
      <div className={styles.box}>
          <button onClick={onDone} className={styles.button}>
            {done ? <CheckCircle className={styles.done} size={32} />: <Circle className={styles.nodone} size={32} />}
            </button>
          {done ? <h1 className={styles.textdone}>{item.text}</h1> :<h1 className={styles.text}>{item.text}</h1>}
          <button onClick={onDelete} className={styles.delete}><Trash size={32} /></button>
      </div>
    );
  }