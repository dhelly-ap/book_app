import React from "react";
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
        ISBN
    } = props;

    return(
        <div className={'edit-wrap'}>
            <h2 className={'edit-title'}>{id ? 'Редактировать книгу' : 'Добавить книгу' }</h2>
            <div>{title}</div>
        </div>
    );
}