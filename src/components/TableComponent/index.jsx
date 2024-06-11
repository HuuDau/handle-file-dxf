/* eslint-disable indent */
import { Pagination, Select, Table } from 'antd'
import css from './css.module.scss'
import { useMemo, useRef } from 'react'
import { get } from 'lodash'

const { Option } = Select


function TableComponent({
  show = true,
  handleOnchangePagination,
  paginationCustom,
  pageSizeOptions = [10, 20, 50, 100],
  columns,
  showResults = true,
  ...rest
}) {
  const refTable = useRef(null)

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <div className={css.borderPrevNext}>
          前へ
        </div>
      )
    }
    if (type === 'next') {
      return (
        <div className={css.borderNext}>
          次へ
        </div>
      )
    }
    return originalElement
  }

  const renderCalculateItemRender = () => {
    const c = paginationCustom?.limit * paginationCustom?.page
    return c > paginationCustom?.totalDocs ? paginationCustom?.totalDocs : c
  }

  const widthTable = () => {
    let width = 1200
    columns.forEach(ele => {
      width += ele.width
    })
    return width < 900 ? 850 : width
  }
  const showDetailText = useMemo(() => {
    if (!showResults) {
      return (
        // <div className="wrap-pagination">
        //   <div className="wrap-show-rows-false">
        <div className={css.wrapPagination}>
          <div className={css.wrapShowRowsFalse}>
            <Pagination
              showSizeChanger={false}
              current={paginationCustom?.page}
              pageSize={paginationCustom?.limit}
              total={paginationCustom?.totalDocs}
              onChange={(page) => {
                if (refTable.current) {
                  const childrenTableBody = get(
                    refTable.current,
                    'children[0]children[0]children[0]children[0]children[1]',
                  )
                  if (childrenTableBody) {
                    // childrenTableBody?.scrollTop = 0
                  }
                }
                handleOnchangePagination(page, paginationCustom?.limit)
              }}
              itemRender={itemRender}
            />
            {/* <div className={css.paginationRows}>
              <div>Rows</div>
              <Select
                defaultValue={paginationCustom?.limit}
                style={{ width: 70 }}
                onChange={value => handleOnchangePagination(1, value)}>
                {pageSizeOptions.map((el, index) => (
                  <Option key={index + 500} value={el}>
                    {el}
                  </Option>
                ))}
              </Select>
            </div> */}
          </div>
        </div>
      )
    } else {
      return (
        <div className={css.wrapPagination}>

          {/* 
          <div>
            Showing {renderCalculateItemRender()} of {paginationCustom?.totalDocs} results
          </div> */}
          <div className={css.wrapShowRows}>


            <Pagination
              showSizeChanger={false}
              current={paginationCustom?.page}
              pageSize={paginationCustom?.limit}
              total={paginationCustom?.totalDocs}
              onChange={(page) => {
                if (refTable.current) {
                  const childrenTableBody = get(
                    refTable.current,
                    'children[0]children[0]children[0]children[0]children[1]',
                  )
                  if (childrenTableBody) {
                    // childrenTableBody.scrollTop = 0
                  }
                }
                handleOnchangePagination(page, paginationCustom?.limit)
              }}
              itemRender={itemRender}
            />
            {/* <div className={css.paginationRows}>
              <div className={'paginationRows'}>

              <div className={'textWeight'}>Rows</div>
              <div className={css.textWeight}>Rows</div>

              <Select
                defaultValue={paginationCustom?.limit}
                style={{ width: 70 }}
                onChange={value => handleOnchangePagination(1, value)}>
                {pageSizeOptions.map((el, index) => (
                  <Option key={'sddd' + index} value={el}>
                    {el}
                  </Option>
                ))}
              </Select>
            </div> */}
          </div>
        </div>
      )
    }
  }, [
    handleOnchangePagination,
    pageSizeOptions,
    paginationCustom?.limit,
    paginationCustom?.page,
    paginationCustom?.totalDocs,
    renderCalculateItemRender,
    showResults,
  ])

  return (
    // <div className="wrap-table">
    <div className={css.wrapTable}>

      <Table
        ref={refTable}
        rowKey={r => r.key || r._id}
        // className="table-pulse"
        className={css.tablePulse}

        pagination={false}
        // scroll={show ? { x: widthTable(), y: '68vh' } : { y: '68vh' }}
        columns={columns}
        {...rest}
      />

      {showDetailText}
    </div>
  )
}

export default TableComponent