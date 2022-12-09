let alrt = document.getElementsByClassName('alrt')[0];
let arro = document.getElementsByClassName('arro')[0];
let box1 = document.getElementsByClassName('box1')[0];

let facility = document.getElementsByClassName('facilty');
var isOpened = false;

function popupNews()
{
	if (isOpened==false) 
	{
		alrt.style.height = "155px";
		arro.style.transform = "rotate(90deg)";
		isOpened = true;
	}
	else
	{
		alrt.style.height = "35px";
		arro.style.transform = "rotate(270deg)";
		isOpened = false;
	}
}


// function popupfacility(value)
// {
// 	if (isOpened==false)
// 	{
// 		facility[value].style.background = "rgb(245, 245, 243)";
// 		facility[value].style.height = "auto";
// 		isOpened=true;
		
// 	}
// 	else
// 	{
// 		facility[value].style.height = "35px";
// 		isOpened= false;
// 	}

// }


let slideIndex = 0;
showSlides();

function showSlides() 
{
  let slides = document.getElementsByClassName("box1");

  for (let i = 0; i < slides.length; i++)
   {
     slides[i].style.display = "none";  
   }

  slideIndex++;
  if (slideIndex > slides.length) 
    {
      slideIndex = 1
    } 

   slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000); 

}


function prev()
{
	
}



function search(e) 
{
	let searched = document.getElementById("search").value.trim();
	
  if (searched !== "") 
  {
  	let text = document.getElementById("container").innerHTML;
  	let re = new RegExp(searched,"g"); 
	let newText = text.replace(re, `<mark>${searched}</mark>`);
	document.getElementById("container").innerHTML = newText;
  }
}
