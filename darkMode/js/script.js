const body = document.body;
const toggle = document.querySelector('button');
let mode = 'light';

if(!localStorage.getItem('mode')){
    localStorage.setItem('mode', mode);
} else{
    mode = localStorage.getItem('mode');
}

if(mode === 'dark'){
    changeToggle(mode);
}

toggle.addEventListener('click', () =>{
    if(mode === 'light'){
        changeToggle('dark');
        
    } else{
        changeToggle('light');
    }
    localStorage.setItem('mode', mode)
})



function changeToggle(newMode){
    if(newMode === 'dark'){
        body.className = 'dark-mode';
        mode = 'dark'
        toggle.title = 'Светлая тема'
    } else{
        body.className = '';
        mode = 'light'
        toggle.title = 'Темная тема'
    }
}