import { useEffect, useState } from 'react';
import '../style.scss';

const ProductListApi = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setProducts(json);
            })
    },[])
    return (
        <>
        
        </>
    )
}

export default ProductListApi