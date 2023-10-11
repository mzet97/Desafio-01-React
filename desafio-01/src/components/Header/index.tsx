import styles from './index.module.css';

import rocketLogo from '../../assets/rocket.svg';
import todoLogo from '../../assets/todo.svg';

export function Header() {
    return (
      <header className={styles.header}>
        <img src={rocketLogo} alt="Logotipo do rocket" />
        <img src={todoLogo} alt="Logotipo do todoApp" />
      </header>
    );
  }