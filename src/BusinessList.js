import Business from "./Business";


export default function BusinessList(props){
    let businessList = [];

    for (let i=0; i<10; i++){
        businessList.push(
        <Business
            image={props.image}
            name={props.name}
            address={props.address}
            city={props.city}
            state={props.state}
            zipcode={props.zipCode}
            category={props.category}
            rating={props.rating}
            reviewCount={props.reviewCount} />)
    }
    return(
        <>
            {businessList}
        </>
    );
}