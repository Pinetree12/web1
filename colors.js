var Links ={
    setColor:function (color){
    //    var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < alist.length){
    //         console.log(alist[i]);
    //         alist[i].style.color =color;
    //         i = i+1;}
        $('a').css('color',color);
    }
}
var Title ={
    setBackgroundColor:function (color){
        //  document.querySelector('h1').style.backgroundColor =color; 
        $('h1').css('backgroundColor', color);
        }
}
var Body = {
    setColor:function (color){
        // document.querySelector('body').style.color=color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self){
    var target= document.querySelector('body')
    if(self.value === 'night'){
        self.value ='day';
        Title.setBackgroundColor('gray');
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
    } else{
        Title.setBackgroundColor('powderblue');
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('rgb(92, 78, 161)');
    }
}