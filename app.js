/* Мой рацион. Offline, no external APIs, data stored on this device. */
'use strict';
const STORE_KEY='moi-racion-data-v1';
const MEALS=[{id:'breakfast',name:'Завтрак',emoji:'🥣',share:.25},{id:'lunch',name:'Обед',emoji:'🍲',share:.35},{id:'dinner',name:'Ужин',emoji:'🥗',share:.30},{id:'snack',name:'Перекус',emoji:'🍏',share:.10}];
const FOODS=[
 ['oats','Овсяные хлопья, сухие',370,13,7,62,'🌾'],['buckwheat','Гречка, варёная',110,4.2,1.1,21.3,'🌾'],['rice','Рис, варёный',130,2.7,.3,28,'🍚'],['bulgur','Булгур, варёный',83,3.1,.2,18.6,'🍚'],['quinoa','Киноа, варёная',120,4.4,1.9,21.3,'🍚'],
 ['pasta','Макароны, варёные',157,5.8,.9,30.9,'🍝'],['bread','Хлеб цельнозерновой',247,10,3.5,41,'🍞'],['rye','Хлеб ржаной',214,6.6,1.2,43.4,'🍞'],['potato','Картофель, отварной',82,2,.4,17,'🥔'],['sweet_potato','Батат, запечённый',90,2,.2,20.7,'🍠'],
 ['chicken','Куриная грудка, готовая',165,31,3.6,0,'🍗'],['turkey','Филе индейки, готовое',135,29,1.6,0,'🦃'],['beef','Говядина нежирная, готовая',190,27,8.5,0,'🥩'],['salmon','Лосось, готовый',208,20,13,0,'🐟'],['cod','Треска, готовая',105,23,.9,0,'🐟'],['pollock','Минтай, готовый',100,22,1,0,'🐟'],['tuna','Тунец в собственном соку',116,26,1,0,'🐟'],['shrimp','Креветки, готовые',99,24,.3,.2,'🦐'],
 ['egg','Яйцо куриное, целое',143,12.6,9.5,.7,'🥚'],['egg_white','Белок яйца',52,11,.2,.7,'🥚'],['cottage','Творог 5%',121,17,5,1.8,'🥛'],['skyr','Йогурт греческий 2%',73,10,2,3.5,'🥣'],['yogurt','Йогурт натуральный 2.5%',63,4.3,2.5,5.7,'🥣'],['milk','Молоко 2.5%',52,3,2.5,4.7,'🥛'],['kefir','Кефир 2.5%',53,3,2.5,4,'🥛'],['cheese','Сыр твёрдый',355,25,27,2,'🧀'],['mozzarella','Моцарелла',254,18,19,2.5,'🧀'],['feta','Фета',264,14,21,4,'🧀'],
 ['banana','Банан',89,1.1,.3,22.8,'🍌'],['apple','Яблоко',52,.3,.2,13.8,'🍎'],['pear','Груша',57,.4,.1,15.2,'🍐'],['orange','Апельсин',47,.9,.1,11.8,'🍊'],['berry','Ягоды, смесь',50,.8,.4,11,'🫐'],['kiwi','Киви',61,1.1,.5,14.7,'🥝'],['strawberry','Клубника',32,.7,.3,7.7,'🍓'],
 ['tomato','Помидор',18,.9,.2,3.9,'🍅'],['cucumber','Огурец',15,.7,.1,3.6,'🥒'],['carrot','Морковь',41,.9,.2,9.6,'🥕'],['broccoli','Брокколи, готовая',35,2.4,.4,7.2,'🥦'],['spinach','Шпинат',23,2.9,.4,3.6,'🥬'],['salad','Салат листовой',16,1.4,.2,2.9,'🥬'],['pepper','Перец сладкий',27,1,.2,6.3,'🫑'],['zucchini','Кабачок',17,1.2,.3,3.1,'🥒'],['cabbage','Капуста белокочанная',25,1.3,.1,5.8,'🥬'],['mushroom','Шампиньоны',22,3.1,.3,3.3,'🍄'],
 ['olive_oil','Масло оливковое',884,0,100,0,'🫒'],['butter','Масло сливочное',748,.5,82,.8,'🧈'],['almond','Миндаль',579,21,50,21.6,'🥜'],['walnut','Грецкие орехи',654,15.2,65.2,13.7,'🥜'],['peanut_butter','Арахисовая паста',588,25,50,20,'🥜'],['avocado','Авокадо',160,2,14.7,8.5,'🥑'],['chia','Семена чиа',486,16.5,30.7,42.1,'🌱'],['honey','Мёд',304,.3,0,82.4,'🍯'],
 ['lentils','Чечевица, варёная',116,9,.4,20,'🫘'],['chickpeas','Нут, варёный',164,8.9,2.6,27.4,'🫘'],['beans','Фасоль, варёная',127,8.7,.5,22.8,'🫘'],['tofu','Тофу натуральный',90,10,5,2,'🧈'],['hummus','Хумус',166,7.9,9.6,14.3,'🫘'],
 ['dark_choco','Шоколад тёмный',598,7.8,42.6,45.9,'🍫'],['raisins','Изюм',299,3.1,.5,79,'🍇'],['granola','Гранола',471,10,20,64,'🥣']
].map(([id,name,kcal,p,f,c,emoji])=>({id,name,kcal,p,f,c,emoji}));
const RECIPES=[
 {id:'b1',meal:'breakfast',name:'Овсянка с бананом и йогуртом',emoji:'🥣',parts:[['oats',55],['milk',140],['banana',90],['skyr',120]]},
 {id:'b2',meal:'breakfast',name:'Омлет с тостом и помидорами',emoji:'🍳',parts:[['egg',120],['egg_white',100],['tomato',140],['bread',60],['olive_oil',5]]},
 {id:'b3',meal:'breakfast',name:'Творог с ягодами и орехами',emoji:'🫐',parts:[['cottage',200],['berry',110],['almond',18],['honey',10]]},
 {id:'b4',meal:'breakfast',name:'Йогурт, гранола и клубника',emoji:'🥣',parts:[['skyr',230],['granola',55],['strawberry',140]]},
 {id:'b5',meal:'breakfast',name:'Тост с авокадо и яйцом',emoji:'🥑',parts:[['bread',80],['avocado',75],['egg',110],['tomato',70]]},
 {id:'b6',meal:'breakfast',name:'Гречка с яйцом и сыром',emoji:'🌾',parts:[['buckwheat',210],['egg',100],['cheese',20],['cucumber',100]]},
 {id:'b7',meal:'breakfast',name:'Белковая овсянка с ягодами',emoji:'🍓',parts:[['oats',45],['skyr',220],['berry',120],['chia',8]]},
 {id:'b8',meal:'breakfast',name:'Овсяная каша с фруктами',emoji:'🍌',parts:[['oats',70],['milk',160],['banana',130],['berry',100]]},
 {id:'l1',meal:'lunch',name:'Курица с гречкой и овощами',emoji:'🍗',parts:[['chicken',155],['buckwheat',190],['broccoli',170],['olive_oil',9]]},
 {id:'l2',meal:'lunch',name:'Индейка, рис и салат',emoji:'🍚',parts:[['turkey',170],['rice',190],['tomato',100],['cucumber',100],['olive_oil',10]]},
 {id:'l3',meal:'lunch',name:'Говядина с булгуром',emoji:'🥩',parts:[['beef',145],['bulgur',220],['pepper',150],['olive_oil',8]]},
 {id:'l4',meal:'lunch',name:'Рыба с картофелем и брокколи',emoji:'🐟',parts:[['cod',185],['potato',250],['broccoli',150],['olive_oil',12]]},
 {id:'l5',meal:'lunch',name:'Паста с тунцом и томатами',emoji:'🍝',parts:[['pasta',210],['tuna',135],['tomato',150],['olive_oil',9]]},
 {id:'l6',meal:'lunch',name:'Боул с киноа и креветками',emoji:'🦐',parts:[['quinoa',205],['shrimp',160],['avocado',60],['cucumber',90]]},
 {id:'l7',meal:'lunch',name:'Чечевица с курицей',emoji:'🫘',parts:[['lentils',230],['chicken',145],['carrot',120],['olive_oil',7]]},
 {id:'l8',meal:'lunch',name:'Тофу с рисом и овощами',emoji:'🍚',parts:[['tofu',220],['rice',190],['broccoli',170],['olive_oil',10]]},
 {id:'l9',meal:'lunch',name:'Рис с нутом и овощами',emoji:'🍚',parts:[['rice',260],['chickpeas',170],['broccoli',150],['olive_oil',12]]},
 {id:'l10',meal:'lunch',name:'Булгур с фасолью и авокадо',emoji:'🫘',parts:[['bulgur',270],['beans',210],['avocado',70],['olive_oil',9]]},
 {id:'d1',meal:'dinner',name:'Запечённый лосось с киноа',emoji:'🐟',parts:[['salmon',150],['quinoa',160],['salad',80],['tomato',100]]},
 {id:'d2',meal:'dinner',name:'Индейка с овощами и булгуром',emoji:'🦃',parts:[['turkey',180],['bulgur',180],['zucchini',160],['olive_oil',8]]},
 {id:'d3',meal:'dinner',name:'Салат с курицей и авокадо',emoji:'🥗',parts:[['chicken',155],['avocado',90],['salad',90],['tomato',140],['bread',45]]},
 {id:'d4',meal:'dinner',name:'Треска с бататом и шпинатом',emoji:'🐟',parts:[['cod',200],['sweet_potato',235],['spinach',130],['olive_oil',13]]},
 {id:'d5',meal:'dinner',name:'Омлет с грибами и сыром',emoji:'🍳',parts:[['egg',155],['egg_white',120],['mushroom',160],['cheese',25],['bread',50]]},
 {id:'d6',meal:'dinner',name:'Боул с нутом и индейкой',emoji:'🫘',parts:[['chickpeas',160],['turkey',140],['cucumber',130],['feta',35]]},
 {id:'d7',meal:'dinner',name:'Минтай с гречкой и салатом',emoji:'🥗',parts:[['pollock',190],['buckwheat',205],['cabbage',130],['olive_oil',10]]},
 {id:'d8',meal:'dinner',name:'Креветки с пастой и овощами',emoji:'🦐',parts:[['shrimp',175],['pasta',200],['tomato',135],['olive_oil',9]]},
 {id:'d9',meal:'dinner',name:'Киноа с фасолью и авокадо',emoji:'🥗',parts:[['quinoa',220],['beans',180],['avocado',90],['salad',100]]},
 {id:'d10',meal:'dinner',name:'Паста с томатами и моцареллой',emoji:'🍝',parts:[['pasta',240],['mozzarella',70],['tomato',160],['olive_oil',10]]},
 {id:'s1',meal:'snack',name:'Йогурт с ягодами',emoji:'🫐',parts:[['skyr',160],['berry',115]]},
 {id:'s2',meal:'snack',name:'Яблоко и миндаль',emoji:'🍎',parts:[['apple',160],['almond',18]]},
 {id:'s3',meal:'snack',name:'Творог с киви',emoji:'🥝',parts:[['cottage',140],['kiwi',100]]},
 {id:'s4',meal:'snack',name:'Банан с арахисовой пастой',emoji:'🍌',parts:[['banana',120],['peanut_butter',16]]},
 {id:'s5',meal:'snack',name:'Кефир с грецкими орехами',emoji:'🥛',parts:[['kefir',220],['walnut',16]]},
 {id:'s6',meal:'snack',name:'Хумус с морковью',emoji:'🥕',parts:[['hummus',85],['carrot',120]]},
 {id:'s7',meal:'snack',name:'Йогурт с мёдом и чиа',emoji:'🥣',parts:[['skyr',200],['honey',12],['chia',12]]},
 {id:'s8',meal:'snack',name:'Яблоко, апельсин и орехи',emoji:'🍎',parts:[['apple',100],['orange',130],['banana',70],['walnut',15]]}
];
const EMPTY_N={kcal:0,p:0,f:0,c:0};
const defaultProfile={sex:'male',age:32,weight:76,height:176,activity:1.375,goal:'maintain',manualKcal:0,manualP:0,manualF:0};
const todayKey=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
const parseDate=s=>new Date(`${s}T12:00:00`);
const shiftDate=(s,n)=>{const d=parseDate(s);d.setDate(d.getDate()+n);return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
const dateLabel=s=>parseDate(s).toLocaleDateString('ru-RU',{day:'numeric',month:'long'});
const weekdayLabel=s=>parseDate(s).toLocaleDateString('ru-RU',{weekday:'short'}).replace('.','');
const round=n=>Math.round(Number(n)||0);
const num=(n,d=0)=>Number(n||0).toLocaleString('ru-RU',{maximumFractionDigits:d,minimumFractionDigits:0});
const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
const esc=value=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const attrsafe=value=>esc(value).replace(/`/g,'&#96;');
function readStore(){try{const raw=JSON.parse(localStorage.getItem(STORE_KEY)||'null');if(raw&&typeof raw==='object')return {profile:{...defaultProfile,...raw.profile},entries:raw.entries&&typeof raw.entries==='object'?raw.entries:{},plans:raw.plans&&typeof raw.plans==='object'?raw.plans:{},customFoods:Array.isArray(raw.customFoods)?raw.customFoods:[],configured:!!raw.configured}}catch(e){}return {profile:{...defaultProfile},entries:{},plans:{},customFoods:[],configured:false}}
let db=readStore();
let view='today',day=todayKey(),modal=null,selectedFood=null,searchQuery='',entryMeal='breakfast',noticeTimer=null,foodType='food';
let entryEditId=null;
const icons={
 leaf:'<path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-8 10-16Z"/><path d="M4 21c2-5 6-9 12-12"/>',
 home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-7h6v7"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
 book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5a2.5 2.5 0 0 0 2.5 2.5H20v-5"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-7 8-7s8 3 8 7"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',chevronLeft:'<path d="m15 18-6-6 6-6"/>',chevronRight:'<path d="m9 18 6-6-6-6"/>',
 check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="M18 6 6 18M6 6l12 12"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6M10 10v7M14 10v7"/>',
 sparkle:'<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17Z"/>',
 refresh:'<path d="M20 11a8 8 0 0 0-14-5L4 8m0-5v5h5M4 13a8 8 0 0 0 14 5l2-2m0 5v-5h-5"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
 download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',upload:'<path d="M12 16V4m-4 4 4-4 4 4M4 17v4h16v-4"/>',
 arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',flame:'<path d="M13 3s1 4-2 7c-3 3-3 5-3 6a4 4 0 0 0 8 0c0-1-1-3 0-5 3 3 4 5 4 7a8 8 0 0 1-16 0c0-6 4-10 9-15Z"/>',
 edit:'<path d="M12 20h9M16 4l4 4-11 11-5 1 1-5L16 4Z"/>'};
function ic(name){return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.info}</svg>`}
function persist(){try{localStorage.setItem(STORE_KEY,JSON.stringify(db));return true}catch(e){toast('Не удалось сохранить. Проверьте настройки Safari.');return false}}
function foodById(id){return db.customFoods.find(f=>f.id===id)||FOODS.find(f=>f.id===id)}
function recipeById(id){return RECIPES.find(r=>r.id===id)}
function nutrients(parts){const o={...EMPTY_N};for(const [foodId,grams] of parts){const f=foodById(foodId);if(!f)continue;const k=grams/100;for(const key of ['kcal','p','f','c'])o[key]+=f[key]*k}return o}
function scaled(n,factor=1){return Object.fromEntries(['kcal','p','f','c'].map(k=>[k,(n[k]||0)*factor]))}
function accum(items){const o={...EMPTY_N};for(const x of items){if(!x)continue;for(const k of ['kcal','p','f','c'])o[k]+=Number(x[k])||0}return o}
function calcTargets(p=db.profile){const w=clamp(Number(p.weight)||70,30,350),h=clamp(Number(p.height)||170,110,230),age=clamp(Number(p.age)||30,18,100),act=Number(p.activity)||1.375;
 const bmr=10*w+6.25*h-5*age+(p.sex==='female'?-161:5);
 const maintenance=bmr*act;
 const goalFactor=p.goal==='lose'?.85:p.goal==='gain'?1.10:1;
 let kcal=clamp(round(maintenance*goalFactor/10)*10,1000,7000);
 if(Number(p.manualKcal)>0)kcal=clamp(Number(p.manualKcal),900,8000);
 let protein=Number(p.manualP)>0?Number(p.manualP):w*(p.goal==='lose'?1.8:p.goal==='gain'?1.7:1.55);
 let fat=Number(p.manualF)>0?Number(p.manualF):w*.8;
 if(!Number(p.manualP))protein=Math.min(protein,kcal*.34/4);
 if(!Number(p.manualF))fat=Math.min(fat,kcal*.34/9);
 const carbs=Math.max(0,(kcal-4*protein-9*fat)/4);
 return {bmr:round(bmr),maintenance:round(maintenance),kcal:round(kcal),p:round(protein),f:round(fat),c:round(carbs),energyDifference:round(kcal-maintenance),hasTightMacros:carbs<70};}
function allEntries(key=day){return Array.isArray(db.entries[key])?db.entries[key]:[]}
function dayIntake(key=day){return accum(allEntries(key).map(e=>e.n))}
function prg(actual,target){return clamp(target>0?actual/target*100:0,0,100)}
function seeded(str){let h=2166136261;for(const ch of str){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function plannedNutri(item){const r=recipeById(item?.recipeId);return r?scaled(nutrients(r.parts),item.factor||1):{...EMPTY_N}}
function ensurePlan(key=day){if(db.plans[key]&&db.plans[key].items&&db.plans[key].items.length===4)return db.plans[key];return generatePlan(key,0)}
function generatePlan(key=day,nonce=null){
 const existing=db.plans[key],seedNonce=nonce!==null?nonce:((existing?.nonce||0)+1),target=calcTargets(),previous=db.plans[shiftDate(key,-1)];
 const candidates=MEALS.map(meal=>RECIPES.filter(r=>r.meal===meal.id).map(r=>{
  const budget=target.kcal*meal.share,base=nutrients(r.parts);
  const factor=Math.round(clamp(budget/(base.kcal||1),.6,2.3)*100)/100;
  const n=scaled(base,factor),grams=r.parts.reduce((sum,p)=>sum+p[1],0)*factor;
  const repeated=previous?.items?.some(i=>i.recipeId===r.id)?0.035:0;
  const excessWeight=grams>850?(grams-850)/850*.1:0;
  return {mealId:meal.id,recipeId:r.id,factor,n,penalty:repeated+excessWeight};
 }));
 // Search all 4-meal combinations for a close whole-day match, not only calories.
 // The built-in set is small, so exhaustive matching runs entirely on the device.
 const rankings=[];
 for(const breakfast of candidates[0])for(const lunch of candidates[1])for(const dinner of candidates[2])for(const snack of candidates[3]){
  const total=accum([breakfast.n,lunch.n,dinner.n,snack.n]);
  const error=1.25*Math.abs(total.p-target.p)/Math.max(1,target.p)
     +1.25*Math.abs(total.f-target.f)/Math.max(1,target.f)
     +.8*Math.abs(total.c-target.c)/Math.max(1,target.c)
     +2.2*Math.abs(total.kcal-target.kcal)/Math.max(1,target.kcal);
  const mix=[breakfast,lunch,dinner,snack];
  const tieBreaker=(seeded(key+mix.map(i=>i.recipeId).join(':'))%1000)/100000;
  rankings.push({score:error+mix.reduce((sum,i)=>sum+i.penalty,0)+tieBreaker,items:mix});
 }
 rankings.sort((a,b)=>a.score-b.score);
 const best=rankings[seedNonce%Math.min(10,rankings.length)]||rankings[0];
 const items=best.items.map(i=>({mealId:i.mealId,recipeId:i.recipeId,factor:i.factor}));
 const plan={nonce:seedNonce,items,profileSignature:JSON.stringify(target)};
 db.plans[key]=plan;persist();return plan;
}
function swapRecipe(mealId){const plan=ensurePlan(),old=plan.items.find(i=>i.mealId===mealId);if(!old)return;const options=RECIPES.filter(r=>r.meal===mealId),idx=options.findIndex(r=>r.id===old.recipeId),next=options[(idx+1)%options.length],target=calcTargets(),share=MEALS.find(m=>m.id===mealId).share;
 old.recipeId=next.id;old.factor=Math.round(clamp(target.kcal*share/nutrients(next.parts).kcal,.6,2.3)*100)/100;persist();render();toast('Блюдо заменено');}
function planConsumption(key=day,mealId){return allEntries(key).find(e=>e.planSlot===mealId)}
function toggleConsumed(mealId){const plan=ensurePlan(),item=plan.items.find(x=>x.mealId===mealId);if(!item)return;const entries=allEntries();const old=entries.findIndex(e=>e.planSlot===mealId);
 if(old>=0){entries.splice(old,1);toast('Отмечено как не съедено');}else{const r=recipeById(item.recipeId),n=plannedNutri(item);entries.push({id:makeId(),name:r.name,emoji:r.emoji,grams:Math.round(r.parts.reduce((sum,p)=>sum+p[1],0)*item.factor),mealId,planSlot:mealId,n,createdAt:Date.now()});toast('Добавлено в дневник')}
 db.entries[day]=entries;persist();render();}
function makeId(){return 'e'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8)}
function heroDayControls(){return `<div class="date-nav"><div class="date-title">${esc(dateLabel(day))}${day===todayKey()?' · сегодня':''}</div><div class="date-buttons"><button class="date-arrow" data-action="prev-day" aria-label="Предыдущий день">${ic('chevronLeft')}</button><button class="date-arrow" data-action="next-day" aria-label="Следующий день">${ic('chevronRight')}</button></div></div>`}
function macroCard(k,name,used,target,color){return `<div class="metric"><div class="metric-top"><span class="dot ${color}"></span>${name}</div><div class="metric-value">${round(used)} <span>/ ${target} г</span></div><div class="progress ${color}"><span style="width:${prg(used,target)}%"></span></div></div>`}
function mainToday(){const target=calcTargets(),used=dayIntake(),percentage=Math.round((used.kcal/(target.kcal||1))*100),remaining=round(target.kcal-used.kcal),dash=clamp(percentage,0,100)*3.0159;
 return `<div class="hero"><div class="hero-head"><div class="hero-kicker">Ваш баланс питания</div>${day!==todayKey()?'<button class="today-pill" data-action="go-today">Сегодня</button>':''}</div>${heroDayControls()}<div class="calorie-layout"><div class="calorie-text"><div class="overline">Потреблено</div><div class="kcal-big">${num(round(used.kcal))}<small> ккал</small></div><div class="kcal-target">из ${num(target.kcal)} ккал в день</div></div><div class="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="48" fill="none" stroke="#ffffff24" stroke-width="10"/><circle cx="60" cy="60" r="48" fill="none" stroke="${percentage>100?'#efb17c':'#c9e995'}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${dash.toFixed(2)} 301.59"/></svg><div class="ring-inner"><div class="ring-number">${percentage}%</div><div class="ring-label">от нормы</div></div></div></div><div class="hero-footer">${ic('flame')}<span>${remaining>=0?`Осталось <strong>${num(remaining)} ккал</strong> до дневной цели`:`Сверх цели на <strong>${num(-remaining)} ккал</strong>`}</span></div></div>
 ${!db.configured?`<div class="mini-banner">${ic('info')}<p><strong>Пока стоят примерные данные.</strong> Укажите свой рост, вес, возраст и пол в <button data-action="nav" data-view="profile" class="tiny-action">профиле →</button></p></div>`:''}
 <div class="metrics">${macroCard('p','Белки',used.p,target.p,'protein')}${macroCard('f','Жиры',used.f,target.f,'fat')}${macroCard('c','Углеводы',used.c,target.c,'carb')}</div>
 <div class="section-heading"><h2>Приёмы пищи</h2><button class="tiny-action" data-action="nav" data-view="diary">Открыть дневник ${ic('arrow')}</button></div>
 ${MEALS.map(m=>{const entries=allEntries().filter(e=>e.mealId===m.id),n=accum(entries.map(e=>e.n));return `<div class="card meal-tile"><div class="meal-image">${m.emoji}</div><div class="meal-info"><div class="meal-name">${m.name}</div><div class="meal-description">${entries.length?entries.slice(0,2).map(e=>esc(e.name)).join(', ')+(entries.length>2?'…':''):'Пока ничего не добавлено'}</div>${entries.length?`<div class="meal-cal">${round(n.kcal)} ккал · ${entries.length} поз.</div>`:''}</div><button class="circle-button" data-action="open-food" data-meal="${m.id}" aria-label="Добавить еду: ${m.name}">${ic('plus')}</button></div>`}).join('')}
 <div class="mini-banner">${ic('sparkle')}<p><strong>Не знаете, что приготовить?</strong> Подберём рацион из 4 приёмов пищи с учётом вашей нормы калорий и БЖУ.</p></div><div style="height:12px"></div><button class="primary block" data-action="nav" data-view="menu">${ic('calendar')} Составить меню на день</button>`;
}
function miniNutrition(n){return `<div class="nutri-line"><span><strong>${round(n.kcal)}</strong> ккал</span><span>Б <strong>${round(n.p)}</strong></span><span>Ж <strong>${round(n.f)}</strong></span><span>У <strong>${round(n.c)}</strong></span></div>`}
function mainMenu(){const plan=ensurePlan(),totals=accum(plan.items.map(plannedNutri)),target=calcTargets(),outdated=plan.profileSignature!==JSON.stringify(target);
 return `<div class="page-title">Меню на день</div><div class="page-sub">Готовый ориентировочный рацион с расчётом порций</div><div class="diary-day-nav"><button class="date-arrow" data-action="prev-day" aria-label="Предыдущий день">${ic('chevronLeft')}</button><strong>${esc(dateLabel(day))}</strong><button class="date-arrow" data-action="next-day" aria-label="Следующий день">${ic('chevronRight')}</button></div>
 <div class="card plan-head"><div class="plan-head-ico">${ic('sparkle')}</div><div style="flex:1"><strong>${num(round(totals.kcal))} из ${num(target.kcal)} ккал</strong><p>Б ${round(totals.p)} г · Ж ${round(totals.f)} г · У ${round(totals.c)} г</p></div><span class="badge-mini">4 блюда</span></div>
 ${outdated?'<div class="warning">Параметры профиля изменились. Обновите меню, чтобы порции соответствовали новой норме.</div>':''}
 <div class="actions-row" style="margin-top:12px"><button class="secondary block" data-action="regenerate">${ic('refresh')} Другое меню</button><button class="primary block" data-action="add-plan-all">${ic('check')} Отметить всё</button></div>
 ${plan.items.map(item=>{const r=recipeById(item.recipeId);if(!r)return '';const meal=MEALS.find(m=>m.id===item.mealId),isEaten=!!planConsumption(day,item.mealId),n=plannedNutri(item),ingredients=r.parts.map(([id,g])=>`${esc(foodById(id)?.name||id)} — ${round(g*item.factor)} г`).join(' · ');
 return `<div class="card menu-card"><div class="menu-card-top"><div class="menu-emoji">${r.emoji}</div><div class="menu-card-head"><span class="tag">${meal.name}</span><h3>${esc(r.name)}</h3><p>Порция ≈ ${round(r.parts.reduce((s,x)=>s+x[1],0)*item.factor)} г</p></div>${isEaten?`<span class="completion">${ic('check')}</span>`:''}</div><div class="ingredients">${ingredients}</div>${miniNutrition(n)}<div class="menu-acts"><button data-action="swap" data-meal="${item.mealId}">${ic('refresh')} Заменить</button><button class="${isEaten?'done':'eat'}" data-action="consume" data-meal="${item.mealId}">${isEaten?'✓ Съедено':'✓ Съел(а)'}</button></div></div>`}).join('')}
 <p class="hint">Состав меню — пример, не лечебная диета. Вес готовых продуктов указан там, где это отражено в названии. Пищевая ценность ориентировочная.</p>`;
}
function weeklyChart(){const t=calcTargets();let days=[];for(let i=6;i>=0;i--)days.push(shiftDate(day,-i));const daysWithFood=days.filter(k=>allEntries(k).length).length;
 return `<div class="card summary-card"><div class="summary-top"><strong>Последние 7 дней</strong><span class="pill">${daysWithFood} / 7 дней</span></div><div class="bars-row">${days.map(key=>{const used=dayIntake(key),pct=clamp(used.kcal/t.kcal,0,1.15);return `<div class="bar-slot ${key===todayKey()?'today':''}" title="${dateLabel(key)}: ${round(used.kcal)} ккал"><div class="bar-track"><div class="bar-fill" style="height:${pct*100/1.15}%"></div></div><div class="bar-day">${esc(weekdayLabel(key))}</div></div>`}).join('')}</div></div>`;
}
function mainDiary(){const used=dayIntake(),target=calcTargets();return `<div class="page-title">Дневник питания</div><div class="page-sub">Вся съеденная еда и история по дням</div><div class="diary-day-nav"><button class="date-arrow" data-action="prev-day" aria-label="Предыдущий день">${ic('chevronLeft')}</button><strong>${esc(dateLabel(day))}</strong><button class="date-arrow" data-action="next-day" aria-label="Следующий день">${ic('chevronRight')}</button></div><div class="card summary-card"><div class="summary-top"><strong>${num(round(used.kcal))} ккал</strong><span class="pill">Цель: ${num(target.kcal)}</span></div><div class="progress protein" style="margin-top:14px;height:9px"><span style="width:${prg(used.kcal,target.kcal)}%"></span></div><div class="summary-totals"><span>Б <b>${round(used.p)} г</b></span><span>Ж <b>${round(used.f)} г</b></span><span>У <b>${round(used.c)} г</b></span></div></div>
 ${MEALS.map(m=>{const group=allEntries().filter(e=>e.mealId===m.id),cal=round(accum(group.map(e=>e.n)).kcal);return `<div class="meal-group"><div class="group-title">${m.emoji} ${m.name}<span>${cal} ккал</span></div>${group.map(e=>`<div class="card food-line"><span class="food-emoji">${esc(e.emoji||'🍽️')}</span><div class="food-line-body"><div class="food-line-name">${esc(e.name)}</div><div class="food-line-sub">${e.grams?`${round(e.grams)} г · `:''}Б ${round(e.n.p)} · Ж ${round(e.n.f)} · У ${round(e.n.c)}</div></div><strong class="food-line-cal">${round(e.n.kcal)}</strong><button class="trash" data-action="remove-entry" data-id="${attrsafe(e.id)}" aria-label="Удалить ${esc(e.name)}">${ic('trash')}</button></div>`).join('')}${group.length?'':`<div style="font-size:12px;color:#9caa9f;padding:7px 3px 6px">Пока пусто</div>`}<button class="text-button" data-action="open-food" data-meal="${m.id}">${ic('plus')} Добавить продукт</button></div>`}).join('')}
 <div class="section-heading"><h2>Статистика</h2></div>${weeklyChart()}`;}
function mainProfile(){const p=db.profile,t=calcTargets(),activity=[['1.2','Минимальная · сидячий образ жизни'],['1.375','Невысокая · 1–3 тренировки / нед.'],['1.55','Умеренная · 3–5 тренировок / нед.'],['1.725','Высокая · 6–7 тренировок / нед.'],['1.9','Очень высокая · тяжёлые нагрузки']];
 const select=(options,value)=>options.map(([v,title])=>`<option value="${attrsafe(v)}" ${String(value)===String(v)?'selected':''}>${esc(title)}</option>`).join('');
 return `<div class="page-title">Мои параметры</div><div class="page-sub">Изменяйте данные — и приложение пересчитает нормы</div>
 <form id="profile-form" class="settings-form"><div class="card fields-card"><h3>Основные данные</h3><div class="field-grid"><div class="field full"><label for="sex">Пол (для формулы обмена веществ)</label><select id="sex" name="sex">${select([['male','Мужской'],['female','Женский']],p.sex)}</select></div><div class="field"><label for="age">Возраст, лет</label><input id="age" type="number" inputmode="numeric" min="18" max="100" name="age" value="${esc(p.age)}" required></div><div class="field"><label for="weight">Вес, кг</label><input id="weight" type="number" inputmode="decimal" min="30" max="350" step="0.1" name="weight" value="${esc(p.weight)}" required></div><div class="field"><label for="height">Рост, см</label><input id="height" type="number" inputmode="numeric" min="110" max="230" name="height" value="${esc(p.height)}" required></div><div class="field"><label for="activity">Активность</label><select id="activity" name="activity">${select(activity,p.activity)}</select></div><div class="field full"><label for="goal">Цель</label><select id="goal" name="goal">${select([['lose','Снижение веса (−15% калорий)'],['maintain','Поддержание веса'],['gain','Набор веса (+10% калорий)']],p.goal)}</select></div></div></div>
 <div class="card fields-card"><h3>Точная настройка (необязательно)</h3><div class="field-grid"><div class="field"><label for="manualKcal">Калории, ккал</label><input id="manualKcal" name="manualKcal" type="number" min="0" max="8000" step="10" inputmode="numeric" value="${esc(p.manualKcal||'')}" placeholder="Авто"></div><div class="field"><label for="manualP">Белки, г</label><input id="manualP" name="manualP" type="number" min="0" max="450" step="1" inputmode="numeric" value="${esc(p.manualP||'')}" placeholder="Авто"></div><div class="field"><label for="manualF">Жиры, г</label><input id="manualF" name="manualF" type="number" min="0" max="350" step="1" inputmode="numeric" value="${esc(p.manualF||'')}" placeholder="Авто"></div></div><p class="small-note">Пустое поле или 0 — автоматический расчёт. Углеводы рассчитываются как остаток калорий после белков и жиров.</p></div><button class="primary block" type="submit">${ic('check')} Сохранить и пересчитать</button></form>
 <div class="result-card"><div class="overline">ВАША ДНЕВНАЯ ЦЕЛЬ</div><div class="result-kcal">${num(t.kcal)} ккал</div><div class="result-description">Основной обмен: ${num(t.bmr)} ккал · Поддержание: ≈ ${num(t.maintenance)} ккал</div><div class="result-chips"><span>Б ${t.p} г</span><span>Ж ${t.f} г</span><span>У ${t.c} г</span></div></div>
 ${t.hasTightMacros?'<div class="warning">При текущих параметрах расчёт оставляет мало углеводов. Проверьте ручные нормы и при необходимости обсудите рацион со специалистом.</div>':''}
 <div class="section-heading"><h2>Данные и конфиденциальность</h2></div><div class="card fields-card"><div class="link-row"><div><strong>Продуктов добавлено</strong><div class="page-sub">Мои продукты в справочнике</div></div><span class="badge-mini">${db.customFoods.length}</span></div><div class="link-row"><div><strong>Записей о питании</strong><div class="page-sub">За все дни</div></div><span class="badge-mini">${Object.values(db.entries).flat().length}</span></div><p class="small-note">Все данные хранятся локально в браузере на этом устройстве. Учётной записи и передачи данных на сервер нет.</p><div class="file-actions"><button class="secondary" data-action="backup" type="button">${ic('download')} Экспорт</button><button class="secondary" data-action="choose-import" type="button">${ic('upload')} Импорт</button></div><input type="file" id="import-json" accept=".json,application/json" style="display:none"><div style="text-align:center;padding-top:12px"><button class="danger" data-action="reset" type="button">Удалить все данные</button></div></div>
 <p class="small-note">Расчёт для взрослых (18+): формула Миффлина–Сан Жеора с поправкой на активность. Значения БЖУ — ориентиры, не медицинские назначения. Не учитываются заболевания, беременность, лекарства и индивидуальные противопоказания.</p>`;}
function renderTop(){return `<div class="top-bar"><div class="brand"><div class="brand-logo">${ic('leaf')}</div><div>мой рацион<div class="top-meta">питание с балансом</div></div></div><button class="avatar" data-action="nav" data-view="profile" aria-label="Профиль">${ic('user')}</button></div>`;}
function renderNav(){return `<nav class="nav" aria-label="Разделы приложения">${[['today','home','Сегодня'],['menu','calendar','Меню'],['diary','book','Дневник'],['profile','user','Профиль']].map(([v,i,label])=>`<button type="button" class="nav-item ${view===v?'active':''}" data-action="nav" data-view="${v}" ${view===v?'aria-current="page"':''}>${ic(i)}<span>${label}</span></button>`).join('')}</nav>`;}
function render(){const html={today:mainToday,menu:mainMenu,diary:mainDiary,profile:mainProfile}[view]();document.getElementById('app').innerHTML=`<div class="app-shell">${renderTop()}<main class="app-main">${html}<div class="powered">Мой рацион · Ваши данные принадлежат вам</div></main>${renderNav()}${view==='diary'?`<button class="floating-add" data-action="open-food" data-meal="breakfast" aria-label="Добавить продукт">${ic('plus')}</button>`:''}${modal?renderModal():''}</div>`;}
function renderModal(){if(modal==='food'){const food=selectedFood?foodById(selectedFood):null;const gram=Number(document.getElementById('food-grams')?.value)||100;
 return `<div class="overlay" data-action="overlay"><section class="sheet" role="dialog" aria-modal="true" aria-label="Добавить еду"><div class="sheet-grab"></div><div class="sheet-heading"><h2>Добавить еду</h2><button class="close" data-action="close-modal" aria-label="Закрыть">${ic('close')}</button></div><div class="search-box">${ic('search')}<input id="food-search" type="search" autocomplete="off" placeholder="Название продукта" value="${attrsafe(searchQuery)}" aria-label="Поиск продукта"></div><div class="search-results" id="search-results">${renderFoodResults()}</div><button class="text-button" data-action="open-custom">${ic('plus')} Создать свой продукт</button><form id="food-form"><div class="field-grid"><div class="field"><label for="food-grams">Количество, г</label><input id="food-grams" type="number" inputmode="decimal" min="1" max="10000" step="1" value="100" required></div><div class="field"><label for="food-meal">Приём пищи</label><select id="food-meal">${MEALS.map(m=>`<option value="${m.id}" ${entryMeal===m.id?'selected':''}>${m.name}</option>`).join('')}</select></div></div><div class="selection" id="selected-summary">${food?selectionHTML(food,gram):'Выберите продукт из списка'}</div><div class="modal-foot"><button class="primary block" type="submit" ${!selectedFood?'disabled':''}>${ic('plus')} Добавить в дневник</button></div></form></section></div>`;
 }if(modal==='custom')return `<div class="overlay" data-action="overlay"><section class="sheet" role="dialog" aria-modal="true" aria-label="Новый продукт"><div class="sheet-grab"></div><div class="sheet-heading"><h2>Новый продукт</h2><button class="close" data-action="close-modal" aria-label="Закрыть">${ic('close')}</button></div><p class="page-sub" style="margin-bottom:16px">Введите пищевую ценность на 100 г. Значения можно посмотреть на упаковке.</p><form id="custom-form"><div class="field full"><label for="custom-name">Название</label><input id="custom-name" required maxlength="80" placeholder="Например, йогурт любимой марки"></div><div class="field-grid"><div class="field"><label for="custom-kcal">Калории / 100 г</label><input id="custom-kcal" type="number" min="0" max="1000" step=".1" inputmode="decimal" required></div><div class="field"><label for="custom-p">Белки, г / 100 г</label><input id="custom-p" type="number" min="0" max="100" step=".1" inputmode="decimal" required></div><div class="field"><label for="custom-f">Жиры, г / 100 г</label><input id="custom-f" type="number" min="0" max="100" step=".1" inputmode="decimal" required></div><div class="field"><label for="custom-c">Углеводы, г / 100 г</label><input id="custom-c" type="number" min="0" max="100" step=".1" inputmode="decimal" required></div></div><div class="modal-foot"><button class="secondary" type="button" data-action="open-food" data-meal="${entryMeal}">Назад</button><button class="primary block" type="submit">Сохранить продукт</button></div></form></section></div>`;
 return '';
}
function selectionHTML(food,grams){const n=scaled(food,grams/100);return `<strong>${esc(food.name)}</strong><div style="margin-top:4px">${round(n.kcal)} ккал · Б ${num(n.p,1)} · Ж ${num(n.f,1)} · У ${num(n.c,1)}</div>`;}
function renderFoodResults(){const list=[...db.customFoods,...FOODS],term=searchQuery.toLowerCase().trim(),filtered=list.filter(f=>f.name.toLowerCase().includes(term)).slice(0,60);return filtered.length?filtered.map(f=>`<button class="search-entry ${selectedFood===f.id?'selected':''}" data-action="select-food" data-id="${attrsafe(f.id)}" type="button"><span class="emoji">${esc(f.emoji||'🍽️')}</span><div><div class="name">${esc(f.name)}</div><div class="sub">${round(f.kcal)} ккал · Б ${num(f.p,1)} · Ж ${num(f.f,1)} · У ${num(f.c,1)} / 100 г</div></div>${selectedFood===f.id?`<div class="check">${ic('check')}</div>`:''}</button>`).join(''):'<div class="search-empty">Не найдено. Создайте свой продукт.</div>';}
function toast(msg){document.getElementById('toast')?.remove();clearTimeout(noticeTimer);const el=document.createElement('div');el.id='toast';el.className='toast';el.textContent=msg;document.body.appendChild(el);noticeTimer=setTimeout(()=>el.remove(),2500)}
function openFood(meal){modal='food';entryMeal=MEALS.some(m=>m.id===meal)?meal:'breakfast';selectedFood=null;searchQuery='';render();setTimeout(()=>document.getElementById('food-search')?.focus({preventScroll:true}),10)}
function changeDate(delta){day=shiftDate(day,delta);render();window.scrollTo(0,0)}
function saveProfile(form){const f=new FormData(form),p={sex:String(f.get('sex')),age:Number(f.get('age')),weight:Number(f.get('weight')),height:Number(f.get('height')),activity:Number(f.get('activity')),goal:String(f.get('goal')),manualKcal:Number(f.get('manualKcal'))||0,manualP:Number(f.get('manualP'))||0,manualF:Number(f.get('manualF'))||0};
 if(!(p.age>=18&&p.age<=100&&p.weight>=30&&p.weight<=350&&p.height>=110&&p.height<=230)){toast('Проверьте возраст, рост и вес');return;}
 if(p.manualP*4+p.manualF*9>calcTargets(p).kcal){toast('Белки и жиры превышают заданную калорийность');return;}
 db.profile=p;db.configured=true;persist();render();toast('Нормы пересчитаны');}
function saveFood(){if(!selectedFood){toast('Выберите продукт');return;}const food=foodById(selectedFood);if(!food){toast('Продукт не найден');return;}const grams=Number(document.getElementById('food-grams').value);const mealId=document.getElementById('food-meal').value;if(!Number.isFinite(grams)||grams<1||grams>10000){toast('Введите корректный вес в граммах');return;}
 const e={id:makeId(),name:food.name,emoji:food.emoji,grams,mealId,n:scaled(food,grams/100),createdAt:Date.now()};db.entries[day]=[...allEntries(),e];persist();modal=null;render();toast('Продукт добавлен');}
function saveCustom(){const el=id=>document.getElementById(id),name=el('custom-name').value.trim();const val=id=>Number(el(id).value);const custom={id:'custom'+makeId(),name,kcal:val('custom-kcal'),p:val('custom-p'),f:val('custom-f'),c:val('custom-c'),emoji:'🍽️'};
 if(!name||[custom.kcal,custom.p,custom.f,custom.c].some(n=>!Number.isFinite(n)||n<0)||custom.p+custom.f+custom.c>200){toast('Проверьте данные продукта');return;}
 db.customFoods.unshift(custom);selectedFood=custom.id;searchQuery=name;persist();modal='food';render();toast('Свой продукт добавлен');}
function downloadBackup(){const blob=new Blob([JSON.stringify({app:'moi-racion',version:1,exportedAt:new Date().toISOString(),...db},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`moi-racion-${todayKey()}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Резервная копия подготовлена');}
async function importBackup(file){try{if(file.size>5e6)throw Error('Слишком большой файл');const data=JSON.parse(await file.text());if(data.app!=='moi-racion'||!data.profile||!data.entries||!data.plans||!Array.isArray(data.customFoods))throw Error('Неверный файл резервной копии');
 if(!confirm('Заменить текущие данные данными из резервной копии?'))return;
 db={profile:{...defaultProfile,...data.profile},entries:data.entries,plans:data.plans,customFoods:data.customFoods,configured:!!data.configured};persist();modal=null;render();toast('Данные восстановлены');}catch(e){toast('Импорт не выполнен: '+e.message)}}
function addPlanAll(){const plan=ensurePlan();const list=allEntries();const before=list.length;for(const item of plan.items){if(list.some(e=>e.planSlot===item.mealId))continue;const r=recipeById(item.recipeId);list.push({id:makeId(),name:r.name,emoji:r.emoji,grams:Math.round(r.parts.reduce((s,x)=>s+x[1],0)*item.factor),mealId:item.mealId,planSlot:item.mealId,n:plannedNutri(item),createdAt:Date.now()})}
 db.entries[day]=list;persist();render();toast(before===list.length?'Все блюда уже отмечены':'Меню добавлено в дневник')}
function handleAction(el,event){const a=el.dataset.action;switch(a){case 'nav':view=el.dataset.view;modal=null;render();window.scrollTo(0,0);break;
 case 'prev-day':changeDate(-1);break;case 'next-day':changeDate(1);break;case 'go-today':day=todayKey();render();break;
 case 'open-food':openFood(el.dataset.meal);break;case 'close-modal':modal=null;render();break;
 case 'overlay':if(event.target===el){modal=null;render();}break;
 case 'select-food':selectedFood=el.dataset.id;document.getElementById('search-results').innerHTML=renderFoodResults();document.getElementById('selected-summary').innerHTML=selectionHTML(foodById(selectedFood),Number(document.getElementById('food-grams').value)||100);document.querySelector('#food-form button[type="submit"]').disabled=false;break;
 case 'open-custom':modal='custom';render();break;case 'swap':swapRecipe(el.dataset.meal);break;case 'consume':toggleConsumed(el.dataset.meal);break;
 case 'regenerate':if(MEALS.some(m=>planConsumption(day,m.id))&&!confirm('Некоторые блюда уже отмечены как съеденные. Сформировать новый план? Записи в дневнике сохранятся.'))return;generatePlan(day);render();toast('Новое меню готово');break;
 case 'add-plan-all':addPlanAll();break;
 case 'remove-entry':if(!confirm('Удалить запись о продукте?'))return;db.entries[day]=allEntries().filter(e=>e.id!==el.dataset.id);persist();render();toast('Запись удалена');break;
 case 'backup':downloadBackup();break;case 'choose-import':document.getElementById('import-json')?.click();break;
 case 'reset':if(confirm('Удалить профиль, все записи питания, меню и свои продукты? Действие необратимо.')){localStorage.removeItem(STORE_KEY);db=readStore();day=todayKey();render();toast('Данные удалены');}break;
 }}
document.addEventListener('click',e=>{const el=e.target.closest('[data-action]');if(el)handleAction(el,e)});
document.addEventListener('submit',e=>{if(e.target.id==='profile-form'){e.preventDefault();saveProfile(e.target)}else if(e.target.id==='food-form'){e.preventDefault();saveFood()}else if(e.target.id==='custom-form'){e.preventDefault();saveCustom()}});
document.addEventListener('input',e=>{if(e.target.id==='food-search'){searchQuery=e.target.value;document.getElementById('search-results').innerHTML=renderFoodResults()}else if(e.target.id==='food-grams'&&selectedFood){document.getElementById('selected-summary').innerHTML=selectionHTML(foodById(selectedFood),Number(e.target.value)||0)}});
document.addEventListener('change',e=>{if(e.target.id==='import-json'&&e.target.files?.[0])importBackup(e.target.files[0])});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal){modal=null;render()}});
render();
if('serviceWorker'in navigator&&/^https?:$/.test(location.protocol))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
