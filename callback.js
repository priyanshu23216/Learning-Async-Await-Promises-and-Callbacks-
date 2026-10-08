
    //  With Callbacks
    const getData3 = ( data , getNextdata)=>{
        console.log( "getting data" , data);
        setTimeout( ( )=>{
            console.log( data );
            if( getNextdata ){
            getNextdata( );
        }
        },4000);
    };
    const getData4 = ( data , getNextdata)=>{
        console.log( "getting data" , data);
        setTimeout( ( )=>{
            console.log( data );
            if( getNextdata ){
            getNextdata( );
        }
        },4000);
    };
    const getData5 = ( data , getNextdata)=>{
        console.log( "getting data" , data);
        setTimeout( ( )=>{
            console.log( data );
            if( getNextdata ){
            getNextdata( );
        }
        },4000);
    };
    const getData6 = ( data , getNextdata)=>{
        console.log( "getting data" , data);
        setTimeout( ( )=>{
            console.log( data );
            if( getNextdata ){
            getNextdata( );
        }
        },4000);
    };
    const getData7 = ( data , getNextdata)=>{
        console.log( "getting data" , data);
        setTimeout( ( )=>{
            console.log( data );
            if( getNextdata ){
            getNextdata( );
        }
        },4000);
    };
    const getData8 = ( data , getNextdata)=>{
        console.log( "getting data" , data);
        setTimeout( ( )=>{
            console.log( data );
            if( getNextdata ){
            getNextdata( );
        }
        },4000);
    };

    getData3( 1 , () =>{
        getData4( 2 , ( )=>{
            getData5( 3  , ( )=>{
                getData6( 4 , ( ) =>{
                    getData7( 5 , ( )=>{
                        getData8( 6 )
                    });
                }); 
            });
        });
    });


