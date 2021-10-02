function table(){
    for(var i=1;i<=9;i++)
    {
        var list=[]
        for(var j=1;j<=9;j++)
            list.push(i*j)
        console.log(list.join(' '))
    }
}

table()