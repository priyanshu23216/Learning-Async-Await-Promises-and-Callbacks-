// using Promises without Async Await

const getData2 = ( data )=>{
    return new Promise (( resolved , rejected)=>{
        console.log("Fetching data" , data);
        setTimeout(() =>{
            console.log(data);
            resolved("Success");
        } , 4000);
    });
};

    getData2( 1 ).then( () =>{
    getData2( 2 ).then( ( ) =>{
    getData2( 3 ).then( ( ) =>{
    getData2( 4 ).then( ( ) =>{
    getData2( 5 ).then( ( ) =>{
    getData2( 6 )
    });
    });
    });
    });
    });