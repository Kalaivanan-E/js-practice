let gotoGoa = (success , failure)=>{
    let acc_bal = 2000;
    if(acc_bal >= 15000){
        success("Go and Enjoy in Goa");
    }else{
        failure("Go and Enjoy in PG");
    }
}

gotoGoa((msg)=>{console.log(msg)} , (err)=>{console.log(err)})