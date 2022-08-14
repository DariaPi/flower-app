function FilterButtons ({filterFlwrsBtn}) {
    return (
        <div className="btns">
            <button className="btn" onClick={() => filterFlwrsBtn ("calla")}>calla</button>
            <button className="btn" onClick={() => filterFlwrsBtn ("daisy")}>daisy</button>
            <button className="btn" onClick={() => filterFlwrsBtn ("roses")}>roses</button>
            <button className="btn" onClick={() => filterFlwrsBtn ("tulip")}>tulip</button>
            <button className="btn" onClick={() => filterFlwrsBtn ("lily")}>lily</button>


        </div>
    )
}

export default FilterButtons;