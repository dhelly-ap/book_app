import React, { useState } from "react";
import AuthorField from './AuthorField';
import isValidIsbn from '../../validation';

import './EditForm.css';

export default function EditForm(props) {
    const {
        id,
        title,
        img,
        authors,
        pagesNum,
        publisher,
        yearPub,
        yearSell,
        ISBN,
        onFormChange,
        onFormAdd,
        onClose,
        newID,
    } = props;

    const [alert, setAlert] = useState(false);

    const [alertISBN, setAlertISBN] = useState(false);

    const [newAuthors, setNewAuthors] = useState(authors || [{authorID: 1}])

    const [formData, setFormData] = useState(
        {
            id: newID ? newID : id,
            title,
            img,
            pagesNum,
            publisher,
            yearPub,
            yearSell,
            ISBN
        });

    const handleChange = e => {
        e.persist();
        setFormData(prevState => ({...prevState, [e.target.id]: e.target.value }));
    };

    const handleAuthorChange = (e, id) => {
        e.persist();
        setNewAuthors(prevAuthors => prevAuthors.map(item => {
            if(item.authorID === id) {
                return {...item, [e.target.id]: e.target.value}
            }
            return item;
        }));
    }

    const addAuthors = () => {
        const newAuthorID = newAuthors.length ? Math.max(...newAuthors.map(item => item.authorID)) + 1 : 1;
        setNewAuthors(prevAuthors => [...prevAuthors, {authorID: newAuthorID}])
    }

    const deleteAuthor = id => {
        setNewAuthors(prevAuthors => {
            const filtered = prevAuthors.filter(item => item.authorID !== id);
            return filtered || [];
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!formData.title || !formData.pagesNum || !newAuthors.length
            || newAuthors.some(author => !author.authorName || !author.authorSurname)){
            setAlert(true);
            return
        } else { setAlert(false) }

        if(!isValidIsbn(formData.ISBN) && formData.ISBN) {
            setAlertISBN(true);
            return
        } else { setAlert(false) }

        newID ? onFormAdd({...formData, authors: newAuthors}) : onFormChange({...formData, authors: newAuthors});
        onClose();
    }

    const handleChangeImg = e => {
        console.log('test')
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            setFormData(prevState => ({...prevState, 'img': reader.result }));
        };
    }

    return(
        <div className={'edit-wrap'}>
            <h2 className={'edit-title'}>{id ? 'Редактировать книгу' : 'Добавить книгу' }</h2>
            <form className={'edit-form'} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Заголовок</label>
                    <input
                        type="text"
                        id="title"
                        onChange={handleChange}
                        value={formData.title}
                        maxLength={30}
                    />
                </div>
                {newAuthors.map(item  => (
                    <AuthorField
                        key={item.authorID}
                        author={item}
                        handleChange={handleAuthorChange}
                        deleteAuthor={deleteAuthor}
                    />
                    ))}
                <div className={'button'} onClick={addAuthors}>Добавить автора</div>
                <div>
                    <label htmlFor="pagesNum">Количество страниц</label>
                    <input
                        type="number"
                        id="pagesNum"
                        onChange={handleChange}
                        value={formData.pagesNum}
                        min={0}
                        max={10000}
                    />
                </div>
                <div>
                    <label htmlFor="publisher">Название издательства</label>
                    <input
                        type="text"
                        id="publisher"
                        onChange={handleChange}
                        value={formData.publisher}
                        maxLength={30}
                    />
                </div>
                <div>
                    <label htmlFor="yearPub">Год публикации</label>
                    <input
                        type="number"
                        id="yearPub"
                        onChange={handleChange}
                        value={formData.yearPub}
                        min={1800}
                    />
                </div>
                <div>
                    <label htmlFor="yearSell">Дата выхода в тираж</label>
                    <input
                        type="date"
                        id="yearSell"
                        onChange={handleChange}
                        value={formData.yearSell}
                        min="1800-01-01"
                    />
                </div>
                <div>
                    <label htmlFor="ISBN">ISBN</label>
                    <input
                        type="text"
                        id="ISBN"
                        onChange={handleChange}
                        value={formData.ISBN}
                    />
                </div>
                <div>
                    <input
                        type="file"
                        id="img"
                        className={'input-file'}
                        accept=".png, .jpg, .jpeg"
                        onChange={handleChangeImg}
                    />
                    <label htmlFor="img" className={'button'}>Загрузить картинку</label>
                </div>
                {alert && <div className={'alert'}>Пожалуйста, заполните все необходимые параметры</div>}
                {alertISBN && <div className={'alert'}>Пожалуйста, проверьте правильность ISBN</div>}
                <button type="submit" className={'button'}>Сохранить</button>
            </form>
        </div>
    );
}
