import { useMemo, useRef, useEffect, useCallback, useState } from 'react'

import { Input } from 'antd';
import HeaderTab from 'components/tab-option'
import css from './css.module.scss'

import { tinh } from 'util'
// import About from 'components/about'
import TableComponent from 'components/TableComponent'
import columnsTable from 'components/commons'

const { TextArea } = Input;

const getKeyByValue = (object, value) => {
    return Object.entries(object).find(([key, val]) => val === value)?.[0];
}

function Comment({ data, tabName, listTabs }) {
    const [uiTab, setUiTab] = useState(getKeyByValue(tabName, listTabs[0]))

    const selectTab = useMemo(() => uiTab === getKeyByValue(tabName, listTabs[0]), [uiTab])

    const [visibleForm, setVisibleForm] = useState(false)
    const [condition, setCondition] = useState(null)
    const [loading, setLoading] = useState(false)
    const [dataList, setDataList] = useState([])
    const [visiblePin, setVisiblePin] = useState(false)
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalDocs: 2,
    })

    const handleSearch = useCallback(
        (value) => {
            const condition = {}
            if (value.textSearch) {
                condition.name = value.textSearch?.trim()
            }
            if (value.category) {
                condition.categories = [value.category]
            }
            if (value.sort) {
                condition.sort = value.sort
            }
            if (value.page) {
                condition.page = value.page
            }
            return getList({
                page: pagination?.page,
                limit: pagination?.limit,
                ...condition,
            })
        },
        [pagination?.limit, pagination?.page],
    )

    const handleChange = useCallback(
        (paginationParam, filtersParam, sorterParam) => {
            console.log(sorterParam?.order, 'sorterParam?.order')
            if (sorterParam?.order) {
                handleSearch({
                    sort: sorterParam.order === 'ascend' ? sorterParam.columnKey : `-${sorterParam.columnKey}`,
                    page: 1,
                })
            } else {
                handleSearch({})
            }
        },
        [handleSearch],
    )
    const getList = (qs) => {
        setLoading(true)
        setCondition(qs)
        console.log(qs, 'qs')
        // return apiGetListTokens(qs)
        //     .then((res) => {
        //         if (res) {
        //             const { data } = res
        //             setDataList(data?.docs)
        //             setPagination({
        //                 page: data?.page,
        //                 limit: data?.limit,
        //                 totalDocs: data?.totalDocs,
        //             })
        //         }
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }

    useEffect(() => {
        getList({ page: pagination?.page, limit: pagination?.limit })
        setDataList([{
            name: "dadu",
            group: 'group1',
            unit: 'anit 2'
        }, {
            name: "hasdu",
            group: 'group1',
            unit: 'bnit 2'
        }, {
            name: "bau",
            group: 'group1',
            unit: 'Unit 2'
        }, {
            name: "cacsdsdu",
            group: 'group1',
            unit: 'cnit34'
        }, {
            name: "kasdsddsdsu",
            group: 'group1',
            unit: 'vnit 2'
        }, {
            name: "dau",
            group: 'group1',
            unit: 'Unit 2'
        }, {
            name: "eausd sdsds",
            group: 'group1',
            unit: 'kmnit 2'
        }, {
            name: "daue sd",
            group: 'group1',
            unit: 'fnit 2'
        }, {
            name: "dau weqw4evdsf dfvew4r4 rerge4",
            group: 'group1',
            unit: 'hnit 2'
        },
        {
            name: "dau sdsw",
            group: 'group1',
            unit: 'lnit 2'
        }])
    }, [])

    return <div className={css.containerComment}>
        <HeaderTab tabName={tabName} listTabs={listTabs} setUiTab={setUiTab} />
        {selectTab ? <>
            <div className={css.wrapListChat}>
                <div className={css.listComment}>

                    {data.map((ele, index) => {
                        return <div key={index} className={css.rowComment}>
                            <span>{data?.avatar ? <img src={data.avartar} alt="avatar" /> : 'Avatar'}</span>
                            <span>{data?.name ? data?.name : '田中裕子'}   :</span>
                            <span>{data?.comment ? data?.comment : '新規プロジェクトを作成しました。よろしくお願いいたします。'}</span>
                        </div>
                    })}
                </div>
            </div>
            <TextArea rows={4} placeholder="コメントを入力してください" />
        </> : <TableComponent
            showSorterTooltip={false}
            onChange={handleChange}
            dataSource={dataList}
            columns={[...columnsTable]}
            paginationCustom={pagination}
            handleOnchangePagination={(page, pageSize) =>
                getList({
                    ...condition,
                    page: page,
                    limit: pageSize,
                })
            }
        />
        }

    </div>
}

export default Comment