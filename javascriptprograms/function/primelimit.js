var flag = 1;
function prime(lowerlimit, upperlimit) {
    
    for (let i = lowerlimit; i <= upperlimit; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 0;
                break;
            }

        }
        if (flag == 1) {
            console.log(i);
        }
        else if(flag==0)
        {
            flag=1;
        }
    }
    
}
prime(3,10);
