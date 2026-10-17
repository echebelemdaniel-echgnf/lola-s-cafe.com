const S=['Standard','Medium','Large','Monsterito'],Q=(a,b)=>a.map((x,i)=>[b[i],x]);
const ex=(l)=>['Extras','Add to any order',l];
const C=[
['Corndogs','🌭',[
['Crispy Corndog','',[['2 pcs',6000],['4 pcs',11000]]],
['Cheesy Crispy Corndog','',[['2 pcs',9000],['4 pcs',15000]]],
['Waffle Corndog','',[['2 pcs',5000],['4 pcs',9500]]],
['Cheesy Waffle Corndog','',[['2 pcs',7000],['4 pcs',13000]]],
['Extra Sauce','Mustard, BBQ, peppered, caramel or house',[['Ketchup',500],['Any other sauce',1000]]]]],
['Pizza','🍕',[
['Supreme Special','',Q([18000,21100,24600,28000],S)],
['Chicken Feast','',Q([13000,15500,17600,19800],S)],
['Beef Suya','',Q([13000,15500,17600,19800],S)],
['Chicken Pepperoni','',Q([16100,18800,22600,26000],S)],
['Turkey Delight','',Q([14000,16300,18600,20000],S)],
['Pizza Extras','',[['Cheese',2500],['Bacon',3000],['Stuffed crust',3000]]]]],
['Shawarma','🌯',[
['BBQ Chicken Shawarma','',[['Regular',6500]]],
['Beef Suya Shawarma','',[['Regular',6500]]],
['Combo Shawarma','',[['Regular',7500]]],
['Turkey Shawarma','',[['Regular',8000]]],
['Cheesy Combo Shawarma','',[['Regular',9800]]],
['Philly Cheese Steak','',[['Regular',10800]]],
['Lola & Friends Combo','BBQ chicken + beef suya shawarma, Philly cheese steak, L bubble tea/milkshake, ice tea, house sauce & freebies',[['Combo',41999]]],
['Shawarma Extras','',[['Cheese',2500],['Bacon',3000],['Sausage',1500],['Extra chicken',2000],['Extra beef',2000],['House sauce',1000]]]]],
['Fries & Wings','🍟',[
['Wings','Hot creamy, BBQ honey, peppered, yaji or lemon pepper',[['12 pcs',15000],['24 pcs',28000]]],
['Loaded Fries','',[['Turkey loaded',16000],['Suya loaded',14000],['Chicken loaded',14000],['Combo loaded',15000]]],
['Fries & Two Sauces','Served with seasoned fries',[['Grilled turkey',10500],['Grilled chicken',9500],['Smoked pork',9500]]],
['Fries Extras','',[['Cheese',2500],['Bacon',3000],['Box of fries & sauce',5500]]]]],
['Burgers','🍔',[
['Smash Beef Burger','',[['Double',12000],['Triple',15000],['Double + bacon',15000]]],
['Hot Nashville Chicken','',[['Double hot chicken',12000],['Triple hot chicken + beef',15000],['Double hot chicken + bacon',15000]]],
['Lola & Friends Combo','2 deluxe burgers, large bubble tea/milkshake, ice tea, 12 pcs wings, 2 boxes of seasoned fries, sauces & freebies',[['Combo',69999]]],
['Burger Extras','',[['Cheese',2500],['Bacon',3000],['Patty',3000],['House sauce',1000],['Box of fries & sauce',5500]]]]],
['Drinks','🧋',null]];
const D=[['Fruit & Ice Teas','Strawberry lemonade,Raspberry dream,Midnight in Miami,Cocomelon,Pineapple bliss,Apple + mint,Mango fusion,Bubblegum fizz,Kiwi burst refresher'],['Milkshakes','Oreos & cream,Peanut butter,Lotus Biscoff,Melted shake,Shortbread shake,Caramel frappe,Banana bliss,Vanilla dream,Strawberry swirl'],['Hot Drinks','Cappuccino,Vanilla crème,Latte'],['Fresh Fruit Juice','Orange,Pineapple,Watermelon,Apple punch']];
const N=n=>'₦'+n.toLocaleString('en-NG'),$=id=>document.getElementById(id),WA='2349015704346';
let cat=0,cart={};try{cart=JSON.parse(localStorage.getItem('lc')||'{}')}catch(e){}
function tabs(){$('tabs').innerHTML=C.map((c,i)=>`<button class="${i==cat?'on':''}" onclick="cat=${i};tabs()">${c[1]} ${c[0]}</button>`).join('');
$('grid').innerHTML=C[cat][2]?C[cat][2].map((x,i)=>`<div class="it"><h3>${x[0]}</h3>${x[1]?`<p>${x[1]}</p>`:''}${x[2].length>1?`<select id="s${i}" onchange="pv(${i})">${x[2].map((o,j)=>`<option value="${j}">${o[0]} · ${N(o[1])}</option>`).join('')}</select>`:`<p>${x[2][0][0]}</p>`}<div class="row"><span class="pr" id="p${i}">${N(x[2][0][1])}</span><button class="add" onclick="add(${i})">+ Add</button></div></div>`).join(''):D.map(d=>`<div class="it"><h3>${d[0]}</h3><div class="chips">${d[1].split(',').map(t=>`<span>${t}</span>`).join('')}</div></div>`).join('')+`<div class="it"><h3>Want a drink?</h3><p>Drink prices are shared on WhatsApp.</p><div class="row"><span></span><a class="add" style="text-decoration:none" href="https://wa.me/${WA}?text=${encodeURIComponent('Hi Lola’s Café, please share your drinks prices.')}" target="_blank" rel="noopener">Ask on WhatsApp</a></div></div>`}
function pv(i){const x=C[cat][2][i];$('p'+i).textContent=N(x[2][$('s'+i).value][1])}
function add(i){const x=C[cat][2][i],o=x[2][$('s'+i)?$('s'+i).value:0],k=x[0]+' ('+o[0]+')';cart[k]=cart[k]?{...cart[k],q:cart[k].q+1}:{p:o[1],q:1};save();const b=event.target;b.textContent='Added ✓';setTimeout(()=>b.textContent='+ Add',700)}
function ch(k,d){cart[k].q+=d;if(cart[k].q<1)delete cart[k];save()}
function save(){try{localStorage.setItem('lc',JSON.stringify(cart))}catch(e){}draw()}
function tot(){return Object.values(cart).reduce((s,x)=>s+x.p*x.q,0)}
function draw(){const ks=Object.keys(cart),n=ks.reduce((s,k)=>s+cart[k].q,0);$('bar').style.display=n?'flex':'none';$('bc').textContent='🛍 View order · '+n+' item'+(n>1?'s':'');$('bt').textContent=N(tot());$('ct').textContent=N(tot());
$('cl').innerHTML=ks.length?ks.map(k=>`<div class="ci"><div>${k}<small>${N(cart[k].p)} each</small></div><span class="q"><button onclick="ch('${k.replace(/'/g,"\\'")}',-1)">−</button><span>${cart[k].q}</span><button onclick="ch('${k.replace(/'/g,"\\'")}',1)">+</button></span></div>`).join(''):'<p class="sub">Your cart is empty.</p>';if(!ks.length)op(0)}
function op(v){$('pan').style.display=v?'flex':'none'}
function send(){const ks=Object.keys(cart);if(!ks.length)return;const m=document.querySelector('input[name=m]:checked').value;
let t='Hello Lola’s Café, I’d like to order:\n\n'+ks.map(k=>`• ${cart[k].q} × ${k} – ${N(cart[k].p*cart[k].q)}`).join('\n')+`\n\nTotal: ${N(tot())}\n${m}\nName: ${$('nm').value||'-'}\nPhone: ${$('ph').value||'-'}\nAddress/notes: ${$('ad').value||'-'}`;
window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank')}
tabs();draw();

function status(){try{const h=+new Date().toLocaleString('en-US',{timeZone:'Africa/Lagos',hour:'numeric',hour12:false})%24,o=h>=9&&h<20,e=$('open');e.className=o?'on':'off';e.textContent=o?'🟢 Open now · closes 8PM':'🔴 Closed · opens 9AM'}catch(x){}}
status();setInterval(status,60000);
