
const btmLists=document.querySelectorAll('.link-text');
const hiddenLine=document.querySelectorAll('.hidden__line')

btmLists.forEach(list => {
    list.addEventListener('click',function(e){
       hiddenLine.forEach(line => {
           console.log("i am coming")
       });

        e.preventDefault();

    })
});