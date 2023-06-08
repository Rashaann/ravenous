export default function Business(props){
    return(
        <>
            <img src={props.image} width={250} height={250} />
            
            <div>
                <div>{props.name}</div>
                <div>{props.address}</div>
                <div>{props.city}</div>
                <div>{props.state} {props.zipcode}</div>
            </div>
            <div>
                <div>{props.category}</div>
                <div>{props.rating} stars</div>
                <div>{props.reviewCount} reviews</div>
            </div>
        </>
    );
}