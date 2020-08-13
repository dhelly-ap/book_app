import React from "react";

export default function AuthorField(props){
    const {
        author,
        handleChange,
        deleteAuthor,
    } = props;
    return (
        <div>
            <div>
                <label htmlFor="authorName">Имя автора</label>
                <input
                    type="text"
                    id="authorName"
                    onChange={event => handleChange(event, author.authorID)}
                    value={author.authorName}
                    maxLength={20}
                />
            </div>
            <div>
                <label htmlFor="authorSurname">Фамилия автора</label>
                <input
                    type="text"
                    id="authorSurname"
                    onChange={event => handleChange(event, author.authorID)}
                    value={author && author.authorSurname}
                    maxLength={20}
                />
            </div>
            <div className={'button'} onClick={() => deleteAuthor(author.authorID)}>Удалить автора</div>
        </div>
    )
};