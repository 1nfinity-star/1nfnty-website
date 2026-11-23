// GANTI nomor berikut dengan nomor WhatsApp admin. Gunakan kode negara, tanpa tanda + atau spasi.
// Contoh Indonesia: 6281234567890
const ADMIN_WHATSAPP = "628XXXXXXXXXX";
const products=[
{id:1,name:"Dark Streetwear",cat:"T-Shirt",price:75000,symbol:"NO LIMITS",tag:"BEST SELLER"},
{id:2,name:"Purple Dimension",cat:"Hoodie",price:95000,symbol:"∞",tag:"NEW"},
{id:3,name:"Velocity Jersey",cat:"Jersey",price:85000,symbol:"VELOCITY",tag:"POPULAR"},
{id:4,name:"Abstract Chaos",cat:"Graphic",price:50000,symbol:"✳",tag:"EXCLUSIVE"},
{id:5,name:"Minimal Infinity",cat:"Logo",price:45000,symbol:"∞",tag:"MINIMAL"},
{id:6,name:"Urban Rebel",cat:"T-Shirt",price:70000,symbol:"URBAN",tag:"TRENDING"},
{id:7,name:"Night Vision",cat:"Hoodie",price:100000,symbol:"NIGHT",tag:"NEW"},
{id:8,name:"Cyber Sport",cat:"Jersey",price:90000,symbol:"CYBER",tag:"LIMITED"}];
let cart=[],category="All";
const $=s=>document.querySelector(s),money=n=>"Rp"+n.toLocaleString("id-ID");
function card(p){return `<article class="product"><div class="art"><span class="label">${p.tag}</span><span class="symbol">${p.symbol}</span></div><div class="details"><small>${p.cat.toUpperCase()}</small><h3>${p.name}</h3><div class="price-row"><span class="price">${money(p.price)}</span><button class="add" data-add="${p.id}">+ Add</button></div></div></article>`}
function render(){let q=$("#search")?.value.toLowerCase()||"",list=products.filter(p=>(category==="All"||p.cat===category)&&p.name.toLowerCase().includes(q));$("#catalog").innerHTML=list.map(card).join("");$("#noresult").hidden=!!list.length;$("#featured").innerHTML=products.slice(0,4).map(card).join("");}
function toast(msg){let t=$("#toast");t.textContent=msg;t.style.display="block";setTimeout(()=>t.style.display="none",2300)}
function page(id){document.querySelectorAll(".page").forEach(p=>{p.classList.remove("active");p.style.display="none"});$("#"+id).classList.add("active");$("#"+id).style.display="block";document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));if(id==="cart")renderCart();window.scrollTo({top:0,behavior:"smooth"})}
function renderCart(){$("#count").textContent=cart.reduce((a,p)=>a+p.qty,0);$("#cartitems").innerHTML=cart.length?cart.map(p=>`<div class="cartline"><div><b>${p.name}</b><div class="muted">${money(p.price)} × ${p.qty}</div></div><div><button data-dec="${p.id}">−</button> ${p.qty} <button data-inc="${p.id}">+</button></div></div>`).join(""):'<p class="empty">Keranjang masih kosong. Yuk, pilih desain!</p>';let total=cart.reduce((a,p)=>a+p.price*p.qty,0);$("#totalrow").style.display=cart.length?"block":"none";$("#total").textContent=money(total)}
document.addEventListener("click",e=>{let nav=e.target.closest("[data-page]");if(nav){page(nav.dataset.page);return}let add=e.target.closest("[data-add]");if(add){let p=products.find(x=>x.id===+add.dataset.add),old=cart.find(x=>x.id===p.id);old?old.qty++:cart.push({...p,qty:1});renderCart();toast(p.name+" ditambahkan ke keranjang");return}let inc=e.target.closest("[data-inc]");if(inc){cart.find(p=>p.id===+inc.dataset.inc).qty++;renderCart()}let dec=e.target.closest("[data-dec]");if(dec){let p=cart.find(p=>p.id===+dec.dataset.dec);p.qty--;if(!p.qty)cart=cart.filter(x=>x.id!==p.id);renderCart()}});
$("#filters").addEventListener("click",e=>{let b=e.target.closest("[data-cat]");if(!b)return;category=b.dataset.cat;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));render()});
$("#search").addEventListener("input",render);
$("#request").addEventListener("submit",e=>{e.preventDefault();if(ADMIN_WHATSAPP.includes("X")){toast("Atur nomor WhatsApp admin di file script.js terlebih dahulu.");return}let d=Object.fromEntries(new FormData(e.target));let msg=`Halo 1nfinity! Saya ingin custom design.%0ANama: ${encodeURIComponent(d.name)}%0AKontak: ${encodeURIComponent(d.contact)}%0AJenis: ${encodeURIComponent(d.type)}%0ADeskripsi: ${encodeURIComponent(d.description)}%0ABudget: ${encodeURIComponent(d.budget)}`;window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${msg}`,"_blank")});
render();renderCart();