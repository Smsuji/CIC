for(let i=1;i<=7;i++){
    if(i<=5){
        switch(i){
            case 1:
                console.log(i,"Monday");
                break;
            case 2:
                console.log(i,"Tuesday");
                break;
            case 3:
                console.log(i,"Wednesday");
                break;
            case 4:
                console.log(i,"Thursday");
                break;
            case 5:
                console.log(i,"Friday");
                break;
        }

        
    } else {
        console.log(i,"Weekends");
    }
}