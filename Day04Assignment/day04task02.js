function copy()
{
    const ele = document.getElementsByClassName("input");
     console.log(ele[0]);
     let a = ele[0].value;
     console.log(a);
     ele[1].value=a;

}