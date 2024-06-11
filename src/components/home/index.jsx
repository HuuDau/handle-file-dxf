import style from './style.module.scss'
import { tinh } from 'util'
// import About from 'components/about'
import TableComponent from 'components/TableComponent'
import columnsTable from 'components/commons'
import Comment from 'components/comment'
import { useMemo, useRef, useEffect, useCallback, useState } from 'react'
import HeaderPhase from 'components/content-phase'
import PopUpAddUser from 'components/add-user-popup'
import DetailPhase from 'components/detail-phase'
import { Button } from 'antd'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchDataComment } from 'features/dataSlice'
function HomePage() {



    const dispatch = useDispatch();

    const { data: commentData, loading: loadComment, error: errComment } = useSelector((state) => state.commentData);
    const { data, loading, error } = useSelector((state) => state.datakeke);


    useEffect(() => {
        dispatch(fetchData());
        dispatch(fetchDataComment());
    }, [dispatch]);
    console.log(data, 'data from redux')
    console.log(commentData, 'data from comment api')

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <div className={style.home}>
        <Button >CLick</Button>
    </div>
}
export default HomePage
