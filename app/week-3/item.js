export default function Item(Prop){
    return (
        <div>
            <ul>
                <li>{Prop.name}</li>
                <li>Buy {Prop.quantity} in {Prop.category}</li>
            </ul>
        </div>
    );
}