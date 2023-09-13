import ItemCard from "./ItemCard";

const ItemList = ({items}) => {
    return <div>
        <div>
            <span>
                {items.map((item)=>{
                    return <ItemCard itemData={item.card.info} key={item.card.info.id}/>
                })}
            </span>

        </div>
    </div>
}

export default ItemList;