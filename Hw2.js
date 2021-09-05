function calculate(min,max){
    //請用你的程式補完這個函式區塊
       //方法一
       var sum = (min + max) * (max - min + 1)/2;  //數學公式
       return(console.log(sum));

       //方法二：while用法
    //    var i = min;
       var sum=0;
      while(min <= max){
          console.log("數字："+min);
       
          sum = sum + min ;
                   
          min++;
      }
       
      console.log("數字總和為："+sum);
      console.log("=======================================");

      //方法三：for用法
      var sum = 0;
      for(var i = min;i <= max;i++){
          console.log("數字："+i);

           sum = sum + i ;
          
          
      }

      console.log("數字總和為："+sum);
      console.log("=======================================");
      
}
calculate(1,3); //你的程式要能夠計算 1+2+3 ,最後在console印出6
calculate(4,6); //你的程式要能夠計算 4+5+6+7+8 ,最後在console印出30

// 要求二

// 在這裡寫你的程式，建立適合的物件放在arg變數中，讓以下程式碼能正常運作

var args = {
    op:'-',
    n1:5,
    n2:10,
}

let result;
        if(args.op=="+"){
            result=args.n1+args.n2;
        }else if(args.op=="-"){
            result=args.n1-args.n2;
        }else{
            result="Not Supported";
        }
        console.log(result);
