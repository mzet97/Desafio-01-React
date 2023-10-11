import { PlusCircle } from 'phosphor-react'
import styles from './index.module.css'
import { ChangeEvent, useState } from 'react';

interface SidebarProps{
    submit(text: string): void;
}

export function Sidebar({submit}:SidebarProps) {
    const [newTodo, setNewTodo] = useState('');

    const onSubmit = () => {
        submit(newTodo)
        setNewTodo('')
    }

    const handleNewTodoChange = (event: ChangeEvent<HTMLInputElement>) =>{
        event.target.setCustomValidity('');
        setNewTodo(event.target.value);
    }

    return (
        <div className={styles.body}>
            <div className={styles.box}>
                <input value={newTodo} onChange={handleNewTodoChange} className={styles.input}/>
                <button onClick={onSubmit} className={styles.button}>
                    Criar
                    <PlusCircle size={30} />
                </button>
            </div>
        </div>
     
    );
  }