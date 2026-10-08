//  This is Async Await function the most preferred one due to its clean structure and Readability

const getData = ( data )=>{
    return new Promise (( resolved , rejected)=>{
        console.log("Fetching data" , data);
        setTimeout(() =>{
            console.log(data);
            resolved("Success");
        } , 4000);
    });
};

async function callData(){
    await getData( 1 );
    await getData( 2 );
    await getData( 3 );
    await getData( 4 );
    await getData( 5 );
    await getData(6 );
};

callData();