import css from './css.module.scss'
import { useState } from 'react';
const getKeyByValue = (object, value) => {
    return Object.entries(object).find(([key, val]) => val === value)?.[0];
}

function HeaderTab({ tabName, listTabs, setUiTab }) {
    const [tab, setTab] = useState(getKeyByValue(tabName, listTabs[0]))

    const handleState = (item) => {
        setTab(getKeyByValue(tabName, item))
        setUiTab(getKeyByValue(tabName, item))
    }

    return <div className={css.headerComment}>
        <div className={css.listTab}>
            {listTabs.map((item, index) => {
                return <div className={`${tab === getKeyByValue(tabName, item) ? css.active : css.item} ${tab === getKeyByValue(tabName, listTabs[1]) && item !== tabName.comment ? css.historyTab : ''}`} key={index} onClick={() => handleState(item)}>{item}</div>
            })}
        </div>
    </div>
}
export default HeaderTab