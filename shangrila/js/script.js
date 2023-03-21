let navList= document.querySelector('.navlist');
let menu= document.querySelector('#menu-icon');
// let navbar= document.querySelector('.nav-main');
menu.onclick = () => {
	navList.classList.toggle('open');
	menu.classList.toggle('bx-x');
};



const sections=document.querySelectorAll('section');
const navLi=document.querySelectorAll('li');

window.addEventListener('scroll', ()=>{
	let current='Home';

	sections.forEach(section=>{
		let sectionTop= section.offsetTop-500;
		if(scrollY > sectionTop){
			current = section.getAttribute('id');
		} 
	})
	navLi.forEach(li => {
		li.classList.remove('active');
		if(li.classList.contains(current)){
			li.classList.add('active');
		}
	})
})

function scrolll(){
		javascript:window.scrollBy(0, 600);
}