function table(array){
    for(var i=1;i<=9;i++)
    {
        var list=[]
        for(var j=1;j<=9;j++)
            list.push(i*j)
        array.push(list.join(' '))
    }
}
var t=[]
table(t)
console.log(t)