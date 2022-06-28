import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ image = '' }) => {
    const { product } = useContext( ProductContext );
    let imgToShow: string;
    if ( image ) {
        imgToShow = image;
    } else if ( product.image ) {
        imgToShow = product.image;
    } else {
        imgToShow = noImage;
    }
    return (
        <img className={ styles.productImg } src={ imgToShow } alt="Coffee mug" />
    );
}