import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookmarksContext } from '../../context/AppContext';
import MyButton from '../UI/button/MyButton';
import styles from '../NewsItem/NewsItem.module.css';
import icon from '../../static/images/icons/notebook.png';
import remic from 'C:/Users/dmitr/my-app/src/rem.png';

const NewsItem = ({ item }) => {
    const navigator = useNavigate();
    const { bookmarks } = useContext(BookmarksContext);

    const customCss = {
        button: {
            border: 'none',
            width: '32px',
            height: '32px',
            marginLeft: 'auto',
            padding: '0'
        },
        icon: {
            width: '100%',
            height: '100%'
        }
    }

    const addBookmark = (e) => {
        e.stopPropagation();

        if (bookmarks.indexOf(item.id) === -1) {
            bookmarks.push(item.id);
        }
    };

    const removeBookmark = (e) => {
        e.stopPropagation();


        delete bookmarks(item.id);
        console.log("Srobilo");


    }

    return ( <
        div className = { styles.card }
        onClick = {
            () => navigator(`/news/${item.id}`)
        } >
        <
        div className = { styles.cardHeader } >
        <
        span className = { styles.dateSpan } > { item.publishedAt.split('T')[0] } < /span> <
        img src = { item.imageUrl }
        className = { styles.skeleton }
        /> <
        span className = { styles.title } > { item.title } < /span> < /
        div > <
        div > { item.summary } < /div> <
        MyButton style = { customCss.button }
        onClick = { e => addBookmark(e) } >
        <
        img style = { customCss.icon }
        src = { icon }
        /> < /
        MyButton >

        <
        /div>
    )
}

export default NewsItem;