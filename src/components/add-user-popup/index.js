import css from './css.module.scss'
import React, { useState } from 'react';
import { Button, Modal, Input, Select, DatePicker } from 'antd';
function PopUpAddUser({ data, onConfirm, onSearch, open = false, setOpen }) {
    console.log(data)
    return <div className={css.antModal}>
        <Modal
            title="メンバーアサイン"
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={892}
            className={css.customModal}
        >
            <div className={css.content}>
                <div className={css.head}>
                    <Select
                        showSearch
                        placeholder="メンバーID・お名前"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: 'Not Identified',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            {
                                value: '3',
                                label: 'Communicated',
                            },
                            {
                                value: '4',
                                label: 'Identified',
                            },
                            {
                                value: '5',
                                label: 'Resolved',
                            },
                            {
                                value: '6',
                                label: 'Cancelled',
                            },
                        ]}
                    />
                    <div className={css.btnWrap}>

                    </div>
                </div>

                <div className={css.tableUser}>
                    <div className={`${css.title} ${css.row}`}>
                        <div className={`${css.item} ${css.id}`}>メンバーID</div>
                        <div className={`${css.item} ${css.name}`}>お名前</div>
                        <div className={`${css.item} ${css.role}`}>ロール</div>
                        <div className={`${css.item} ${css.status}`}>ステータス</div>
                        <div className={`${css.item} ${css.date}`}>有効日開始</div>
                        <div className={`${css.item} ${css.date}`}>完了日</div>
                        <div className={`${css.item} ${css.action}`}>アクション</div>
                    </div>
                    <div className={`${css.row}`}>
                        <div className={`${css.item} ${css.id}`}>メンバーID</div>
                        <div className={`${css.item} ${css.name}`}>お名前</div>
                        <div className={`${css.item} ${css.role}`}>
                            <Select
                                showSearch
                                style={{ width: 138 }}
                                placeholder="Role Name"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Not Identified',
                                    },
                                    {
                                        value: '2',
                                        label: 'Closed',
                                    },
                                    {
                                        value: '3',
                                        label: 'Communicated',
                                    },
                                    {
                                        value: '4',
                                        label: 'Identified',
                                    },
                                    {
                                        value: '5',
                                        label: 'Resolved',
                                    },
                                    {
                                        value: '6',
                                        label: 'Cancelled',
                                    },
                                ]}
                            />
                        </div>
                        <div className={`${css.item} ${css.status}`}>有効　</div>
                        <div className={`${css.item} ${css.date}`}><DatePicker style={{ width: 126 }} /></div>
                        <div className={`${css.item} ${css.date}`}>
                            <DatePicker style={{ width: 126 }} />
                        </div>
                        <div className={`${css.item} ${css.action}`}>X</div>
                    </div>

                </div>
            </div>
        </Modal>
    </div>
}
export default PopUpAddUser