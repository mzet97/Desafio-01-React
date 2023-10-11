import styles from './index.module.css';

interface StatusBarProps{
  total: number;
  dones: number;
}

export function StatusBar(props: StatusBarProps) {
    return (
      <div className={styles.box}>
        <div className={styles.line} >
            <label className={styles.label}>Tarefas Criadas</label>
            <div  className={styles.status}>
                <label>{props.total}</label>
            </div>
            
        </div>
        <div className={styles.line}>
            <label className={styles.label}>Concluído</label>
            <div  className={styles.status}>
                <label>{props.dones}</label>
            </div>
        </div>
      </div>
    );
  }