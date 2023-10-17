import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/slice/productsSlice';
import style from './style.module.css';

export default function Form() {
    const dispatch = useDispatch();

    const submit = (event) => {
        event.preventDefault();
        const { name, price } = event.target;
        const newProduct = {
            name: name.value,
            price: price.value,
        };
        dispatch(addProduct(newProduct));
        event.target.reset();
    }

    return (
        <div className={style.form}>
            <form onSubmit={submit}>
                <input className={style.input} type="text" placeholder='Название' name='name' />
                <input className={style.input} type="number" placeholder='Цена' name='price' />
                <button className={style.button} type="submit">Добавить</button>
            </form>
        </div>
    );
}