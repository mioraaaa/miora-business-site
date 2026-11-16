const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
const toast=document.getElementById('toast');
document.getElementById('accountBtn')?.addEventListener('click',()=>{toast.textContent='Customer registration will be enabled in the next development stage.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2800)});
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
