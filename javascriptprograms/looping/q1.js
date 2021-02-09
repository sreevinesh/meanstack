var num=2;
while(num<=9)
{
    var i=1;
    var sum=0;
    var sum1=0;
    while(i<=num){
        sum=sum*10+num;
        sum1=sum1+sum;
        i++;
    }
    console.log(sum1);
    num++;
}