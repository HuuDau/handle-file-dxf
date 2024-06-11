import { useState } from 'react'
import css from './css.module.scss'
import user from 'components/assets/user.png'
import add from 'components/assets/add.png'
import { Button } from 'antd'

function HeaderPhase({ textTitleOnly = true, title = '見積', onCreate, onAddUser, isDetail = false }) {
    const [arrAvatarList, setArrAvatar] = useState([1, 2, 3, 4])

    return <div className={css.contentPhase} style={{ background: `${isDetail ? '#EBEFFF' : '#DFEDFF'}` }}>
        <div className={css.titleContent}>
            <span>{title}</span>
            <div className={css.rightTitle}>
                {textTitleOnly ? <span className={css.styleText}>詳細確認</span>
                    : <div className={css.actionDiv}>
                        <Button className={css.btn} onClick={onCreate} >作成</Button>
                        <Button className={css.btn} onClick={onAddUser} >メンバー追加</Button>
                    </div>}
            </div>
        </div>
        <div className={css.bodyPhaseContent}>
            <div className={css.leftBody}>
                <div className={css.element}>
                    <div className={css.contentLeft}>
                        <span>ステータス</span>
                    </div>

                    <div className={css.contentLeft}>
                        <span>作成日</span>
                    </div>
                </div>
                <div className={css.element}>
                    <div className={css.contentLeft}>
                        <span>進行中</span>
                    </div>

                    <div className={css.contentLeft}>
                        <span>2024/04/20</span>
                    </div>
                </div>

            </div>
            <div className={`${css.rightBody} ${css.leftBody}`}>
                <div className={css.element}>
                    <div className={css.contentLeft}>
                        <span>メンバー</span>
                    </div>

                    <div className={css.contentLeft}>
                        <span>更新日</span>
                    </div>
                </div>
                <div className={css.element}>
                    <div className={css.contentLeft}>
                        {arrAvatarList.map((ele) => {
                            return <img src={user} key={ele} className={css.imageAvt} />
                        })}
                        <img src={add} onClick={onAddUser} className={css.imageAvt} />
                    </div>

                    <div className={css.contentLeft}>
                        <span>2024/04/20</span>
                    </div>
                </div>
            </div>
        </div>
    </div >
}
export default HeaderPhase