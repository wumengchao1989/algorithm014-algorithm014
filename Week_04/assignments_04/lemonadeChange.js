var lemonadeChange = function(bills) {
  let myBill={
      "5":0,
      "10":0,
  };
  for(let i=0;i<bills.length;i++){
      if(bills[i]===5)myBill['5']++;
      if(bills[i]===10){
          myBill['5']--;
          myBill['10']++;
          if(myBill['5']<0)return false;
      }
      if(bills[i]===20){
          myBill['5']--;
          if(myBill['10']===0){
              myBill['5']-=2;
          }else{
              myBill['10']--;
          }
          if(myBill['5']<0||myBill['10']<0)return false;
      }
  }
  return true;
};