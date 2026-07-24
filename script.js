// ==============================
// Neha Footwear Premium Script
// ==============================

// Search Products
function searchProducts() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let title = card.querySelector("h3").innerText.toLowerCase();

        if(title.includes(input)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

}

// WhatsApp Order

function orderProduct(product){

    let number="918156085131";

    let msg=`Hello Neha Footwear,

I want to order:

${product}

Please send price and available sizes.`;

    window.open(
        "https://wa.me/"+number+"?text="+encodeURIComponent(msg),
        "_blank"
    );

}

// Smooth Scroll

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

let target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="12px 16px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#FFD700";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Footer Year

const footer=document.querySelector("footer");

if(footer){

const p=document.createElement("p");

p.innerHTML="Made with ❤️ for Neha Footwear";

footer.appendChild(p);

}

console.log("Neha Footwear Website Loaded Successfully");
