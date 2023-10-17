import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { removeCard } from '../../store/slice/productsSlice';

export default function AddedCards() {
    const products = useSelector((state) => state.product.list);
    const dispatch = useDispatch();
    return (
        <div className={style.cards}>
            {products.map((product) => (
                <div key={product.id} className={style.cardContainer}>
                    <div className={style.paragraphs}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <button className={style.removeButton} onClick={() => dispatch(removeCard(product.id))}>X</button>
                    </div>
                </div>
            ))}
        </div>
    );
}