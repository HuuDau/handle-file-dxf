import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import len from '../assets/len.png'
import xuong from '../assets/xuong.png'
import Avatar from 'antd/lib/avatar/avatar';
import css from './css.module.scss'
import { Flex } from 'antd';
const columnsTable = [
    {
        title: '#',
        key: 'index',
        width: 50,
        fixed: 'left',
        align: 'center',
        render: (text, record, index) => <span className="font-medium">{index + 1}</span>,
    },
    {
        title: 'Name 5544',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        width: 130,
        sorter: (a, b) => a.name.length - b.name.length,
        defaultSortOrder: 'descend',
        sortDirections: ['descend', 'ascend'],
        sortIcon: ({ sortOrder }) => {

            if (sortOrder === 'descend') {
                return <img src={xuong} style={{ width: 12, height: 12.25 }} />;
            }
            if (sortOrder === 'ascend') {
                return <img src={len} style={{ width: 12, height: 12.25 }} />;
            }
            return null; // Return null if you don't want to display any icon for unsorted state
        },
        render: (text, record) => {
            // const defaultSort = 
            return <span className={'bold-600 ml-3'}>{record?.name}</span>
        }
    },
    {
        title: 'group',
        dataIndex: 'group',
        key: 'group',
        fixed: 'left',
        width: 130,
        sorter: (a, b) => a.group - b.group,
        defaultSortOrder: 'descend',
        sortDirections: ['descend', 'ascend'],
        sortIcon: ({ sortOrder }) => {

            if (sortOrder === 'descend') {
                return <img src={xuong} style={{ width: 12, height: 12.25 }} />;
            }
            if (sortOrder === 'ascend') {
                return <img src={len} style={{ width: 12, height: 12.25 }} />;
            }
            return null; // Return null if you don't want to display any icon for unsorted state
        },
        render: (text, record) => (
            <span className={'bold-600 ml-3'}>{record?.group}</span>
        ),
    },
    {
        title: 'Unit',
        dataIndex: 'unit',
        key: 'unit',
        fixed: 'left',
        width: 130,
        sorter: (a, b) => a.unit - b.unit,
        defaultSortOrder: 'descend',
        sortDirections: ['descend', 'ascend'],
        sortIcon: ({ sortOrder }) => {

            if (sortOrder === 'descend') {
                return <img src={xuong} style={{ width: 12, height: 12.25 }} />;
            }
            if (sortOrder === 'ascend') {
                return <img src={len} style={{ width: 12, height: 12.25 }} />;
            }
            return null; // Return null if you don't want to display any icon for unsorted state
        },
        className: css.custom,
        render: (text, record) => (
            <span className={'bold-600 ml-3'}>{record?.unit}</span>
        ),
    },
    // ...commonColumn,
]
export default columnsTable




