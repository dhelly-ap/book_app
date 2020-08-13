import React from 'react';
import Book from '../Book/Book';
import EditForm from '../EditForm/EditForm';
import Modal from 'react-modal';
import { data } from '../../mock';

import './App.css';

export default class App extends React.Component{
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
                    <span className={'sort-title'} onClick={this.handleTitleClick}>Заголовок</span>
                    <span className={'sort-year'} onClick={this.handleYearClick}>Год публикации</span>
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
                    ariaHideApp={false}
                >
                    {this.state.modalIsEdit && (
                        <EditForm
                            {...this.state.dataEdit}
                            onFormChange={this.handleChangeInput}
                            onClose={this.closeModal}
                        />
                        )}
                    {!this.state.modalIsEdit && (
                        <EditForm
                            onFormAdd={this.handleAdd}
                            newID={Math.max(...this.state.dataState.map(item => item.id)) + 1}
                            onClose={this.closeModal}
                        />
                        )}
                </Modal>
            </div>
        );
    };

    handleChangeInput = (formData) => {
        const state = this.state.dataState;
        const newState = state.map(item => {
            if(item.id === formData.id) {
                return formData;
            }
            return item;
        });
        this.setState({ dataState: newState });
    };

    handleAdd = (formData) => {
        const data = this.state.dataState.slice();
        data.push(formData);
        this.setState({ dataState: data });
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
    };

    handleDelete = (key) => {
        const state = this.state.dataState;
        const newState = state.filter(item => item.id !== key);
        this.setState({ dataState: newState });
    };

    handleYearClick = () => {
        const data = this.state.dataState.slice();
        data.sort((a, b) => {
            return a.yearPub - b.yearPub;
        });
        this.setState({ dataState: data });
    };

    handleTitleClick = () => {
        const data = this.state.dataState.slice();
        data.sort((a, b) => {
            const nameA=a.title.toLowerCase();
            const nameB=b.title.toLowerCase()
            return nameA > nameB ? 1 : -1;
        })

        this.setState({ dataState: data });
    };
}