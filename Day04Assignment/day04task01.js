function changeimg(z)
{
    var newpic;
    if(z==1)
    {
    newpic = "https://cdn.onlinewebfonts.com/svg/img_543432.png";
    }
    if(z==2)
    {
     newpic ="https://cdn.lynda.com/course/574716/574716-637304022431026059-16x9.jpg";
    }
    if(z==3)
    {
        newpic="https://bbvaopen4u.com/sites/default/files/styles/big-image/public/img/new/bbva-open4u-javascript.jpg?itok=OhLH07dn";
    }
    document.getElementById("image1").src=newpic;
}