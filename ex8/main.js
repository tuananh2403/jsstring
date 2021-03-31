function totalNumber(n){
        if (n == 0 ){
            return 0;
        }
       return n + totalNumber(n-1);
    }
    console.log(totalNumber(n));