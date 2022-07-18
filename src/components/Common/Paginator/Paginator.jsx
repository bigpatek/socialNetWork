import React, {useState, useEffect}  from 'react';
import styles from './Paginator.module.css';

let Paginator = ({ currentPage, onPageChanged, pagesSize, totalItemsCount}) => {

    let pages = [];
    let pagesCount = Math.ceil(totalItemsCount / pagesSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 5;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;



    return <div className={styles.pages}>
        {portionNumber > 1 &&
            <button onClick={ ()=>{setPortionNumber(portionNumber - 1)} }>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(e => {
                return <span    onClick={ () => {onPageChanged(e)} }
                                className={currentPage === e && styles.activePage}>
                            {e}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={ ()=>{setPortionNumber(portionNumber + 1)} }>NEXT</button>}


    </div>

}

export default Paginator