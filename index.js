var data=[
    {
        image:"./img/img_0.jpg",
        title:"",
        subTitle:"Gadis Cantikku",
        description:`Aku udah lama ngerasa gini, dan aku nggak mau simpan lagi.
        Kamu itu spesial banget buat aku.
        Aku suka kamu, dan aku harap kamu juga ngerasa yang sama.`
    },
    {
        image:"./img/img1.jpg",
        title:"",
        subTitle:"Masa Depan Aku",
        description:`Aku suka cara kamu ngobrol sama aku, cara kamu buat aku merasa spesial.
	Jujur aku sama sekali gamau kehilangan kamu.
	Aku mau cepet-cepet kesana sama mama aku supaya aku bisa kenalin kamu ke mama aku.`
    },
    {
        image:"./img/img2.jpg",
        title:"",
        subTitle:"Sayangku",
        description:`Kamu tau gak? Setiap aku lihat foto kamu tuh selalu bikin aku meleleh. 
	Lihat fotomu selalu bikin aku ingat betapa berharganya kamu buat aku. 
    Aku suka kamu lebih dari yang bisa aku ungkapkan dengan kata-kata.`
    },
    {
        image:"./img/img3.jpg",
        title:"",
        subTitle:"Malaikat Hidupku",
        description:`Sayang, Kamu adalah yang terbaik yang pernah aku temuin. Aku tidak bisa membayangkan hidup tanpamu. 
Aku ingin kita selalu bersama, menghadapi segala sesuatu bersama-sama. 
Tolong, jangan pernah tinggalkan aku. I love u.
`
    }
];

const introduce= document.querySelector(".introduce");
const ordinalNumber= document.querySelector(".ordinal-number");

introduce.innerHTML="";
ordinalNumber.innerHTML="";

for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="title" style="--idx:0">${data[i].title}</h5>
            </span>
            <span>
                <h1 class="sub-title" style="--idx:1">${data[i].subTitle}</h1>
            </span>
            <span>
                <p class="describe" style="--idx:2">${data[i].description}</p>
            </span>
           
        </div>
    `;

    ordinalNumber.innerHTML +=`<h2>0${i+1}</h2>`;

};

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumnbailListWrapper =document.querySelector(".thumbnail-list .wrapper");
thumnbailListWrapper.innerHTML += `
    <div class="thumbnail zoom">
        <img src="${data[0].image}" alt="">
    </div>
`;

for (let i = 1; i < data.length; i++) {
    thumnbailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i-1}">
        <img src="${data[i].image}" alt="">
    </div>
`
};

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex =0;
nextBtn.addEventListener("click", () => {
    nextBtn.disabled =true;
    var clone =thumnbailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumnbailListWrapper.appendChild(clone);
    thumnbailListWrapper.children[1].classList.add("zoom");
    setTimeout(()=>{
        thumnbailListWrapper.children[0].remove();
        nextBtn.disabled = false;
    },1000);

    for (let i = 2; i < thumnbailListWrapper.childElementCount; i++) {
       thumnbailListWrapper.children[i].style =`--idx: ${i-2}`;
    };

    if(currentIndex <=2){
        currentIndex++;
    }else{
        currentIndex =0
    } 

    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }

    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent=`0${currentIndex+1}`;

});
