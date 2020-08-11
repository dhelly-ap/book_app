import React from 'react';
import Book from '../Book/Book';
import EditForm from '../EditForm/EditForm';

import { data } from '../../mock';

import './Form.css';
import Modal from 'react-modal';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            modalIsEdit: false,
            dataState: localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')) : data,
            dataEdit: {},
        };
    }

    componentDidMount() {
        if(!localStorage.getItem('myData') ){
            localStorage.setItem('myData', JSON.stringify(data));
        }
    }

    componentDidUpdate(prevState) {
        if(prevState.dataState !== this.state.dataState) {
            localStorage.setItem('myData', JSON.stringify(this.state.dataState));
        }
    }


    render() {
        return(
            <div className={'form-wrap'}>
                <h1 className={'form-title'}>My Book App</h1>
                <div className={'sort'}>
                    <span>Сортировать по:</span>
                    <span className={'sort-author'}>Автор</span>
                    <span className={'sort-year'}>Год публикации</span>
                </div>
                <div className={'form-books'}>
                    {this.state.dataState.map(item =>
                        <Book
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            authors={item.authors}
                            pagesNum={item.pagesNum}
                            publisher={item.publisher}
                            yearPub={item.yearPub}
                            yearSell={item.yearSell}
                            ISBN={item.ISBN}
                            handleOpen={this.openModalEdit}
                            handleDelete={this.handleDelete}
                        />
                    )}
                </div>
                <div className={'button-add'} onClick={this.openModalAdd}><span>Добавить книгу</span></div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className='modal'
                >
                    {this.state.modalIsEdit && <EditForm {...this.state.dataEdit} />}
                    {!this.state.modalIsEdit && <EditForm />}
                    <EditForm />
                </Modal>
            </div>
        );
    };

    openModalAdd = () =>{
        this.setState({modalIsOpen: true});
        this.setState({ modalIsEdit: false });

    };

    openModalEdit = (id) =>{
        const state = this.state.dataState;
        const data = state.filter(item => item.id === id);
        this.setState({ dataEdit: data[0] });
        this.setState({ modalIsEdit: true });
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleDelete = (key) => {
        const state = this.state.dataState;
        const newState = state.filter(item => item.id !== key)
        this.setState({ dataState: newState });
    }
}