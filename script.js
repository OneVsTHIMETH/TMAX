const brands=[
 {id:"honda",name:"Honda",hero:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=88",bikes:[
  ["Honda Dio 125 STD","Rs. 790,000","https://honda.lk/img/ind-products/2-wheelers/dio125/body-img.png"],
  ["Honda Dio 125 H-Smart","Rs. 840,000","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DuureH61sapVGqqeU_avwjDg4AcyUJ4dRUfunw2HKw&s=10"],
  ["Honda Dio 110","Rs. 690,000","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjHAHaetrSVPbGv4SzFNoi1lHcu70mCAFlKRhfBBlzw&s"],
  ["Honda Dio 110 DLX","Rs. 740,000","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvb4BXyTBAY0yXVc4yKecA9mOOqrIat6fvHaw_x4nBQ&s"],
  ["Honda SP 125","Rs. 770,000","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwpRD2dE17IR969hkRIQFUW_XP6FOAxSuh7kXct14bw&s"],
  ["Honda Shine 125","Rs. 715,000","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YRCnt4Plcy64HWAkfKptK4yzBDjxNP5bBMwyKmFLAg&s"],
  ["Honda ICON e", "Rs. 850,000", "https://fasterwheeler.com/product_images/webp/Honda-ICON-e-2025.webp"]
 ]},
 {id:"yamaha",name:"Yamaha",hero:"https://i.pinimg.com/736x/d6/19/53/d61953275ddec2e09976294cad96ad10.jpg",bikes:[
  ["YAMAHA FZ-S FI V4 STD", "Rs. 1,198,900", "https://yamaha.lk/wp-content/uploads/2025/11/1-1.png"],
  ["YAMAHA FZ-S FI DLX", "Rs. 1,289,900", "https://fasterwheeler.com/product_images/jpeg/yamaha-fz-s-fi-ver-4.0-dlx-2025.jpg"],
  ["YAMAHA FZ-S V4 NEW", "Rs. 1,229,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvLPifPMR8sl2CnFt4eOV563VRyh_0vbfbzNfievOXQ&s=10"],
  ["YAMAHA FZ FI V2", "Rs. 1,069,900", "https://wmtjmeagskljknxavakj.supabase.co/storage/v1/object/public/vehicle-images/bike/yamaha-fz-fi-v2-1156080b-07e2-47dd-accb-65d7453022f4.webp"],
  ["YAMAHA MT-15 V2", "Rs. 1,479,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk57csYxt9HvR9AtKq4_oxPksj070oVHaPTFo8WryZVQ&s=10"],
  ["YAMAHA R15 V4", "Rs. 1,654,900", "https://yamaha.lk/wp-content/uploads/2025/11/1.png"],
  ["YAMAHA RAY ZR 113 DISC", "Rs. 689,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaEmY-tM-9BTP8eu3Fjo_9YYI2J2tngT6ZZ8N0XQIKg&s=10"],
  ["YAMAHA RAY ZR 113 STREET RALLY", "Rs. 719,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z3ErkJmnC2bnIbjL0uCn8xuaomUixAYeAkVkI1NPVw&s=10"],
  ["YAMAHA RAY ZR 125 DISC", "Rs. 824,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmTx5w5n90K4ta66_mAaM2bVUPg4uzR2huachLa0ELQ&s=10"],
  ["YAMAHA RAY ZR 125 STREET RALLY", "Rs. 854,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJy1eJYm_P9hQMYqc8mDoW9MVH5KrgJ5SWXc3WvJJ_OQ&s=10"],
  ["YAMAHA NMAX 155", "Coming Soon", "https://fasterwheeler.com/product_images/jpeg/yamaha-NMAX-155-Tech-MAX-2026.jpg"]
 ]},
 {id:"bajaj",name:"Bajaj",hero:"https://i.pinimg.com/1200x/bd/7f/fa/bd7ffa1d933308bae15cbb0769fbe7a0.jpg",bikes:[
  ["BAJAJ PLATINA 100 ES", "Rs. 689,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBytjLbKDfIZvRQAYy6_xF0-tDVs1j9T3MCwDOAKvfg&s"],
  ["BAJAJ CT 100 ES", "Rs. 592,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGjE3FPVntUyz9Vj9MKldOz3rx3cMMtx-HSSzlF7-tQ&s=10"],
  ["BAJAJ DISCOVER 125 DRL", "Rs. 729,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmvj8Ni99xFfnwoHPdzgIGZ1gvrpF9w9-1XFQC9LhdEw&s=10"],
  ["BAJAJ PULSAR NS400Z", "Rs. 2,339,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGVGJySmRDKp2teCZctciIKSAtrYcbanxrMokVRIqFw&s=10"],
  ["BAJAJ PULSAR N125", "Rs. 719,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjiLH7NxNzvrTssg4FWotavGYBUeTvGwl6HLhiWzQcQ&s=10"],
  ["BAJAJ PULSAR NS200", "Rs. 1,124,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfyw9vrN7NgyKxokkp7wJ34oy_-31IM5Q38UqsDO3Xtg&s=10"],
  ["BAJAJ PULSAR N160 PREMIUM", "Rs. 979,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHstUhRy6RzEJbtBrLQjqZRVFhywBHVtxoc9bTARegA&s"],
  ["BAJAJ PULSAR N160", "Rs. 914,950", "https://cdn.bajajauto.com/en-lk/-/media/globalbajajauto/common-media/product-detail-page-banners/pulsar/pulsar-n160.webp"],
  ["BAJAJ PULSAR RS200", "Rs. 1,229,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7Tpw7cSJx2J3_Q_A828o2gNdx5k-6DZLmYWytWEJWg&s=10"],
  ["BAJAJ PULSAR NS125", "Rs. 789,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76goOfzawfm-pQtq90XdOqkQZ4gl-5KzzhXVm6ZLI4A&s"]
 ]},
 
 {id:"tvs",name:"TVS",hero:"https://i.pinimg.com/originals/af/e7/e6/afe7e6c21618921653bf5f9e81150dcf.jpg",bikes:[
  ["TVS RAIDER", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5D_f00Oj_U1fpvE9Q5HNX4g7jVRXBnvXGaH3X3Vhswg&s"],
  ["TVS RAIDER SX", "PRICE NOT PUBLISHED", "https://www.tvsmotor.com/lk/-/media/Feature/IB/Webp-Images/Premium/Raider-Fi-Connected-cluster/Web/Colours/black_new.webp"],
  ["TVS SPORT 110", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAUVjxye9HRWtdIJojDyKD-QhQou0XukxFTyIio8brA&s=10"],
  ["TVS APACHE RTR 160 4V", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSZrAYwiEXU78KstfK9cI6qWQNjTzbYs3YaYuXDkXIQ&s=10"],
  ["TVS APACHE RTR 200 4V", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnVNla5WoZ4VuU-OJhD0Rww8z0NwkdMdhdlCnvr-D7A&s"],
  ["TVS APACHE RTR 310", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq25-1LnIisdNstOVegCsq_4qurew8QgEEyPlyp_8D6A&s=10"],
  ["TVS APACHE RR 310", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQlHss9WFu83ZnF82Ne86bZ01fPt2bnT3Hf3EsIXM3vsR09zU7e0gSTxn&s=10"],
  ["TVS RONIN 225", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyJLBhlTcZ2SXDhkn7rxacTMk_EkX8IDV5AWpZggmpw&s=10"],
  ["TVS NTORQ 125", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTItu1_Fdo7qkBeWIALA494Dep9S1SZqhcumL4K4Wj7w&s=10"],
  ["TVS NTORQ 125 RE", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9UYsawYKzipw9DRe5xsGvMJ37szxVMbsI13EZjZM05w&s=10"],
  ["TVS NTORQ 125 XP FI", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGlBW8hytH3AmBau9pOqZBUmbcTK4MalZNR_F3zJZrA&s=10"],
  ["TVS NTORQ 125 DISC FI", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhF1ij6jWSuZWNmOXhunpcZSX_9w8GNjgTY4IR641lQ&s=10"],
  ["TVS JUPITER 110", "PRICE NOT PUBLISHED", "https://www.tvsmotor.com/tvs-jupiter/-/media/TVS-Jupiter-110/Sticky-icon-54-X-54/J110-SXC-Disc-Blue-19.webp"],
  ["TVS iQUBE", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrlz-ev2RzGbZ39PRRO9aW0vs4ucgEvegHurrL60NRK1zvk96mh6xTteH&s=10"],
  ["TVS ORBITER", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnLqpVDqysgQGbIWe-QmK50vdlmPO4mLNvlUHDRUZnw&s=10"],
  ["TVS XL100 HEAVY DUTY", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMEwLLEsyIiMKOBrYzUnCYsKvNzO5rq7gU8LY6TU_dQ&s=10"]
 ]},
 {id:"ktm",name:"KTM",hero:"https://i.pinimg.com/736x/df/62/1b/df621b6e7bb24ea261dd4ead52b3c3e3.jpg",bikes:[
  ["KTM 390 ADVENTURE X", "Rs. 2,724,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6rgciKIx3hBxLmNjVl6FNhBuivAMaUw9yRbIFkaSyA&s"],
  ["KTM DUKE 160", "Rs. 1,489,950", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE8STr-sc7aipWrtEU9cFVYW9sN46PsfGVnNj7A66DQ&s=10"],
  ["KTM DUKE 250", "Rs. 1,834,950", "https://fasterwheeler.com/product_images/jpeg/ktm-250-duke-2025.jpg"]
  ]},
 {id:"electric",name:"Electric Bike",hero:"https://i.pinimg.com/736x/8e/9e/8b/8e9e8b2f1c2b0f5f1e62e70cfd7f91b0.jpg",bikes:[
  ["Honda ICON e", "Rs. 850,000", "https://fasterwheeler.com/product_images/webp/Honda-ICON-e-2025.webp"],
  ["TVS iQUBE", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrlz-ev2RzGbZ39PRRO9aW0vs4ucgEvegHurrL60NRK1zvk96mh6xTteH&s=10"],
  ["TVS ORBITER", "PRICE NOT PUBLISHED", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnLqpVDqysgQGbIWe-QmK50vdlmPO4mLNvlUHDRUZnw&s=10"]
 
   ]},
   /*
 {id:"bmw",name:"BMW Bike",hero:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=88",bikes:[
  ["BMW M 1000 RR", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW M 1000 R", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW M 1000 XR", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW S 1000 RR", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW S 1000 R", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW S 1000 XR", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW F 900 XR", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW R 1300 GS", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 1300 GS ADVENTURE", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 1300 RS", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 1300 RT", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 1300 R", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW F 900 GS", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW F 900 GS ADVENTURE", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW F 800 GS", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW F 450 GS", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW G 310 GS", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW F 900 R", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW G 310 R", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW G 310 RR", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW R 12", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 12 nineT", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 12 G/S", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW R 18", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 18 CLASSIC", "PRICE NOT VERIFIED", "IMAGE_URL"],
  ["BMW R 18 ROCTANE", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 18 B", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW R 18 TRANSCONTINENTAL", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW K 1600 GT", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW K 1600 GTL", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW K 1600 B", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW K 1600 GRAND AMERICA", "PRICE NOT PUBLISHED", "IMAGE_URL"],

  ["BMW CE 04", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW CE 02", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW C 400 X", "PRICE NOT PUBLISHED", "IMAGE_URL"],
  ["BMW C 400 GT", "PRICE NOT PUBLISHED", "IMAGE_URL"]
]},
*/
 {id:"hero",name:"Hero",hero:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPeTS8D_X2Cvjf22pcIlNSu_7DxCccCZFTm8Z-vERkQ&s=10",bikes:[
  ["HERO HF DELUXE", "Rs. 585,400", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5I2qeDV1jRIE8pFDOWIV87H9SDMDZ6Wtq7WfCtLvJsA&s=10"],
  ["HERO XTREME 125R", "Rs. 784,400", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtv7C6VAdJI8azeZT6KlC31SuMAK8djDI4FSMdYqpqBg&s=10"],
  ["HERO HUNK 160R 4V", "Rs. 917,400", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtTkzP68gHfd89Oj30ZHhgg5-v3PTGdZyhJytiJGiqyQ&s=10"],
  ["HERO XOOM 110", "Rs. 699,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhH6Fkk59JpmaDltyd5qR2TR6qdYM30Opz4wq1Qydkg&s=10"],
  ["HERO XOOM 110 CE", "Rs. 724,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmK093aje0jQM8VUm2iCQcNtIrGBbt88F0iZPAP5rdyg&s=10"],
  ["HERO XOOM 100 FI", "Rs. 720,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZrJ4Cc05Nh3TJIWmZXGWZidXv1vaK2Pho7hDMsL3zg&s=10"],
  ["HERO XOOM 125R", "Rs. 834,900", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpW0OEYgt4s-zvx97oEOs5PbQNt-kygqSpksDV-pZ0dw&s=10"]
 ]},
 /*
 {id:"suzuki",name:"Suzuki",hero:"https://i.pinimg.com/736x/dc/2f/f0/dc2ff0bf61004448921d641245aee25a.jpg",bikes:[
 
["Suzuki Gixxer", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki Gixxer SF", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki Gixxer 250", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki Gixxer SF 250", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki Gixxer SF 250 Flex Fuel", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki Burgman Street 125", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki Avenis 125", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSX-R150", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSX-S125", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki V-Strom 250 SX", "PRICE NOT PUBLISHED", "IMAGE_URL"]
/*
["Suzuki DR150", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki DRZ 400SM", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki DRZ250", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GN125", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GS150R", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSR 150i", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSR 250", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSX-8R", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSX-8S", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSX-R1000R", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSX-R750", "PRICE NOT PUBLISHED", "IMAGE_URL"],
["Suzuki GSX-S1000", "PRICE NOT PUBLISHED", "IMAGE_URL"]


   ]}
*/
];


const brandTrack=document.getElementById("brandTrack");
const heroBike=document.getElementById("heroBike");
const heroCounter=document.getElementById("heroCounter");
let heroIndex=0,heroTimer;

brands.forEach((b,i)=>{
 const a=document.createElement("a");
 a.className="brand-card";
 a.href="#"+b.id;
 a.dataset.index=i;
 a.innerHTML=`<img src="${b.hero}" alt="${b.name}"><div class="brand-info"><div class="brand-no">${String(i+1).padStart(2,"0")}</div><div class="brand-name">${b.name}</div><div class="brand-go">Open brand →</div></div>`;
 a.addEventListener("click",()=>{heroIndex=i;renderHero();});
 brandTrack.appendChild(a);
});

function renderHero(){
 const cards=[...document.querySelectorAll(".brand-card")],n=cards.length;
 cards.forEach((card,i)=>{
   let d=i-heroIndex;if(d>n/2)d-=n;if(d<-n/2)d+=n;
   const x=d*205,z=Math.max(0,80-Math.abs(d)*80),s=d===0?1:Math.max(.72,1-Math.abs(d)*.08);
   card.style.transform=`translate3d(${x}px,${Math.abs(d)*12}px,${z}px) rotateY(${d*8}deg) scale(${s})`;
   card.style.opacity=Math.abs(d)>2?0:(d===0?1:.62);
   card.style.filter=d===0?"none":"grayscale(.45)";
   card.style.zIndex=20-Math.abs(d);
   card.classList.toggle("active",d===0);
 });
 heroCounter.textContent=`${String(heroIndex+1).padStart(2,"0")} / ${String(n).padStart(2,"0")}`;
 heroBike.style.opacity="0";
 setTimeout(()=>{heroBike.src=brands[heroIndex].hero;heroBike.style.opacity="1"},180);
}
function heroMove(dir){heroIndex=(heroIndex+dir+brands.length)%brands.length;renderHero();restartHero();}
function restartHero(){clearInterval(heroTimer);heroTimer=setInterval(()=>heroMove(1),3000);}
document.getElementById("brandNext").onclick=()=>heroMove(1);
document.getElementById("brandPrev").onclick=()=>heroMove(-1);
const roller=document.querySelector(".brand-roller");
roller.addEventListener("mouseenter",()=>clearInterval(heroTimer));
roller.addEventListener("mouseleave",restartHero);
let sx=0;
roller.addEventListener("pointerdown",e=>sx=e.clientX);
roller.addEventListener("pointerup",e=>{let dx=e.clientX-sx;if(Math.abs(dx)>45)heroMove(dx<0?1:-1)});
heroBike.src=brands[0].hero;renderHero();restartHero();

/* Detailed specifications displayed as simple notes on the back of the image card. */
function getBikeNotes(bike){
  const detailed = {
    /*honda*/
  "Honda Dio 125 STD": [
    ["Engine", "123.92 cc"],
    ["Engine Type", "4-Stroke, Single Cylinder"],
    ["Fuel System", "PGM-FI"],
    ["Bore x Stroke", "50.0 mm x 63.113 mm"],
    ["Compression Ratio", "10 : 1"],
    ["Starting Method", "Self / Kick Start"],
    ["Transmission", "Automatic Centrifugal Clutch - Dry Type"],
    ["Front Tyre", "90/90-12 54J"],
    ["Rear Tyre", "90/100-10 53J"],
    ["Front Brake", "Drum"],
    ["Rear Brake", "Drum"],
    ["Frame Type", "Underbone"],
    ["Front Suspension", "Telescopic"],
    ["Rear Suspension", "3-Step Adjustable Spring Loaded Hydraulic"],
    ["Overall Length", "1,830 mm"],
    ["Overall Width", "707 mm"],
    ["Overall Height", "1,172 mm"],
    ["Wheelbase", "1,260 mm"],
    ["Ground Clearance", "171 mm"],
    ["Curb Weight", "104 kg"],
    ["Fuel Tank", "5.3 L"],
    ["Battery", "12V, 5.0 Ah"],
    ["Headlamp", "LED"],
    ["Technology", "eSP, PGM-FI, Advanced Idling Stop"],
    ["Special Features", "Digital Meter, External Fuel Filling, Side Stand Engine Cut Off"]
  ],

  "Honda Dio 125 H-Smart": [
    ["Engine", "123.92 cc"],
    ["Engine Type", "4-Stroke, Single Cylinder"],
    ["Fuel System", "PGM-FI"],
    ["Bore x Stroke", "50.0 mm x 63.113 mm"],
    ["Compression Ratio", "10 : 1"],
    ["Starting Method", "Self Start"],
    ["Transmission", "Automatic Centrifugal Clutch - Dry Type"],
    ["Front Tyre", "90/90-12 54J"],
    ["Rear Tyre", "90/100-10 53J"],
    ["Front Brake", "Disc - 190 mm"],
    ["Rear Brake", "Drum - 130 mm"],
    ["Frame Type", "Underbone"],
    ["Front Suspension", "Telescopic"],
    ["Rear Suspension", "3-Step Adjustable Spring Loaded Hydraulic"],
    ["Overall Length", "1,830 mm"],
    ["Overall Width", "707 mm"],
    ["Overall Height", "1,172 mm"],
    ["Wheelbase", "1,260 mm"],
    ["Ground Clearance", "171 mm"],
    ["Curb Weight", "104 kg"],
    ["Fuel Tank", "5.3 L"],
    ["Battery", "12V, 5.0 Ah"],
    ["Headlamp", "LED"],
    ["Technology", "eSP, PGM-FI, Advanced Idling Stop"],
    ["Special Features", "H-Smart Key, ACG Silent Start, Digital Meter, External Fuel Filling"]
  ],

  "Honda Dio 110": [
    ["Engine", "109.51 cc"],
    ["Engine Type", "4-Stroke, Single Cylinder"],
    ["Fuel", "Petrol"],
    ["Fuel System", "PGM-FI"],
    ["Starting Method", "Self / Kick Start"],
    ["Transmission", "Automatic"],
    ["Front Brake", "Drum"],
    ["Rear Brake", "Drum"],
    ["Front Suspension", "Telescopic"],
    ["Rear Suspension", "Hydraulic"],
    ["Headlamp", "LED"],
    ["Wheels", "Alloy"],
    ["Fuel Tank", "Approx. 5.3 L"],
    ["Technology", "PGM-FI / eSP"],
    ["Special Features", "Analog Meter, Idling Stop, Silent Start"]
  ],

  "Honda Dio 110 DLX": [
    ["Engine", "109.51 cc"],
    ["Engine Type", "4-Stroke, Single Cylinder"],
    ["Fuel", "Petrol"],
    ["Fuel System", "PGM-FI"],
    ["Starting Method", "Self / Kick Start"],
    ["Transmission", "Automatic"],
    ["Front Brake", "Drum"],
    ["Rear Brake", "Drum"],
    ["Front Suspension", "Telescopic"],
    ["Rear Suspension", "Hydraulic"],
    ["Headlamp", "LED"],
    ["Wheels", "Alloy"],
    ["Fuel Tank", "Approx. 5.3 L"],
    ["Technology", "PGM-FI / eSP"],
    ["Special Features", "DLX Styling, Digital Meter, Idling Stop, Silent Start"]
  ],

  "Honda SP 125": [
    ["Engine", "123.94 cc"],
    ["Engine Type", "4-Stroke, Single Cylinder"],
    ["Fuel", "Petrol"],
    ["Fuel System", "PGM-FI"],
    ["Starting Method", "Self Start"],
    ["Transmission", "5-Speed Manual"],
    ["Front Brake", "Disc / Drum - Variant dependent"],
    ["Rear Brake", "Drum"],
    ["Front Suspension", "Telescopic"],
    ["Rear Suspension", "Hydraulic"],
    ["Wheels", "Alloy"],
    ["Headlamp", "LED"],
    ["Fuel Tank", "Approx. 11 L"],
    ["Technology", "PGM-FI"],
    ["Special Features", "Digital Meter, Combi Brake System, 5-Speed Transmission"]
  ],

  "Honda Shine 125": [
    ["Engine", "123.94 cc"],
    ["Engine Type", "4-Stroke, Single Cylinder"],
    ["Fuel", "Petrol"],
    ["Fuel System", "PGM-FI"],
    ["Starting Method", "Self / Kick Start"],
    ["Transmission", "5-Speed Manual"],
    ["Front Brake", "Disc / Drum - Variant dependent"],
    ["Rear Brake", "Drum"],
    ["Front Suspension", "Telescopic"],
    ["Rear Suspension", "Hydraulic"],
    ["Wheels", "Alloy"],
    ["Headlamp", "LED"],
    ["Fuel Tank", "Approx. 10.5 L"],
    ["Technology", "PGM-FI"],
    ["Special Features", "Digital Meter, Combi Brake System, Tubeless Tyres"]
  ],
  "Honda ICON e": [
  ["Motor Type", "In-wheel electric motor"],
  ["Fuel", "Electric"],
  ["Maximum Power", "6.0 kW"],
  ["Maximum Torque", "85 Nm"],
  ["Top Speed", "55 km/h"],
  ["Battery Type", "Lithium-ion"],
  ["Battery Capacity", "1.5 kWh × 2"],
  ["Range", "Approx. 102 km"],
  ["Charging Time", "Approx. 6 hours"],
  ["Transmission", "Automatic"],
  ["Drive Type", "Hub Motor"],
  ["Kerb Weight", "Approx. 89 kg"]
],

  /*Yamaha*/
  

 

    "YAMAHA FZ-S FI V4 STD":[
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "149 cc"],
      ["Bore × Stroke", "57.3 mm × 57.9 mm"],
      ["Compression Ratio", "9.6 : 1"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["E20 Compatible", "Yes"],
      ["Starting Method", "Electric Starter"],
      ["Transmission", "5-speed Constant Mesh"],
      ["Maximum Power", "12.4 PS @ 7,250 rpm"],
      ["Maximum Torque", "13.3 Nm @ 5,500 rpm"],
      ["Front Brake", "282 mm Disc"],
      ["Rear Brake", "220 mm Disc"],
      ["ABS", "Single Channel ABS"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "7-Step Adjustable Monocross"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "140/60R17 Radial Tubeless"],
      ["Headlamp", "LED"],
      ["Fuel Tank", "13 L"],
      ["Seat Height", "790 mm"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,330 mm"],
      ["Kerb Weight", "137 kg"],
      ["Special Features", "Traction Control, Y-Connect, LED Flashers"]
    ],

     "YAMAHA FZ-S FI DLX": [
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "149 cc"],
      ["Bore × Stroke", "57.3 mm × 57.9 mm"],
      ["Compression Ratio", "9.6 : 1"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-speed Constant Mesh"],
      ["Maximum Power", "12.4 PS @ 7,250 rpm"],
      ["Maximum Torque", "13.3 Nm @ 5,500 rpm"],
      ["Front Brake", "Disc"],
      ["Rear Brake", "220 mm Disc"],
      ["ABS", "Single Channel ABS"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "7-Step Adjustable Monocross"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "140/60R17 Radial Tubeless"],
      ["Headlamp", "LED with Auxiliary Light"],
      ["Fuel Tank", "13 L"],
      ["Seat Height", "790 mm"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,330 mm"],
      ["Kerb Weight", "134 kg"],
      ["Special Features", "Hybrid Power Assist, Smart Motor Generator, Y-Connect, Side Stand Engine Cut-off"]
    ],
  "YAMAHA FZ-S V4 NEW": [
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "149 cc"],
      ["Bore × Stroke", "57.3 mm × 57.9 mm"],
      ["Compression Ratio", "9.6 : 1"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-speed Constant Mesh"],
      ["Maximum Power", "12.4 PS @ 7,250 rpm"],
      ["Maximum Torque", "13.3 Nm @ 5,500 rpm"],
      ["Front Brake", "282 mm Disc"],
      ["Rear Brake", "220 mm Disc"],
      ["ABS", "Single Channel ABS"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Monocross"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "140/60-R17 Tubeless"],
      ["Headlamp", "LED"],
      ["Fuel Tank", "13 L"],
      ["Seat Height", "790 mm"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,330 mm"],
      ["Kerb Weight", "137 kg"],
      ["Special Features", "Traction Control, Y-Connect, ECO Indicator, Side Stand Engine Cut-off"]
    ],
    "YAMAHA FZ FI V2": [
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "149 cc"],
      ["Bore × Stroke", "57.3 mm × 57.9 mm"],
      ["Compression Ratio", "9.5 : 1"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-speed Constant Mesh"],
      ["Maximum Power", "13.2 PS @ 8,000 rpm"],
      ["Maximum Torque", "12.8 Nm @ 6,000 rpm"],
      ["Front Brake", "Hydraulic Single Disc"],
      ["Rear Brake", "Mechanical Leading Trailing Drum"],
      ["ABS", "Not Available"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Monocross"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "140/60-R17 Tubeless"],
      ["Headlamp", "Halogen"],
      ["Fuel Tank", "12 L"],
      ["Seat Height", "790 mm"],
      ["Ground Clearance", "160 mm"],
      ["Wheelbase", "1,330 mm"],
      ["Kerb Weight", "132 kg"],
      ["Special Features", "Lightweight Chassis, Digital Instrument Cluster"]
    ],
  "YAMAHA MT-15 V2": [
      ["Engine Type", "Liquid-cooled, 4-stroke, SOHC, 4-valve"],
      ["Displacement", "155 cc"],
      ["Bore × Stroke", "58.0 mm × 58.7 mm"],
      ["Compression Ratio", "11.6 : 1"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-speed Constant Mesh"],
      ["Maximum Power", "18.4 PS @ 10,000 rpm"],
      ["Maximum Torque", "14.1 Nm @ 7,500 rpm"],
      ["Front Brake", "282 mm Disc"],
      ["Rear Brake", "220 mm Disc"],
      ["ABS", "Single Channel ABS"],
      ["Front Suspension", "Inverted Telescopic Fork"],
      ["Rear Suspension", "Linked-type Monocross"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "140/70R-17 Tubeless"],
      ["Headlamp", "Bi-functional LED"],
      ["Fuel Tank", "10 L"],
      ["Seat Height", "810 mm"],
      ["Ground Clearance", "170 mm"],
      ["Wheelbase", "1,325 mm"],
      ["Kerb Weight", "139 kg"],
      ["Special Features", "VVA, Traction Control, Y-Connect, Side Stand Engine Cut-off"]
    ],
 "YAMAHA R15 V4": [
      ["Engine Type", "Liquid-cooled, 4-stroke, SOHC, 4-valve"],
      ["Displacement", "155 cc"],
      ["Bore × Stroke", "58.0 mm × 58.7 mm"],
      ["Compression Ratio", "11.6 : 1"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-speed Constant Mesh"],
      ["Maximum Power", "18.4 PS @ 10,000 rpm"],
      ["Maximum Torque", "14.2 Nm @ 7,500 rpm"],
      ["Front Brake", "282 mm Disc"],
      ["Rear Brake", "220 mm Disc"],
      ["ABS", "Dual Channel ABS"],
      ["Front Suspension", "37 mm USD Telescopic Fork"],
      ["Rear Suspension", "Linked-type Monocross"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "140/70-R17 Radial Tubeless"],
      ["Headlamp", "Bi-functional LED"],
      ["Fuel Tank", "11 L"],
      ["Seat Height", "815 mm"],
      ["Ground Clearance", "170 mm"],
      ["Wheelbase", "1,325 mm"],
      ["Kerb Weight", "142 kg"],
      ["Special Features", "VVA, Traction Control, Quick Shifter on Select Variants, Riding Modes"]
    ],
    "YAMAHA RAY ZR 113 DISC": [
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "113 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Carburetor"],
      ["Starting Method", "Electric Start & Kick Start"],
      ["Transmission", "V-Belt Automatic"],
      ["Maximum Power", "7.2 PS @ 7,500 rpm"],
      ["Maximum Torque", "8.1 Nm @ 5,000 rpm"],
      ["Front Brake", "Disc"],
      ["Rear Brake", "Drum"],
      ["ABS / UBS", "Not Specified as ABS"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Unit Swing"],
      ["Headlamp", "Halogen 12V 35W/35W"],
      ["Fuel Tank", "5.2 L"],
      ["Seat Height", "775 mm"],
      ["Ground Clearance", "130 mm"],
      ["Wheelbase", "1,270 mm"],
      ["Kerb Weight", "105 kg"],
      ["Special Features", "Blue Core Technology, Lightweight Body, Analog Instrument Cluster"]
    ],
 "YAMAHA RAY ZR 113 STREET RALLY": [
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "113 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Carburetor"],
      ["Starting Method", "Electric Start & Kick Start"],
      ["Transmission", "V-Belt Automatic"],
      ["Maximum Power", "7.2 PS @ 7,500 rpm"],
      ["Maximum Torque", "8.1 Nm @ 5,000 rpm"],
      ["Front Brake", "Disc"],
      ["Rear Brake", "Drum"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Unit Swing"],
      ["Front Wheel", "Alloy / Tubeless"],
      ["Rear Wheel", "Alloy / Tubeless"],
      ["Headlamp", "Halogen"],
      ["Fuel Tank", "5.2 L"],
      ["Seat Height", "775 mm"],
      ["Ground Clearance", "130 mm"],
      ["Wheelbase", "1,270 mm"],
      ["Kerb Weight", "105 kg"],
      ["Special Features", "Street Rally Styling, Blue Core Technology"]
    ],
 "YAMAHA RAY ZR 125 DISC": [
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "125 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric & Kick with Smart Motor Generator"],
      ["Transmission", "V-Belt Automatic"],
      ["Maximum Power", "8.2 PS @ 6,500 rpm"],
      ["Maximum Torque", "9.7 Nm @ 5,000 rpm"],
      ["Front Brake", "190 mm Disc"],
      ["Rear Brake", "Drum with UBS"],
      ["ABS / UBS", "Unified Braking System (UBS)"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Unit Swing"],
      ["Front Tyre", "90/90-12 Tubeless"],
      ["Rear Tyre", "110/90-10 Tubeless"],
      ["Headlamp", "LED"],
      ["Fuel Tank", "5.2 L"],
      ["Seat Height", "785 mm"],
      ["Ground Clearance", "145 mm"],
      ["Wheelbase", "1,280 mm"],
      ["Kerb Weight", "99 kg"],
      ["Special Features", "Blue Core Hybrid, Smart Motor Generator, Stop & Start System, Digital Instrument Cluster"]
    ],
 "YAMAHA RAY ZR 125 STREET RALLY": [
      ["Engine Type", "Air-cooled, 4-stroke, SOHC, 2-valve"],
      ["Displacement", "125 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric & Kick with Smart Motor Generator"],
      ["Transmission", "V-Belt Automatic"],
      ["Maximum Power", "8.2 PS @ 6,500 rpm"],
      ["Maximum Torque", "9.7 Nm @ 5,000 rpm"],
      ["Front Brake", "190 mm Disc"],
      ["Rear Brake", "Drum with UBS"],
      ["ABS / UBS", "Unified Braking System (UBS)"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Unit Swing"],
      ["Front Tyre", "90/90-12 Tubeless"],
      ["Rear Tyre", "110/90-10 Tubeless"],
      ["Headlamp", "LED"],
      ["Fuel Tank", "5.2 L"],
      ["Seat Height", "785 mm"],
      ["Ground Clearance", "145 mm"],
      ["Wheelbase", "1,280 mm"],
      ["Kerb Weight", "100 kg"],
      ["Special Features", "Blue Core Hybrid, Smart Motor Generator, Stop & Start System, Sporty Knuckle Guards"]
    ],
    "YAMAHA NMAX 155":[
  ["Engine Type","4-Stroke, Liquid-Cooled, SOHC, 4-Valves"],
  ["Displacement","155 cc"],
  ["Cylinder Arrangement","Single Cylinder"],
  ["Bore x Stroke","58.0 x 58.7 mm"],
  ["Compression Ratio","11.6:1"],
  ["Fuel","Petrol"],
  ["Fuel System","Fuel Injection"],
  ["Ignition System","TCI"],
  ["Starting System","Electric Starter"],
  ["Lubrication System","Wet Sump"],
  ["Maximum Power","11.1 kW @ 8000 rpm"],
  ["Maximum Torque","14.0 Nm @ 6500 rpm"],
  ["Transmission","V-Belt Automatic"],
  ["Fuel Consumption","2.3 L/100 km"],
  ["Top Speed","Approx. 120 km/h"],
  ["Front Brake","Hydraulic Single Disc"],
  ["Rear Brake","Hydraulic Single Disc"],
  ["ABS","ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Unit Swing"],
  ["Front Travel","100 mm"],
  ["Rear Travel","85 mm"],
  ["Front Tyre","110/70-13M/C 48P Tubeless"],
  ["Rear Tyre","130/70-13M/C 63P Tubeless"],
  ["Fuel Tank","7.1 L"],
  ["Seat Height","765 mm"],
  ["Wheelbase","1340 mm"],
  ["Ground Clearance","125 mm"],
  ["Overall Length","1935 mm"],
  ["Overall Width","740 mm"],
  ["Overall Height","1160 mm"],
  ["Weight","131 kg"]
],
    /* bajaj */
    "BAJAJ PLATINA 100 ES": [
      ["Engine Type", "4-Stroke, Single Cylinder, Air-Cooled, SOHC"],
      ["Displacement", "102 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Carburetor"],
      ["Starting Method", "Electric Start & Kick Start"],
      ["Transmission", "4-Speed Constant Mesh"],
      ["Maximum Power", "7.9 PS @ 7,500 rpm"],
      ["Maximum Torque", "8.34 Nm @ 5,500 rpm"],
      ["Front Brake", "110 mm Drum"],
      ["Rear Brake", "110 mm Drum"],
      ["ABS / CBS", "Anti-Skid Braking System"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "SNS Rear Suspension"],
      ["Front Tyre", "2.75 × 17 Tube Type"],
      ["Rear Tyre", "3.00 × 17 Tube Type"],
      ["Headlamp", "12V 35/35W"],
      ["Fuel Tank", "11 L"],
      ["Seat Height", "807 mm"],
      ["Ground Clearance", "200 mm"],
      ["Wheelbase", "1,255 mm"],
      ["Kerb Weight", "117 kg"]
    ],
    "BAJAJ CT 100 ES": [
      ["Engine Type", "4-Stroke, Single Cylinder, Air-Cooled, SOHC"],
      ["Displacement", "102 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Carburetor"],
      ["Starting Method", "Electric Start & Kick Start"],
      ["Transmission", "4-Speed Constant Mesh"],
      ["Maximum Power", "7.7 PS @ 7,500 rpm"],
      ["Maximum Torque", "8.24 Nm @ 5,500 rpm"],
      ["Front Brake", "110 mm Drum"],
      ["Rear Brake", "110 mm Drum"],
      ["ABS / CBS", "Drum Braking System"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "SNS Rear Suspension"],
      ["Front Tyre", "2.75 × 17 Tube Type"],
      ["Rear Tyre", "3.00 × 17 Tube Type"],
      ["Headlamp", "12V 35/35W"],
      ["Fuel Tank", "11 L"],
      ["Ground Clearance", "170 mm"],
      ["Wheelbase", "1,235 mm"],
      ["Kerb Weight", "108 kg"]
    ],
      "BAJAJ DISCOVER 125 DRL" :[
      ["Engine Type", "4-Stroke, Single Cylinder, DTS-i with ExhausTEC"],
      ["Displacement", "124.5 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Carburetor"],
      ["Starting Method", "Electric Start & Kick Start"],
      ["Transmission", "5-Speed Constant Mesh"],
      ["Maximum Power", "11 PS @ 7,500 rpm"],
      ["Maximum Torque", "11 Nm @ 5,500 rpm"],
      ["Front Brake", "200 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["ABS / CBS", "CBS"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Nitrox Rear Suspension"],
      ["Front Tyre", "2.75 × 17 Tubeless"],
      ["Rear Tyre", "3.00 × 17 Tubeless"],
      ["Headlamp", "12V 35/35W"],
      ["Fuel Tank", "8 L"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,305 mm"],
      ["Kerb Weight", "124.5 kg"]
    ],
      "BAJAJ PULSAR NS400Z" :[
      ["Engine Type", "4-Stroke, 4-Valve, DOHC, Liquid-Cooled"],
      ["Displacement", "373.27 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed Manual"],
      ["Maximum Power", "40 PS @ 8,500 rpm"],
      ["Maximum Torque", "35 Nm @ 7,000 rpm"],
      ["Clutch", "Assist & Slipper Clutch"],
      ["Front Brake", "320 mm Disc"],
      ["Rear Brake", "230 mm Disc"],
      ["ABS / CBS", "Dual-Channel ABS"],
      ["Front Suspension", "43 mm USD Fork"],
      ["Rear Suspension", "Monoshock with Nitrox, 6-Step Adjustable"],
      ["Front Tyre", "110/70-17 Tubeless"],
      ["Rear Tyre", "140/70-17 Tubeless"],
      ["Headlamp", "LED Projector"],
      ["Fuel Tank", "12 L"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,344 mm"],
      ["Kerb Weight", "174 kg"]
    ],
     "BAJAJ PULSAR N125" : [
      ["Engine Type", "Air-Cooled, Single Cylinder, 2-Valve"],
      ["Displacement", "124.59 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed Constant Mesh"],
      ["Maximum Power", "12 PS @ 8,500 rpm"],
      ["Maximum Torque", "11 Nm @ 6,000 rpm"],
      ["Front Brake", "240 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["ABS / CBS", "CBS"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Monoshock"],
      ["Front Tyre", "80/100-17 Tubeless"],
      ["Rear Tyre", "110/80-17 Tubeless"],
      ["Headlamp", "LED with AHO"],
      ["Fuel Tank", "9.1 L"],
      ["Seat Height", "795 mm"],
      ["Ground Clearance", "198 mm"],
      ["Wheelbase", "1,290 mm"],
      ["Kerb Weight", "Approx. 125 kg"]
    ],

       "BAJAJ PULSAR NS200": [
      ["Engine Type", "4-Stroke, SOHC, 4-Valve, Liquid-Cooled"],
      ["Displacement", "199.5 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed Constant Mesh"],
      ["Maximum Power", "23.5 PS @ 9,500 rpm"],
      ["Maximum Torque", "18.3 Nm @ 8,000 rpm"],
      ["Clutch", "Wet Multi-Plate"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "230 mm Disc"],
      ["ABS / CBS", "Dual-Channel ABS"],
      ["Front Suspension", "Telescopic Fork"],
      ["Rear Suspension", "Nitrox Monoshock"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "130/70-17 Tubeless"],
      ["Headlamp", "LED"],
      ["Fuel Tank", "12 L"],
      ["Ground Clearance", "168 mm"],
      ["Wheelbase", "1,363 mm"],
      ["Kerb Weight", "Approx. 158 kg"]
    ],
      "BAJAJ PULSAR N160 PREMIUM" : [
      ["Engine Type", "Single Cylinder, 4-Stroke, SOHC, 2-Valve, FI"],
      ["Displacement", "164.82 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed"],
      ["Maximum Power", "15.7 PS @ 8,750 rpm"],
      ["Maximum Torque", "14.65 Nm @ 6,750 rpm"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "230 mm Disc"],
      ["ABS / CBS", "Dual-Channel ABS"],
      ["Front Suspension", "37 mm Telescopic Fork"],
      ["Rear Suspension", "Monoshock with Nitrox"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "130/70-17 Tubeless"],
      ["Headlamp", "LED Projector with DRLs"],
      ["Fuel Tank", "14 L"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,358 mm"],
      ["Kerb Weight", "154 kg"]
    ],
     "BAJAJ PULSAR N160": [
      ["Engine Type", "Single Cylinder, 4-Stroke, SOHC, 2-Valve, FI"],
      ["Displacement", "164.82 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed"],
      ["Maximum Power", "15.7 PS @ 8,750 rpm"],
      ["Maximum Torque", "14.65 Nm @ 6,750 rpm"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "230 mm Disc"],
      ["ABS / CBS", "Dual-Channel ABS"],
      ["Front Suspension", "37 mm Telescopic Fork"],
      ["Rear Suspension", "Monoshock with Nitrox"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "130/70-17 Tubeless"],
      ["Headlamp", "LED Projector with DRLs"],
      ["Fuel Tank", "14 L"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,358 mm"],
      ["Kerb Weight", "154 kg"]
    ],
      "BAJAJ PULSAR RS200": [
      ["Engine Type", "4-Stroke, SOHC, 4-Valve, Liquid-Cooled, FI"],
      ["Displacement", "199.5 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed Manual"],
      ["Maximum Power", "24.5 PS @ 9,750 rpm"],
      ["Maximum Torque", "18.74 Nm @ 8,000 rpm"],
      ["Clutch", "Wet Multi-Plate"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "230 mm Disc"],
      ["ABS / CBS", "Dual-Channel ABS"],
      ["Front Suspension", "Telescopic with Anti-Friction Bush"],
      ["Rear Suspension", "Nitrox Monoshock"],
      ["Front Tyre", "110/70-17 Tubeless"],
      ["Rear Tyre", "140/70-17 Tubeless"],
      ["Headlamp", "LED Projector"],
      ["Fuel Tank", "13 L"],
      ["Seat Height", "810 mm"],
      ["Ground Clearance", "157 mm"],
      ["Wheelbase", "1,358 mm"],
      ["Kerb Weight", "167 kg"]
    ],
      "BAJAJ PULSAR NS125": [
      ["Engine Type", "4-Stroke, SOHC, 4-Valve, Air-Cooled"],
      ["Displacement", "124.45 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed Constant Mesh"],
      ["Maximum Power", "12 PS @ 8,500 rpm"],
      ["Maximum Torque", "11 Nm @ 7,000 rpm"],
      ["Front Brake", "240 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["ABS / CBS", "CBS / Single-Channel ABS depending on variant"],
      ["Front Suspension", "31 mm Telescopic Fork"],
      ["Rear Suspension", "Monoshock"],
      ["Front Tyre", "90/90-17 Tubeless"],
      ["Rear Tyre", "120/80-17 Tubeless"],
      ["Headlamp", "LED"],
      ["Fuel Tank", "12 L"],
      ["Seat Height", "805 mm"],
      ["Ground Clearance", "179 mm"],
      ["Wheelbase", "1,353 mm"],
      ["Kerb Weight", "144 kg"]
    ],
/* hero Bike */

   "HERO HF DELUXE": [
      ["Engine Type", "Air Cooled, 4-Stroke Single Cylinder, OHC"],
      ["Displacement", "97.2 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Carburetor"],
      ["Bore × Stroke", "50.0 × 49.5 mm"],
      ["Compression Ratio", "9.9:1"],
      ["Starting Method", "Kick / Self Start"],
      ["Ignition System", "Digital DC CDI"],
      ["Transmission", "4-Speed Constant Mesh"],
      ["Clutch", "Multi-Plate, Wet Type"],
      ["Maximum Power", "6.15 kW (8.36 PS) @ 8,000 rpm"],
      ["Maximum Torque", "8.05 Nm @ 5,000 rpm"],
      ["Front Brake", "130 mm Drum"],
      ["Rear Brake", "110 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic Shock Absorbers"],
      ["Rear Suspension", "Swing Arm with 2-Step Adjustable Hydraulic Shock Absorbers"],
      ["Front Tyre", "80/100-18 Tubeless"],
      ["Rear Tyre", "80/100-18 Tubeless"],
      ["Battery", "12V - 3Ah MF"],
      ["Headlamp", "12V 35/35W Halogen"],
      ["Fuel Tank", "9.5 L"],
      ["Seat Height", "805 mm"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,235 mm"],
      ["Kerb Weight", "110 kg"],
      ["Maximum Payload", "130 kg"]
    ],
    "HERO XTREME 125R": [
      ["Engine Type", "Air Cooled, 4-Stroke Single Cylinder"],
      ["Displacement", "124.7 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Bore × Stroke", "52.4 × 57.8 mm"],
      ["Starting Method", "Self / Kick Start"],
      ["Transmission", "5-Speed Constant Mesh"],
      ["Clutch", "Wet Multi-Plate"],
      ["Maximum Power", "11.4 bhp @ 8,250 rpm"],
      ["Maximum Torque", "10.5 Nm @ 6,500 rpm"],
      ["Acceleration 0-60 km/h", "Approx. 5.9 sec"],
      ["Front Brake", "240 mm Disc (CBS) / 276 mm Disc (ABS)"],
      ["Rear Brake", "130 mm Drum"],
      ["ABS / CBS", "Single-Channel ABS / CBS"],
      ["Front Suspension", "37 mm Conventional Telescopic Fork"],
      ["Rear Suspension", "Hydraulic Shock Absorber"],
      ["Front Tyre", "90/90-17 Tubeless"],
      ["Rear Tyre", "120/80-17 Tubeless"],
      ["Battery", "12V - 4Ah MF"],
      ["Starting System", "Self with i3s & Kick"],
      ["Fuel Tank", "10 L"],
      ["Seat Height", "794 mm"],
      ["Ground Clearance", "180 mm"],
      ["Wheelbase", "1,319 mm"],
      ["Kerb Weight", "136 kg"]
    ],
    "HERO HUNK 160R 4V": [
      ["Engine Type", "4-Stroke, Air-Oil Cooled, 4-Valve"],
      ["Displacement", "163.14 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Bore × Stroke", "66.5 × 47.0 mm"],
      ["Compression Ratio", "10.1:1"],
      ["Starting Method", "Self Start"],
      ["Transmission", "5-Speed Constant Mesh"],
      ["Clutch", "Multi-Plate Wet"],
      ["Maximum Power", "16.9 PS @ 8,500 rpm"],
      ["Maximum Torque", "14.6 Nm @ 6,500 rpm"],
      ["Front Brake", "276 mm Petal Disc"],
      ["Rear Brake", "220 mm Petal Disc"],
      ["ABS / CBS", "Single-Channel ABS"],
      ["Front Suspension", "KYB USD Forks, 37 mm"],
      ["Rear Suspension", "7-Step Adjustable Monoshock"],
      ["Front Tyre", "100/80-17 Tubeless"],
      ["Rear Tyre", "130/70 R17 Tubeless"],
      ["Battery", "12V - 6Ah VRLA"],
      ["Headlamp", "LED"],
      ["Fuel Tank", "12 L"],
      ["Seat Height", "795 mm"],
      ["Ground Clearance", "165 mm"],
      ["Wheelbase", "1,333 mm"],
      ["Kerb Weight", "145 kg"]
    ],
   "HERO XOOM 110": [
      ["Engine Type", "Air-Cooled, 4-Stroke, SI Engine"],
      ["Displacement", "110.9 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Bore × Stroke", "50.0 × 56.5 mm"],
      ["Compression Ratio", "10:1"],
      ["Starting Method", "Electric / Kick Start"],
      ["Transmission", "Variomatic Drive"],
      ["Clutch", "Dry, Centrifugal"],
      ["Maximum Power", "6.0 kW (8.05 bhp) @ 7,250 rpm"],
      ["Maximum Torque", "8.70 Nm @ 5,750 rpm"],
      ["Front Brake", "190 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic Shock Absorbers"],
      ["Rear Suspension", "Unit Swing with Spring Loaded Hydraulic Damper"],
      ["Front Tyre", "90/90-12"],
      ["Rear Tyre", "100/80-12"],
      ["Battery", "12V - 4Ah MF"],
      ["Headlamp", "LED Projector"],
      ["Fuel Tank", "5.2 L"],
      ["Seat Height", "770 mm"],
      ["Ground Clearance", "155 mm"],
      ["Wheelbase", "1,300 mm"],
      ["Kerb Weight", "109 kg"]
    ],
    "HERO XOOM 110 CE": [
      ["Engine Type", "Air-Cooled, 4-Stroke, SI Engine"],
      ["Displacement", "110.9 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Bore × Stroke", "50.0 × 56.5 mm"],
      ["Compression Ratio", "10:1"],
      ["Starting Method", "Electric / Kick Start"],
      ["Transmission", "Variomatic Drive"],
      ["Clutch", "Dry, Centrifugal"],
      ["Maximum Power", "6.0 kW (8.05 bhp) @ 7,250 rpm"],
      ["Maximum Torque", "8.70 Nm @ 5,750 rpm"],
      ["Front Brake", "190 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic Shock Absorbers"],
      ["Rear Suspension", "Unit Swing with Spring Loaded Hydraulic Damper"],
      ["Front Tyre", "90/90-12"],
      ["Rear Tyre", "100/80-12"],
      ["Battery", "12V - 4Ah MF"],
      ["Headlamp", "LED Projector"],
      ["Fuel Tank", "5.2 L"],
      ["Seat Height", "770 mm"],
      ["Ground Clearance", "155 mm"],
      ["Wheelbase", "1,300 mm"],
      ["Kerb Weight", "109 kg"]
    ],
  "HERO XOOM 100 FI": [
      ["Engine Type", "Air-Cooled, 4-Stroke, SI Engine"],
      ["Displacement", "110.9 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Bore × Stroke", "50.0 × 56.5 mm"],
      ["Compression Ratio", "10:1"],
      ["Starting Method", "Electric / Kick Start"],
      ["Transmission", "Variomatic Drive"],
      ["Clutch", "Dry, Centrifugal"],
      ["Maximum Power", "6.0 kW @ 7,250 rpm"],
      ["Maximum Torque", "8.70 Nm @ 5,750 rpm"],
      ["Front Brake", "190 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic Shock Absorbers"],
      ["Rear Suspension", "Unit Swing with Spring Loaded Hydraulic Damper"],
      ["Front Tyre", "90/90-12"],
      ["Rear Tyre", "100/80-12"],
      ["Battery", "12V - 4Ah MF"],
      ["Fuel Tank", "5.2 L"],
      ["Seat Height", "770 mm"],
      ["Ground Clearance", "155 mm"],
      ["Wheelbase", "1,300 mm"],
      ["Kerb Weight", "108 kg"]
    ],
 "HERO XOOM 125R": [
      ["Engine Type", "Air Cooled, 4-Stroke, SI Engine"],
      ["Displacement", "124.6 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Bore × Stroke", "52.4 × 57.8 mm"],
      ["Compression Ratio", "10±0.2:1"],
      ["Starting Method", "Electric / Kick Start"],
      ["Transmission", "CVT"],
      ["Clutch", "Dry, Centrifugal"],
      ["Maximum Power", "7.3 kW (9.8 bhp) @ 7,250 rpm"],
      ["Maximum Torque", "10.4 Nm @ 6,000 rpm"],
      ["Acceleration 0-60 km/h", "7.6 sec"],
      ["Front Brake", "220 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic Shock Absorber"],
      ["Rear Suspension", "Single Side Shock Absorber"],
      ["Front Tyre", "110/80-14"],
      ["Rear Tyre", "120/70-14"],
      ["Battery", "12V - 4Ah"],
      ["Fuel Tank", "5 L"],
      ["Seat Height", "777 mm"],
      ["Ground Clearance", "164 mm"],
      ["Wheelbase", "1,327 mm"],
      ["Kerb Weight", "121 kg"]
    ],

/* KTM Bike */
    "KTM 390 ADVENTURE X": [
      ["Engine Type", "1-Cylinder, 4-Stroke, DOHC, Liquid-Cooled"],
      ["Displacement", "398.7 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Bosch Electronic Fuel Injection"],
      ["Engine Management", "Bosch EMS with Ride-by-Wire"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed"],
      ["Clutch", "PASC Slipper Clutch"],
      ["Maximum Power", "45 PS"],
      ["Maximum Torque", "39 Nm"],
      ["Front Brake", "320 mm Disc"],
      ["Rear Brake", "240 mm Disc"],
      ["ABS", "Offroad ABS"],
      ["Front Suspension", "WP APEX 43 mm Open Cartridge"],
      ["Rear Suspension", "WP APEX Emulsion"],
      ["Front Suspension Travel", "200 mm"],
      ["Rear Suspension Travel", "200 mm"],
      ["Front Tyre", "100/90-19"],
      ["Rear Tyre", "140/80-17"],
      ["Fuel Tank", "14 L"],
      ["Seat Height", "825 mm"],
      ["Ground Clearance", "232 mm"],
      ["Wheelbase", "1,464 mm"],
      ["Kerb Weight", "Approx. 176 kg Fully Fueled"]
    ],
 "KTM DUKE 160": [
      ["Engine Type", "1-Cylinder, 4-Stroke, Liquid-Cooled"],
      ["Displacement", "158.8 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Electronic Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed"],
      ["Clutch", "Wet Multi-Plate"],
      ["Maximum Power", "Approx. 19 PS"],
      ["Maximum Torque", "Approx. 17 Nm"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "230 mm Disc"],
      ["ABS", "Dual-Channel ABS"],
      ["Front Suspension", "WP APEX USD Fork"],
      ["Rear Suspension", "WP APEX Monoshock"],
      ["Front Suspension Travel", "Approx. 150 mm"],
      ["Rear Suspension Travel", "Approx. 150 mm"],
      ["Front Tyre", "100/80-17"],
      ["Rear Tyre", "130/70-17"],
      ["Fuel Tank", "Approx. 13.4 L"],
      ["Seat Height", "Approx. 800 mm"],
      ["Ground Clearance", "Approx. 176 mm"],
      ["Wheelbase", "Approx. 1,357 mm"],
      ["Kerb Weight", "Approx. 151 kg"]
    ],
      "KTM DUKE 250": [
      ["Engine Type", "1-Cylinder, 4-Stroke, DOHC, Liquid-Cooled"],
      ["Displacement", "249.07 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Bosch Electronic Fuel Injection"],
      ["Engine Management", "Bosch EMS with Ride-by-Wire"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed"],
      ["Clutch", "PASC Slipper Clutch"],
      ["Maximum Power", "31 PS"],
      ["Maximum Torque", "25 Nm"],
      ["Front Brake", "320 mm Disc"],
      ["Rear Brake", "240 mm Disc"],
      ["ABS", "Dual-Channel ABS"],
      ["Front Suspension", "WP APEX 43 mm USD Fork"],
      ["Rear Suspension", "WP APEX Monoshock"],
      ["Front Suspension Travel", "150 mm"],
      ["Rear Suspension Travel", "150 mm"],
      ["Front Tyre", "110/70-17"],
      ["Rear Tyre", "150/60-17"],
      ["Fuel Tank", "15 L"],
      ["Seat Height", "800 mm"],
      ["Ground Clearance", "176 mm"],
      ["Wheelbase", "1,357 mm"],
      ["Kerb Weight", "Approx. 165 kg Fully Fueled"]
    ],
   /* TVS Bike */ 

 "TVS RAIDER": [
      ["Engine Type", "Air & Oil Cooled, Single Cylinder, SI"],
      ["Displacement", "124.76 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "ETFi"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed Gearbox"],
      ["Maximum Power", "11.2 BHP @ 7,500 rpm"],
      ["Maximum Torque", "11.2 Nm @ 6,000 rpm"],
      ["Front Brake", "240 mm Disc"],
      ["Rear Brake", "130 mm Drum with SBT"],
      ["Front Suspension", "Telescopic"],
      ["Rear Suspension", "5-Step Adjustable Gas-Charged Monoshock"],
      ["Front Tyre", "80/100-17 Tubeless"],
      ["Rear Tyre", "100/90-17 Tubeless"],
      ["Fuel Tank", "10 L"],
      ["Ground Clearance", "180 mm"],
      ["Wheelbase", "1,326 mm"],
      ["Kerb Weight", "123 kg"]
    ],
"TVS RAIDER SX": [
      ["Engine Type", "Air & Oil Cooled, Single Cylinder, SI"],
      ["Displacement", "124.8 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed"],
      ["Maximum Power", "8.37 kW @ 7,500 rpm"],
      ["Maximum Torque", "11.2 Nm @ 6,000 rpm"],
      ["Valves", "3 Valves"],
      ["Front Brake", "240 mm Disc"],
      ["Rear Brake", "130 mm Drum with SBT"],
      ["Front Suspension", "Telescopic"],
      ["Rear Suspension", "5-Step Adjustable Gas-Charged Monoshock"],
      ["Front Tyre", "80/100-17 Tubeless"],
      ["Rear Tyre", "100/90-17 Tubeless"],
      ["Fuel Tank", "10 L"],
      ["Ground Clearance", "180 mm"],
      ["Wheelbase", "1,326 mm"],
      ["Kerb Weight", "123 kg"]
    ],
  "TVS SPORT 110": [
      ["Engine Type", "Single Cylinder, 4-Stroke, Air-Cooled"],
      ["Displacement", "109.7 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric / Kick Start"],
      ["Transmission", "4-Speed"],
      ["Maximum Power", "6.03 kW"],
      ["Maximum Torque", "8.7 Nm"],
      ["Front Brake", "Drum"],
      ["Rear Brake", "Drum"],
      ["Front Suspension", "Telescopic Hydraulic"],
      ["Rear Suspension", "Twin Shock Absorbers"],
      ["Front Tyre", "2.75-17"],
      ["Rear Tyre", "3.00-17"],
      ["Fuel Tank", "10 L"],
      ["Ground Clearance", "175 mm"],
      ["Wheelbase", "1,260 mm"],
      ["Kerb Weight", "112 kg"]
    ],
"TVS APACHE RTR 160 4V": [
      ["Engine Type", "4-Stroke, Oil-Cooled, SOHC, Fuel Injection"],
      ["Displacement", "159.7 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Bosch Closed-Loop Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed"],
      ["Maximum Power", "17.55 PS @ 9,250 rpm"],
      ["Maximum Torque", "14.73 Nm @ 7,500 rpm"],
      ["Ride Modes", "Sport / Urban / Rain"],
      ["Maximum Speed", "114 km/h"],
      ["Front Brake", "270 mm Petal Disc"],
      ["Rear Brake", "240 mm Petal Disc"],
      ["ABS", "Dual-Channel ABS"],
      ["Front Suspension", "37 mm USD Fork"],
      ["Rear Suspension", "Monoshock"],
      ["Front Tyre", "90/90-17 Tubeless"],
      ["Rear Tyre", "130/70 R17 Tubeless Radial"],
      ["Fuel Tank", "12 L"],
      ["Seat Height", "800 mm"],
      ["Ground Clearance", "180 mm"],
      ["Wheelbase", "1,357 mm"],
      ["Kerb Weight", "146 kg"]
    ],
"TVS APACHE RTR 200 4V": [
      ["Engine Type", "4-Stroke, Oil-Cooled, Fuel Injection"],
      ["Displacement", "197.75 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Bosch Closed-Loop Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed"],
      ["Maximum Power", "20.8 PS @ 9,000 rpm"],
      ["Maximum Torque", "17.25 Nm @ 7,250 rpm"],
      ["Ride Modes", "Sport / Urban / Rain"],
      ["Front Brake", "270 mm Petal Disc"],
      ["Rear Brake", "240 mm Petal Disc"],
      ["ABS", "Dual-Channel ABS"],
      ["Front Suspension", "Telescopic Fork with Preload Adjuster"],
      ["Rear Suspension", "Monotube Monoshock"],
      ["Front Tyre", "90/90-17 Tubeless"],
      ["Rear Tyre", "130/70 R17 Tubeless Radial"],
      ["Fuel Tank", "12 L"],
      ["Seat Height", "800 mm"],
      ["Ground Clearance", "180 mm"],
      ["Wheelbase", "1,353 mm"],
      ["Kerb Weight", "152 kg"]
    ],
  "TVS APACHE RTR 310": [
      ["Engine Type", "Single Cylinder, 4-Stroke, Fuel Injected, Liquid-Cooled"],
      ["Displacement", "312.12 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Closed-Loop EFI"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed"],
      ["Maximum Power", "35.6 PS @ 9,700 rpm"],
      ["Maximum Torque", "28.7 Nm @ 6,650 rpm"],
      ["Ride Modes", "Sport / Track / SuperMoto / Urban / Rain"],
      ["Maximum Speed", "150 km/h"],
      ["0-60 km/h", "2.81 sec"],
      ["0-100 km/h", "7.19 sec"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "240 mm Disc"],
      ["ABS", "Dual-Channel ABS"],
      ["Front Suspension", "41 mm USD Fork"],
      ["Rear Suspension", "Adjustable Monoshock"],
      ["Front Tyre", "110/70 R17 Tubeless"],
      ["Rear Tyre", "150/60 R17 Tubeless"],
      ["Fuel Tank", "11 L"],
      ["Seat Height", "800 mm"],
      ["Ground Clearance", "180 mm"],
      ["Wheelbase", "1,358 mm"],
      ["Kerb Weight", "169 kg"]
    ],
"TVS APACHE RR 310": [
      ["Engine Type", "Single Cylinder, 4-Stroke, Liquid-Cooled"],
      ["Displacement", "312.2 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "6-Speed"],
      ["Maximum Power", "34 PS"],
      ["Maximum Torque", "27.3 Nm"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "240 mm Disc"],
      ["ABS", "Dual-Channel ABS"],
      ["Front Suspension", "USD Fork"],
      ["Rear Suspension", "Monoshock"],
      ["Front Tyre", "110/70 R17 Tubeless"],
      ["Rear Tyre", "150/60 R17 Tubeless"],
      ["Fuel Tank", "11 L"],
      ["Seat Height", "800 mm"],
      ["Ground Clearance", "180 mm"],
      ["Wheelbase", "1,365 mm"],
      ["Kerb Weight", "174 kg"]
    ],
 "TVS RONIN": [
      ["Engine Type", "Single Cylinder, 4-Stroke, 4-Valve, SOHC"],
      ["Displacement", "225.9 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Cooling System", "Oil Cooled"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "5-Speed"],
      ["Maximum Power", "20.4 PS @ 7,750 rpm"],
      ["Maximum Torque", "19.93 Nm @ 3,750 rpm"],
      ["Clutch", "Assist & Slipper Clutch"],
      ["Ride Modes", "Rain / Urban"],
      ["Front Brake", "300 mm Disc"],
      ["Rear Brake", "240 mm Disc"],
      ["ABS", "Dual-Channel ABS"],
      ["Front Suspension", "41 mm USD Fork"],
      ["Rear Suspension", "7-Step Adjustable Monoshock"],
      ["Front Tyre", "110/70-17 Tubeless"],
      ["Rear Tyre", "130/70-17 Tubeless"],
      ["Fuel Tank", "14 L"],
      ["Seat Height", "795 mm"],
      ["Ground Clearance", "181 mm"],
      ["Wheelbase", "1,357 mm"],
      ["Kerb Weight", "160 kg"]
    ],
 "TVS NTORQ 125": [
      ["Engine Type", "3-Valve, Single Cylinder, 4-Stroke, Air-Cooled"],
      ["Displacement", "124.79 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric / Kick Start"],
      ["Transmission", "CVT Automatic"],
      ["Maximum Power", "6.9 kW"],
      ["Maximum Torque", "10.5 Nm"],
      ["Clutch", "Automatic Centrifugal"],
      ["Front Brake", "220 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic"],
      ["Rear Suspension", "Coil Spring Hydraulic"],
      ["Front Tyre", "100/80-12 Tubeless"],
      ["Rear Tyre", "100/80-12 Tubeless"],
      ["Fuel Tank", "5.8 L"],
      ["Top Speed", "Approx. 95 km/h"],
      ["Kerb Weight", "116 kg"]
    ],

"TVS NTORQ 125 RE": [
      ["Engine Type", "3-Valve, Single Cylinder, 4-Stroke, Air-Cooled"],
      ["Displacement", "124.79 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "CVT Automatic"],
      ["Maximum Power", "6.9 kW"],
      ["Maximum Torque", "10.5 Nm"],
      ["Front Brake", "220 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic"],
      ["Rear Suspension", "Coil Spring Hydraulic"],
      ["Front Tyre", "100/80-12 Tubeless"],
      ["Rear Tyre", "100/80-12 Tubeless"],
      ["Fuel Tank", "5.8 L"],
      ["Kerb Weight", "118 kg"]
    ],
 "TVS NTORQ 125 XP FI": [
      ["Engine Type", "3-Valve, Single Cylinder, 4-Stroke, Air-Cooled, FI"],
      ["Displacement", "124.8 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "CVT Automatic"],
      ["Maximum Power", "7.5 kW @ 7,000 rpm"],
      ["Maximum Torque", "11.5 Nm @ 5,500 rpm"],
      ["Ride Modes", "Street / Race"],
      ["0-60 km/h", "7.9 sec"],
      ["Top Speed", "98 km/h"],
      ["Front Brake", "220 mm Rotopetal Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic"],
      ["Rear Suspension", "Coil Spring Hydraulic"],
      ["Front Tyre", "100/80-12 Tubeless"],
      ["Rear Tyre", "110/80-12 Tubeless"],
      ["Fuel Tank", "5.8 L"],
      ["Ground Clearance", "155 mm"],
      ["Wheelbase", "1,285 mm"],
      ["Kerb Weight", "111 kg"]
    ],
  "TVS NTORQ 125 DISC FI": [
      ["Engine Type", "3-Valve, Single Cylinder, 4-Stroke, Air-Cooled, FI"],
      ["Displacement", "124.8 cc"],
      ["Fuel", "Petrol"],
      ["Fuel System", "Fuel Injection"],
      ["Starting Method", "Electric Start"],
      ["Transmission", "CVT Automatic"],
      ["Maximum Power", "7.0 kW"],
      ["Maximum Torque", "10.5 Nm"],
      ["Front Brake", "220 mm Disc"],
      ["Rear Brake", "130 mm Drum"],
      ["Front Suspension", "Telescopic Hydraulic"],
      ["Rear Suspension", "Coil Spring Hydraulic"],
      ["Front Tyre", "100/80-12 Tubeless"],
      ["Rear Tyre", "100/80-12 Tubeless"],
      ["Fuel Tank", "5.8 L"],
      ["Kerb Weight", "111 kg"]
    ],
 "TVS JUPITER 110": [
      ["Engine Type", "Single Cylinder, 4-Stroke"],
      ["Displacement", "113.3 cc"],
      ["Fuel", "Petrol"],
      ["Starting Method", "Electric Silent Start"],
      ["Transmission", "CVT Automatic"],
      ["Maximum Power", "5.9 kW @ 6,500 rpm"],
      ["Maximum Torque", "9.8 Nm @ 5,000 rpm with Assist"],
      ["Valves", "2"],
      ["Front Suspension", "Telescopic Hydraulic"],
      ["Rear Suspension", "Twin-Tube Emulsion, 3-Step Adjustable"],
      ["Front Brake", "220 mm Disc / 130 mm Drum"],
      ["Rear Brake", "Drum"],
      ["Front Tyre", "90/90-12 Tubeless"],
      ["Rear Tyre", "90/90-12 Tubeless"],
      ["Fuel Tank", "5.1 L"],
      ["Ground Clearance", "163 mm"],
      ["Wheelbase", "1,275 mm"],
      ["Kerb Weight", "105 kg"],
      ["Under Seat Storage", "33 L"]
    ],
 "TVS iQUBE": [
      ["Vehicle Type", "Electric Scooter"],
      ["Motor Type", "Hub-Mounted Electric Motor"],
      ["Rated Power", "3.34 kW"],
      ["Battery", "Lithium-Ion"],
      ["Battery Capacity", "3.5 kWh"],
      ["Fuel", "Electric"],
      ["Maximum Speed", "82 km/h"],
      ["Real World Range", "115 km"],
      ["0-40 km/h", "4.2 sec"],
      ["Charging Time", "Approx. 3 hours (0-80%)"],
      ["Front Brake", "Disc"],
      ["Rear Brake", "Drum"],
      ["Front Suspension", "Telescopic"],
      ["Rear Suspension", "Twin Shock"],
      ["Wheel Type", "Alloy"],
      ["Battery Protection", "IP67"],
      ["Connectivity", "TVS SmartXonnect"],
      ["Warranty", "5 Years / 60,000 km"]
    ],
     "TVS ORBITER": [
      ["Vehicle Type", "Electric Scooter"],
      ["Motor Type", "BLDC"],
      ["Motor Capacity", "1.80 kW"],
      ["Battery Type", "Lithium-Ion"],
      ["Battery Capacity", "3.1 kWh"],
      ["Maximum Torque", "10.5 Nm @ 5,500 rpm"],
      ["Acceleration", "6.8 sec"],
      ["Real World Range", "115 km"],
      ["IDC Range", "158 km"],
      ["Charging Time (0-80%)", "2 hr 45 min"],
      ["Maximum Speed", "60 km/h"],
      ["Front Brake", "Drum"],
      ["Rear Brake", "Drum"],
      ["Braking System", "SBS"],
      ["Front Suspension", "Telescopic"],
      ["Rear Suspension", "Dual Shock"],
      ["Front Tyre", "90/80-14"],
      ["Rear Tyre", "90/90-12"],
      ["Ground Clearance", "165 mm"],
      ["Seat Height", "760 mm"],
      ["Boot Space", "34 L"],
      ["Battery Protection", "IP67"]
    ],
   "TVS XL100 HEAVY DUTY": [
      ["Engine Type", "Single Cylinder, 4-Stroke, Air-Cooled SI"],
      ["Displacement", "99.7 cc"],
      ["Fuel", "Petrol"],
      ["Starting Method", "i-Touchstart / Electric Start"],
      ["Transmission", "Automatic"],
      ["Maximum Power", "3.2 kW @ 6,000 rpm"],
      ["Maximum Torque", "6.5 Nm @ 3,500 rpm"],
      ["Front Brake", "80 mm Drum"],
      ["Rear Brake", "110 mm Drum"],
      ["Front Suspension", "Hydraulic"],
      ["Rear Suspension", "Swing Arm"],
      ["Front Tyre", "2.50 × 16 - 6PR"],
      ["Rear Tyre", "2.50 × 16 - 6PR"],
      ["Fuel Tank", "4 L"],
      ["Wheelbase", "1,228 mm"],
      ["Length", "1,895 mm"],
      ["Width", "670 mm"],
      ["Height", "1,077 mm"]
    ],
/* BMW Bike */
"BMW CE 04":[
  ["Motor Type","Liquid-Cooled Permanent Magnet Synchronous Motor"],
  ["Battery","8.5 kWh"],
  ["Fuel","Electric"],
  ["Maximum Power","42 hp"],
  ["Maximum Torque","62 Nm"],
  ["Transmission","1-Speed Automatic"],
  ["Top Speed","120 km/h"],
  ["Range","Up to 130 km"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Single-Sided Swingarm"],
  ["Seat Height","780 mm"],
  ["Wheelbase","1675 mm"],
  ["Weight","231 kg"]
],

"BMW CE 02":[
  ["Motor Type","Electric Synchronous Motor"],
  ["Battery","4.0 kWh"],
  ["Fuel","Electric"],
  ["Maximum Power","15 hp"],
  ["Maximum Torque","55 Nm"],
  ["Transmission","Automatic"],
  ["Top Speed","95 km/h"],
  ["Range","Up to 95 km"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Double-Sided Swingarm"],
  ["Seat Height","750 mm"],
  ["Weight","132 kg"]
],

"BMW C 400 X":[
  ["Engine Type","Single-Cylinder, Liquid-Cooled"],
  ["Displacement","350 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","34 hp"],
  ["Maximum Torque","35 Nm"],
  ["Transmission","CVT Automatic"],
  ["Top Speed","139 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Dual Spring Struts"],
  ["Fuel Tank","12.8 L"],
  ["Seat Height","775 mm"],
  ["Weight","206 kg"]
],

"BMW C 400 GT":[
  ["Engine Type","Single-Cylinder, Liquid-Cooled"],
  ["Displacement","350 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","34 hp"],
  ["Maximum Torque","35 Nm"],
  ["Transmission","CVT Automatic"],
  ["Top Speed","139 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Dual Spring Struts"],
  ["Fuel Tank","12.8 L"],
  ["Seat Height","775 mm"],
  ["Weight","214 kg"]
],

"BMW G 310 R":[
  ["Engine Type","Single-Cylinder, Liquid-Cooled"],
  ["Displacement","313 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","34 hp"],
  ["Maximum Torque","28 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","143 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Dual-Channel ABS"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","11 L"],
  ["Seat Height","785 mm"],
  ["Wheelbase","1380 mm"],
  ["Weight","164 kg"]
],

"BMW G 310 GS":[
  ["Engine Type","Single-Cylinder, Liquid-Cooled"],
  ["Displacement","313 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","34 hp"],
  ["Maximum Torque","28 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","143 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Dual-Channel ABS"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","11 L"],
  ["Seat Height","835 mm"],
  ["Ground Clearance","220 mm"],
  ["Weight","175 kg"]
],

"BMW G 310 RR":[
  ["Engine Type","Single-Cylinder, Liquid-Cooled"],
  ["Displacement","312 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","34 hp"],
  ["Maximum Torque","27.3 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","160 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Dual-Channel ABS"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","11 L"],
  ["Seat Height","811 mm"],
  ["Wheelbase","1360 mm"],
  ["Weight","174 kg"]
],

"BMW F 450 GS":[
  ["Engine Type","2-Cylinder, Liquid-Cooled"],
  ["Displacement","450 cc"],
  ["Fuel","Petrol"],
  ["Transmission","6-Speed"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","Approx. 14 L"],
  ["Seat Height","870 mm"]
],

"BMW F 800 GS":[
  ["Engine Type","2-Cylinder, Liquid-Cooled"],
  ["Displacement","895 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","87 hp"],
  ["Maximum Torque","91 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","15 L"],
  ["Seat Height","815 mm"],
  ["Ground Clearance","220 mm"],
  ["Weight","227 kg"]
],

"BMW F 900 R":[
  ["Engine Type","2-Cylinder, Liquid-Cooled"],
  ["Displacement","895 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","105 hp"],
  ["Maximum Torque","93 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","13 L"],
  ["Seat Height","815 mm"],
  ["Wheelbase","1518 mm"],
  ["Weight","208 kg"]
],

"BMW F 900 XR":[
  ["Engine Type","2-Cylinder, Liquid-Cooled"],
  ["Displacement","895 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","105 hp"],
  ["Maximum Torque","93 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","15.5 L"],
  ["Seat Height","820 mm"],
  ["Wheelbase","1521 mm"],
  ["Weight","219 kg"]
],

"BMW F 900 GS":[
  ["Engine Type","2-Cylinder, Liquid-Cooled"],
  ["Displacement","895 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","105 hp"],
  ["Maximum Torque","93 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","14.5 L"],
  ["Seat Height","870 mm"],
  ["Ground Clearance","246 mm"],
  ["Weight","219 kg"]
],

"BMW F 900 GS Adventure":[
  ["Engine Type","2-Cylinder, Liquid-Cooled"],
  ["Displacement","895 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","105 hp"],
  ["Maximum Torque","93 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","23 L"],
  ["Seat Height","875 mm"],
  ["Ground Clearance","239 mm"],
  ["Weight","246 kg"]
],

"BMW R 12":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1170 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","95 hp"],
  ["Maximum Torque","110 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","14 L"],
  ["Seat Height","754 mm"],
  ["Wheelbase","1520 mm"],
  ["Weight","227 kg"]
],

"BMW R 12 nineT":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1170 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","109 hp"],
  ["Maximum Torque","115 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16 L"],
  ["Seat Height","795 mm"],
  ["Wheelbase","1487 mm"],
  ["Weight","222 kg"]
],

"BMW R 12 S":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1170 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","109 hp"],
  ["Maximum Torque","115 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16 L"],
  ["Seat Height","795 mm"],
  ["Wheelbase","1487 mm"],
  ["Weight","215 kg"]
],

"BMW R 12 G/S":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1170 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","109 hp"],
  ["Maximum Torque","115 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","15 L"],
  ["Seat Height","860 mm"],
  ["Ground Clearance","240 mm"],
  ["Weight","229 kg"]
],

"BMW R 1300 R":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1300 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","145 hp"],
  ["Maximum Torque","149 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Telelever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","17 L"],
  ["Seat Height","820 mm"],
  ["Wheelbase","1514 mm"],
  ["Weight","239 kg"]
],

"BMW R 1300 RS":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1300 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","145 hp"],
  ["Maximum Torque","149 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Telelever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","17 L"],
  ["Seat Height","813 mm"],
  ["Wheelbase","1514 mm"],
  ["Weight","239 kg"]
],

"BMW R 1300 RT":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1300 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","145 hp"],
  ["Maximum Torque","149 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Telelever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","24 L"],
  ["Seat Height","820 mm"],
  ["Wheelbase","1485 mm"],
  ["Weight","281 kg"]
],

"BMW R 1300 GS":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1300 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","145 hp"],
  ["Maximum Torque","149 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Telelever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","19 L"],
  ["Seat Height","850 mm"],
  ["Ground Clearance","239 mm"],
  ["Wheelbase","1518 mm"],
  ["Weight","239 kg"]
],

"BMW R 1300 GS Adventure":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1300 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","145 hp"],
  ["Maximum Torque","149 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Telelever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","30 L"],
  ["Seat Height","870 mm"],
  ["Ground Clearance","230 mm"],
  ["Wheelbase","1534 mm"],
  ["Weight","269 kg"]
],

"BMW R 18":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1802 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","91 hp"],
  ["Maximum Torque","158 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16 L"],
  ["Seat Height","720 mm"],
  ["Wheelbase","1695 mm"],
  ["Weight","345 kg"]
],

"BMW R 18 Classic":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1802 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","91 hp"],
  ["Maximum Torque","158 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16 L"],
  ["Seat Height","710 mm"],
  ["Weight","365 kg"]
],

"BMW R 18 Roctane":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1802 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","91 hp"],
  ["Maximum Torque","158 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","17 L"],
  ["Seat Height","720 mm"],
  ["Weight","374 kg"]
],

"BMW R 18 B":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1802 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","91 hp"],
  ["Maximum Torque","158 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","24 L"],
  ["Seat Height","720 mm"],
  ["Weight","398 kg"]
],

"BMW R 18 Transcontinental":[
  ["Engine Type","2-Cylinder, Boxer"],
  ["Displacement","1802 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","91 hp"],
  ["Maximum Torque","158 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","24 L"],
  ["Seat Height","740 mm"],
  ["Weight","427 kg"]
],

"BMW S 1000 R":[
  ["Engine Type","4-Cylinder, Liquid-Cooled"],
  ["Displacement","999 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","170 hp"],
  ["Maximum Torque","114 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","250 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16.5 L"],
  ["Seat Height","830 mm"],
  ["Wheelbase","1450 mm"],
  ["Weight","199 kg"]
],

"BMW S 1000 RR":[
  ["Engine Type","4-Cylinder, Liquid-Cooled"],
  ["Displacement","999 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","212 hp"],
  ["Maximum Torque","113 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","314 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad Race ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16.5 L"],
  ["Seat Height","824 mm"],
  ["Wheelbase","1457 mm"],
  ["Weight","197 kg"]
],

"BMW S 1000 XR":[
  ["Engine Type","4-Cylinder, Liquid-Cooled"],
  ["Displacement","999 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","170 hp"],
  ["Maximum Torque","114 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","253 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","20 L"],
  ["Seat Height","850 mm"],
  ["Wheelbase","1550 mm"],
  ["Weight","227 kg"]
],

"BMW M 1000 R":[
  ["Engine Type","4-Cylinder, Liquid-Cooled"],
  ["Displacement","999 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","210 hp"],
  ["Maximum Torque","113 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","280 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16.5 L"],
  ["Seat Height","850 mm"],
  ["Wheelbase","1450 mm"],
  ["Weight","199 kg"]
],

"BMW M 1000 RR":[
  ["Engine Type","4-Cylinder, Liquid-Cooled"],
  ["Displacement","999 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","212 hp"],
  ["Maximum Torque","113 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","314 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad Race ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","16.5 L"],
  ["Seat Height","832 mm"],
  ["Wheelbase","1457 mm"],
  ["Weight","194 kg"]
],

"BMW M 1000 XR":[
  ["Engine Type","4-Cylinder, Liquid-Cooled"],
  ["Displacement","999 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","201 hp"],
  ["Maximum Torque","113 Nm"],
  ["Transmission","6-Speed"],
  ["Top Speed","278 km/h"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Upside-Down Fork"],
  ["Rear Suspension","Central Spring Strut"],
  ["Fuel Tank","20 L"],
  ["Seat Height","850 mm"],
  ["Wheelbase","1530 mm"],
  ["Weight","223 kg"]
],

"BMW K 1600 GT":[
  ["Engine Type","6-Cylinder, In-Line"],
  ["Displacement","1649 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","160 hp"],
  ["Maximum Torque","180 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Duolever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","26.5 L"],
  ["Seat Height","810 mm"],
  ["Weight","319 kg"]
],

"BMW K 1600 GTL":[
  ["Engine Type","6-Cylinder, In-Line"],
  ["Displacement","1649 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","160 hp"],
  ["Maximum Torque","180 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Duolever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","26.5 L"],
  ["Seat Height","750 mm"],
  ["Weight","358 kg"]
],

"BMW K 1600 B":[
  ["Engine Type","6-Cylinder, In-Line"],
  ["Displacement","1649 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","160 hp"],
  ["Maximum Torque","180 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Duolever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","26.5 L"],
  ["Seat Height","750 mm"],
  ["Weight","344 kg"]
],

"BMW K 1600 Grand America":[
  ["Engine Type","6-Cylinder, In-Line"],
  ["Displacement","1649 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","160 hp"],
  ["Maximum Torque","180 Nm"],
  ["Transmission","6-Speed"],
  ["Front Brake","Twin Disc"],
  ["Rear Brake","Single Disc"],
  ["ABS","BMW Motorrad ABS Pro"],
  ["Front Suspension","Duolever"],
  ["Rear Suspension","Paralever"],
  ["Fuel Tank","26.5 L"],
  ["Seat Height","750 mm"],
  ["Weight","370 kg"]
],
/* SUSUKI Bike */
"Suzuki Gixxer":[
  ["Engine Type","4-Stroke, 1-Cylinder, Air-Cooled"],
  ["Displacement","155 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","13.6 PS @ 8000 rpm"],
  ["Maximum Torque","13.8 Nm @ 6000 rpm"],
  ["Transmission","5-Speed Manual"],
  ["Top Speed","115 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Single-Channel ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm, Monoshock"],
  ["Fuel Tank","12 L"],
  ["Seat Height","795 mm"],
  ["Wheelbase","1335 mm"],
  ["Ground Clearance","160 mm"],
  ["Weight","141 kg"]
],

"Suzuki Gixxer SF":[
  ["Engine Type","4-Stroke, 1-Cylinder, Air-Cooled"],
  ["Displacement","155 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","13.6 PS @ 8000 rpm"],
  ["Maximum Torque","13.8 Nm @ 6000 rpm"],
  ["Transmission","5-Speed Manual"],
  ["Top Speed","125 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Single-Channel ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm, Monoshock"],
  ["Fuel Tank","12 L"],
  ["Seat Height","795 mm"],
  ["Wheelbase","1340 mm"],
  ["Ground Clearance","160 mm"],
  ["Weight","148 kg"]
],

"Suzuki Gixxer 250":[
  ["Engine Type","4-Stroke, 1-Cylinder, Oil-Cooled"],
  ["Displacement","249 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","26.5 PS @ 9300 rpm"],
  ["Maximum Torque","22.2 Nm @ 7300 rpm"],
  ["Transmission","6-Speed Manual"],
  ["Top Speed","150 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Dual-Channel ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm, Monoshock"],
  ["Fuel Tank","12 L"],
  ["Seat Height","800 mm"],
  ["Wheelbase","1340 mm"],
  ["Ground Clearance","165 mm"],
  ["Weight","156 kg"]
],

"Suzuki Gixxer SF 250":[
  ["Engine Type","4-Stroke, 1-Cylinder, Oil-Cooled"],
  ["Displacement","249 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","26.5 PS @ 9300 rpm"],
  ["Maximum Torque","22.2 Nm @ 7300 rpm"],
  ["Transmission","6-Speed Manual"],
  ["Top Speed","150 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Dual-Channel ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm, Monoshock"],
  ["Fuel Tank","12 L"],
  ["Seat Height","800 mm"],
  ["Wheelbase","1340 mm"],
  ["Ground Clearance","165 mm"],
  ["Weight","161 kg"]
],

"Suzuki Burgman Street 125":[
  ["Engine Type","4-Stroke, 1-Cylinder, Air-Cooled, SOHC"],
  ["Displacement","124 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","8.7 PS @ 6750 rpm"],
  ["Maximum Torque","10.0 Nm @ 5500 rpm"],
  ["Transmission","CVT Automatic"],
  ["Top Speed","95 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Drum"],
  ["ABS","CBS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm"],
  ["Fuel Tank","5.5 L"],
  ["Seat Height","780 mm"],
  ["Wheelbase","1285 mm"],
  ["Ground Clearance","160 mm"],
  ["Weight","115 kg"]
],

"Suzuki Avenis 125":[
  ["Engine Type","4-Stroke, 1-Cylinder, Air-Cooled, SOHC"],
  ["Displacement","124 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","8.7 PS"],
  ["Maximum Torque","10.0 Nm"],
  ["Transmission","CVT Automatic"],
  ["Top Speed","90 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Drum"],
  ["ABS","CBS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm"],
  ["Fuel Tank","5.2 L"],
  ["Seat Height","780 mm"],
  ["Wheelbase","1265 mm"],
  ["Ground Clearance","160 mm"],
  ["Weight","107 kg"]
],

"Suzuki GSX-R150":[
  ["Engine Type","4-Stroke, 1-Cylinder, Liquid-Cooled"],
  ["Displacement","147.3 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","19.2 PS @ 10500 rpm"],
  ["Maximum Torque","14.0 Nm @ 9000 rpm"],
  ["Transmission","6-Speed Manual"],
  ["Top Speed","135 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Single-Channel ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm, Monoshock"],
  ["Fuel Tank","11 L"],
  ["Seat Height","785 mm"],
  ["Wheelbase","1300 mm"],
  ["Ground Clearance","160 mm"],
  ["Weight","131 kg"]
],

"Suzuki GSX-S150":[
  ["Engine Type","4-Stroke, 1-Cylinder, Liquid-Cooled"],
  ["Displacement","147.3 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","19.2 PS @ 10500 rpm"],
  ["Maximum Torque","14.0 Nm @ 9000 rpm"],
  ["Transmission","6-Speed Manual"],
  ["Top Speed","135 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Single-Channel ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Swing Arm, Monoshock"],
  ["Fuel Tank","11 L"],
  ["Seat Height","785 mm"],
  ["Wheelbase","1300 mm"],
  ["Ground Clearance","155 mm"],
  ["Weight","133 kg"]
],

"Suzuki V-Strom 250 SX":[
  ["Engine Type","4-Stroke, 1-Cylinder, Oil-Cooled"],
  ["Displacement","249 cc"],
  ["Fuel","Petrol"],
  ["Maximum Power","26.5 PS @ 9300 rpm"],
  ["Maximum Torque","22.2 Nm @ 7300 rpm"],
  ["Transmission","6-Speed Manual"],
  ["Top Speed","140 km/h"],
  ["Front Brake","Disc"],
  ["Rear Brake","Disc"],
  ["ABS","Dual-Channel ABS"],
  ["Front Suspension","Telescopic Fork"],
  ["Rear Suspension","Monoshock"],
  ["Fuel Tank","12 L"],
  ["Seat Height","835 mm"],
  ["Wheelbase","1440 mm"],
  ["Ground Clearance","205 mm"],
  ["Weight","167 kg"]
]
  }
return detailed[bike[0]] || [
    ["Engine", bike[3]],
    ["Power", bike[4]],
    ["Mileage / Range", bike[5]],
    ["Transmission", bike[6]],
    ["Fuel", bike[7]]
  ];
}

const sections=document.getElementById("brandSections");
const instances=[];
brands.forEach((brand,bi)=>{
 const section=document.createElement("section");
 section.className="brand-section reveal";
 section.id=brand.id;
 section.innerHTML=`<div class="brand-title"><div class="eyebrow">PREMIUM MOTORBIKES</div><h2>${brand.name} Bikes</h2><p class="brand-sub">Front: bike image, name & price · Back: performance details</p></div>
 <div class="stage"><button class="carousel-nav carousel-prev" aria-label="Previous">‹</button><div class="carousel"></div><button class="carousel-nav carousel-next" aria-label="Next">›</button></div>
 <div class="controls"><button class="flip-btn">↻ Flip Card</button><span>Click the center card to see performance</span></div><div class="dots"></div>`;
 sections.appendChild(section);
 const carousel=section.querySelector(".carousel"),dots=section.querySelector(".dots");
 let active=0,flipped=false,timer=null,paused=false;
 brand.bikes.forEach((bike,i)=>{
   const wrap=document.createElement("div");wrap.className="bike-card-wrap";
   const notes = getBikeNotes(bike);
   const noteRows = notes.map(([label,value]) => `<div class="note-row"><span class="note-label">${label}:</span><span class="note-value">${value}</span></div>`).join("");
   wrap.innerHTML=`<div class="bike-card"><div class="face front"><div class="bike-img"><img src="${bike[2]}" alt="${bike[0]}" loading="lazy"></div><div class="info"><div class="tag">FEATURED BIKE</div><div class="name">${bike[0]}</div><div class="price">${bike[1]}</div><div class="tap">Tap card for specifications →</div></div></div>
   <div class="face back"><div class="notes-card"><div class="tag">BIKE SPECIFICATIONS</div><h3>${bike[0]}</h3><div class="notes-list">${noteRows}</div><div class="backhint">Tap again to return to bike photo</div></div></div></div>`;
   wrap.onclick=()=>{if(i===active){flipped=!flipped;wrap.querySelector(".bike-card").classList.toggle("flipped",flipped)}else{active=i;flipped=false;render();restart()}};
   carousel.appendChild(wrap);
   const dot=document.createElement("span");dot.className="dot";dot.onclick=()=>{active=i;flipped=false;render();restart()};dots.appendChild(dot);
 });
 function render(){
   const wraps=[...carousel.children],n=wraps.length;
   wraps.forEach((el,i)=>{
     let d=i-active;if(d>n/2)d-=n;if(d<-n/2)d+=n;
     el.style.transform=`translate(-50%,-50%) translate3d(${d*205}px,${Math.abs(d)*22}px,${-Math.abs(d)*130}px) rotateY(${d*12}deg) scale(${d===0?1:.82})`;
     el.style.opacity=Math.abs(d)<=2?(d===0?1:.62):0;
     el.style.filter=d===0?"none":"grayscale(.25)";
     el.style.zIndex=10-Math.abs(d);el.style.pointerEvents=Math.abs(d)<=2?"auto":"none";
   });
   [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===active));
 }
 function move(dir){active=(active+dir+brand.bikes.length)%brand.bikes.length;flipped=false;carousel.querySelectorAll(".bike-card").forEach(c=>c.classList.remove("flipped"));render();restart()}
 function auto(){if(!paused && !flipped)move(1)}
 function restart(){clearInterval(timer)}
 section.querySelector(".carousel-next").onclick=()=>move(1);
 section.querySelector(".carousel-prev").onclick=()=>move(-1);
 section.querySelector(".flip-btn").onclick=()=>{flipped=!flipped;carousel.children[active].querySelector(".bike-card").classList.toggle("flipped",flipped)};
 section.querySelector(".stage").addEventListener("mouseenter",()=>paused=true);
 section.querySelector(".stage").addEventListener("mouseleave",()=>paused=false);
 let tx=0;
 section.querySelector(".stage").addEventListener("touchstart",e=>{tx=e.touches[0].clientX;paused=true},{passive:true});
 section.querySelector(".stage").addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>45)move(dx<0?1:-1);setTimeout(()=>paused=false,500)},{passive:true});
 render();restart();instances.push({section,render});
});

const price = document.getElementById("price");
const down = document.getElementById("down");
const downHint = document.getElementById("downHint");

function money(n){
  return "Rs. " + Math.round(Number(n) || 0).toLocaleString("en-LK");
}

function insuranceForPrice(MBP){
  if(MBP >= 250000 && MBP <= 500000) return 16800;
  if(MBP > 500000 && MBP <= 750000) return 21100;
  if(MBP > 750000 && MBP <= 1000000) return 25600;
  if(MBP > 1000000 && MBP <= 1250000) return 28800;
  if(MBP > 1250000 && MBP <= 1500000) return 31600;
  if(MBP > 1500000 && MBP <= 1750000) return 36100;
  if(MBP > 1750000 && MBP <= 2000000) return 38800;
  return 0;
}

function calculateFinance(){
  const MBP = Math.max(0, Number(price.value) || 0);
  let DOWN = Math.max(0, Number(down.value) || 0);
  if(DOWN > MBP) DOWN = MBP;

  const downPercent = MBP > 0 ? (DOWN / MBP) * 100 : 0;
  downHint.textContent = `${downPercent.toFixed(0)}% down payment`;

  // Finance calculation values remain internal and are NOT displayed.
  const IRR = 24;
  const A = Math.max(0, MBP - DOWN);
  let COM = MBP * 4 / 100;
  if(COM > 50000) COM = 50000;
  const IN = insuranceForPrice(MBP);
  const LA = A + COM + IN;
  const r = IRR / 12 / 100;

  const schedule = document.getElementById("paymentSchedule");
  schedule.innerHTML = "";

  if(MBP <= 0 || DOWN > MBP){
    schedule.innerHTML = '<div class="payment-empty">Enter a valid bike price and down payment.</div>';
    return;
  }

  // Payment options: 12, 24, 36, 48 and 60 months. 72 months removed.
  for(let M=12; M<=60; M+=12){
    const EMI = r ? LA * r * Math.pow(1+r,M) / (Math.pow(1+r,M)-1) : LA / M;
    const row=document.createElement("div");
    row.className="payment-row";
    row.innerHTML=`
      <div class="payment-term">
        <strong>${M}</strong>
        <span>months</span>
      </div>
      <div class="payment-main">
        <small>Monthly Payment</small>
        <strong>${money(EMI)}</strong>
      </div>`;
    schedule.appendChild(row);
  }
}

price.addEventListener("input", () => {
  // Automatically suggest 60% down whenever the bike price changes.
  const MBP = Math.max(0, Number(price.value) || 0);
  down.value = Math.round(MBP * 0.60 / 1000) * 1000;
  calculateFinance();
});

down.addEventListener("input", calculateFinance);
calculateFinance();

const hamburger=document.getElementById("hamb");
hamburger.onclick=()=>{
  const nav=document.getElementById("navLinks");
  const isOpen=nav.classList.toggle("open");
  if(window.innerWidth<=700 && drop){ drop.classList.toggle("open", isOpen); }
};
document.querySelectorAll(".links a").forEach(a=>a.onclick=()=>{
  document.getElementById("navLinks").classList.remove("open");
  if(drop) drop.classList.remove("open");
});
const dropBtn=document.querySelector(".nav-drop-btn");
const drop=document.querySelector(".nav-dropdown");
if(dropBtn && drop){
  dropBtn.addEventListener("click", e=>{e.stopPropagation(); drop.classList.toggle("open");});
  document.addEventListener("click", ()=>drop.classList.remove("open"));
}

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

/* Simple note-style layout for the card back; no grouped specification boxes. */
(() => {
  const style = document.createElement("style");
  style.textContent = `
    .face.back { overflow: hidden; }
    .notes-card { width:100%; height:100%; box-sizing:border-box; padding:24px; display:flex; flex-direction:column; text-align:left; }
    .notes-card h3 { margin:7px 0 12px; font-size:22px; line-height:1.15; }
    .notes-list { flex:1; overflow-y:auto; padding-right:6px; scrollbar-width:thin; }
    .note-row { display:grid; grid-template-columns:minmax(105px,36%) 1fr; gap:10px; padding:7px 0; border-bottom:1px solid rgba(255,255,255,.10); font-size:12px; line-height:1.35; }
    .note-label { font-weight:700; opacity:.72; }
    .note-value { font-weight:600; overflow-wrap:anywhere; }
    .notes-card .backhint { flex:0 0 auto; padding-top:10px; margin-top:6px; }
    @media (max-width:600px) {
      .notes-card { padding:18px; }
      .notes-card h3 { font-size:19px; }
      .note-row { grid-template-columns:1fr; gap:2px; padding:6px 0; }
      .note-label { font-size:11px; }
      .note-value { font-size:12px; }
    }
  `;
  document.head.appendChild(style);
})();
card.addEventListener("click", () => {
    card.classList.toggle("flipped");
});
