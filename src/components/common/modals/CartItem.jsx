import trash from './../../../assets/trash.svg';
import stock from './../../../assets/stock.svg';
import styles from '../../../style';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increase, decrease } from '../../../redux/cartSlice';

const CartItem = ({ _id, title, author_id, coverImageLink, isbn, price_id }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(_id));
    };

    const cartItem = useSelector((state) =>
        state.cart.cartItems.find((item) => item._id === _id)
    );

    const qty = cartItem ? cartItem.qty : 1;

    return (
        <div className="cart-item relative py-6  after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-grey">
            {/* image */}
            <img className=' cart-image h-32 md:h-60 xl:flex xl:w-[180px] xl:h-[240px] rounded-xl' src={coverImageLink} alt={title} />

            {/* info */}
            <div className=' cart-data flex items-start justify-between'>
                <div>
                    <h4 className={`${styles.subtitleMedium} mb-2`}>{title}</h4>
                    <p className={`${styles.bodyRegular} mb-4`}>Автор: {author_id.map(author => `${author.name_ukr} ${author.surname_ukr}`).join(', ')}</p>
                    <p className={`${styles.bodyRegular} mb-4 p-2 bg-[#e4e5e5] rounded-xl`}>Код товару: 1234</p>
                    <p className='flex gap-2 items-center'>
                        <img src={stock} alt="in stock" />
                        <span className={`${styles.bodyRegular} text-green`}>В наявності</span>
                    </p>
                </div>

                <button onClick={handleRemoveFromCart}>
                    <img src={trash} alt="remove item" />
                </button>
            </div>

            {/* price */}
            <div className='cart-price flex gap-8 justify-between'>

                <div className={`${styles.flexCenter}`}>
                    <button onClick={() => {
                        if (qty === 1) {
                            dispatch(removeFromCart(_id));
                        } else {
                            dispatch(decrease({ _id }));
                        }
                    }} className='flex items-center justify-center w-12 h-12'>-</button>
                    <div className='flex items-center justify-center w-8 h-8 md:w-12 md:h-12 border-solid border-[1px] border-grey rounded-lg'>{qty}</div>
                    <button onClick={() => {
                        dispatch(increase({ _id }));
                    }} className='flex items-center justify-center w-12 h-12'>+</button>
                </div>

                <h4 className={`flex items-center justify-center text-[20px] ${styles.subtitleMedium}`}>{price_id.original_price} грн</h4>
            </div>

        </div>

    );
};

export default CartItem;
