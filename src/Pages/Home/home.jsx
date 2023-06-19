import React from 'react'
import style from './home-style.module.css'
import frangoEspeto from './images/frango.jpg'
import {useState, useEffect} from 'react'


export default function home ({Number}) {
    

    const [initialCart, setCart] = useState(1);

    const addCart = () => {
        setCart(initialCart + 1);

        return  (Number(initialCart))
    };


    return(
        <>
        <div className={style.container}>
            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}

            <div className={style.card}> {/*Card*/}
                <h2 className={style.titleCard}>frango no espeto</h2>
                <img src={frangoEspeto} alt="espeto de frango" className={style.image}/>
                <p className={style.description}>R$30,00</p>
                <div className={style.groupButton}>
                    <button className={style.buttons}>Comprar</button>
                    <button className={style.buttons} onClick={addCart}>+ carrinho</button>
                </div>
            </div>{/*Card*/}
        </div>
        </>
    )
}