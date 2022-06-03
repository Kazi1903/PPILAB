import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import styles from '../filters/Filters.module.css';

const NewsFilter = ({filter, setFilter}) => {
    var customStyle = {
        input: {
            width: '50%'
        }
    };

    return (
        <div className={styles.filtersWrapper}>
            <MyInput 
                style={customStyle.input}
                placeholder='Поиск...'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                style={customStyle.select}
                value={filter.queryField}
                defaultValue="Варианты поиска"
                onChange={choise => setFilter({...filter, queryField: choise})}
                options={[
                    { value: 'title', name: 'По названию'},
                    { value: 'summary', name: 'По описанию'}
                ]}
            />
            <MySelect 
                style={customStyle.select}
                value={filter.sort}
                onChange={choise => setFilter({...filter, sort: choise})}
                defaultValue="Сортировка"
                options={[
                    { value: 'publishedAt', name: 'По дате'},
                    { value: '', name: 'Без сортировки'},
                ]}
            />
            
      </div>
    );
};

export default NewsFilter;