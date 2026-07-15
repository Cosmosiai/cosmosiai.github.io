document.querySelector('.themes').addEventListener('change',(event)=>{
    if(event.target.nodeName === 'INPUT'){
        console.log("hello world");
        if(event.target.nodeName)
        document.documentElement.classList.remove('dark','light','auto');
        document.documentElement.classList.add(event.target.value);
    }
});