import { FC, PropsWithChildren, ReactNode, useState } from 'react'
import cn from 'classnames'
import styles from './Tooltip.module.scss'

type DirectionType = 'left' | 'top' | 'right' | 'bottom'

const Tooltip: FC<PropsWithChildren<{delay?: number, direction: DirectionType, content: ReactNode | string}>> = ({content, direction, delay, children}) => {
    let timeout: NodeJS.Timeout | undefined 
    const [active, setActive] = useState(false);
  
    const showTip = () => {
      timeout = setTimeout(() => {
        setActive(true);
      }, delay || 400);
    };
  
    const hideTip = () => {
      clearInterval(timeout);
      setActive(false);
    };
	return (
		<div className={styles.wrapper} onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (<div className={cn(styles.tooltip, styles[direction])}>
                {content}
            </div>)}
        </div>
	)
}

export default Tooltip
