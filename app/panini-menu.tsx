'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Leaf } from '@phosphor-icons/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

type Recipe = { name:string; ingredients:string; price?:number };
const sections:{id:string;title:string;subtitle:string;recipes:Recipe[]}[]=[
{id:'fromage',title:'Fromage',subtitle:'Du fondant. Et du caractère.',recipes:[
{name:'Le Ch’ti',ingredients:'Jambon, mozzarella, tomates, maroilles'},
{name:'Le Chèvre',ingredients:'Chèvre, mozzarella, tomates, basilic, huile d’olive'},
{name:'Le 3 Fromages',ingredients:'Gorgonzola, mozzarella, chèvre'},
{name:'Le Maya',ingredients:'Chèvre, miel, noix, mozzarella'},
{name:'Le Savoyard',ingredients:'Lardons, mozzarella, raclette, pomme de terre'}]},
{id:'poulet',title:'Poulet',subtitle:'Une recette pour chaque envie.',recipes:[
{name:'L’Indien',ingredients:'Poulet, mozzarella, tomates, sauce curry'},
{name:'Le Texan',ingredients:'Poulet, mozzarella, cheddar, sauce barbecue'},
{name:'Le Marbella',ingredients:'Poulet, mozzarella, cheddar, tomates, sauce andalouse'},
{name:'Le Capri',ingredients:'Poulet, mozzarella, tomates, olives, herbes de Provence, huile d’olive'},
{name:'Le Mezzo',ingredients:'Poulet, mozzarella, tomates, sauce pesto'}]},
{id:'jambon',title:'Jambon',subtitle:'Les classiques ont toujours raison.',recipes:[
{name:'Le Croq',ingredients:'Jambon, fromage — nature, ketchup ou barbecue'},
{name:'Le Parisien',ingredients:'Jambon, fromage, tomates fraîches'},
{name:'Le Milano',ingredients:'Jambon, fromage, tomates fraîches, sauce pesto'},
{name:'Le Roma',ingredients:'Jambon, fromage, champignons'},
{name:'Le Forestier',ingredients:'Jambon, fromage, champignons, crème fraîche'}]},
{id:'viande',title:'Viande hachée',subtitle:'Pour les faims qui ne plaisantent pas.',recipes:[
{name:'Le Burger',ingredients:'Viande hachée, mozzarella, sauce burger, ketchup, cheddar'},
{name:'Le Spicy',ingredients:'Viande hachée, mozzarella, sauce samouraï, oignons frits, cheddar, ketchup'},
{name:'Le Colorado',ingredients:'Viande hachée, mozzarella, bacon, sauce barbecue, cheddar, oignons frits'}]},
{id:'vegetarien',title:'Végétariens',subtitle:'Tout le plaisir, côté végétarien.',recipes:[
{name:'Le Tout Simple',ingredients:'Tomates, mozzarella, huile d’olive, basilic'},
{name:'Le Provençal',ingredients:'Tomates, olives, mozzarella, herbes de Provence, huile d’olive'},
{name:'Le Pesto',ingredients:'Tomates, mozzarella, sauce pesto'},
{name:'Le Champi',ingredients:'Crème fraîche, mozzarella, emmental, champignons'}]},
{id:'autres',title:'Les inclassables',subtitle:'Les petits détours gourmands.',recipes:[
{name:'Le Nordique',ingredients:'Saumon fumé, mozzarella, crème fraîche'},
{name:'Le Nordique au miel',ingredients:'Saumon fumé, mozzarella, crème fraîche, miel'},
{name:'Le New Delhi',ingredients:'Poulet, sauce curry, tomates, salade — sans mozzarella',price:0},
{name:'L’Andalou',ingredients:'Poulet, sauce andalouse, tomates, salade — sans mozzarella',price:0}]},
{id:'sucre',title:'Les sucrés',subtitle:'Encore une p’tite place ?',recipes:[
{name:'Le Nut',ingredients:'Nutella',price:2.5},
{name:'Le Split',ingredients:'Nutella, banane',price:3},
{name:'Le Coco',ingredients:'Nutella, noix de coco',price:3},
{name:'Le Banoffee',ingredients:'Banane, caramel, crème fouettée',price:3},
{name:'Le Duo',ingredients:'Nutella, chocolat blanc',price:3},
{name:'Le Color’s',ingredients:'Nutella, M&M’s ou Smarties',price:3},
{name:'Le Spéculoos',ingredients:'Crème de spéculoos, spéculoos, caramel',price:3},
{name:'L’Antillais',ingredients:'Nutella, banane, noix de coco',price:3},
{name:'Le Snickers',ingredients:'Caramel au beurre salé, Snickers, cacahuètes',price:3},
{name:'Le Nut Amande',ingredients:'Nutella, amandes effilées',price:3},
{name:'Le Marshmallow',ingredients:'Nutella, marshmallow',price:3},
{name:'Le Tagada',ingredients:'Nutella, fraises Tagada',price:3},
{name:'Le Marbré',ingredients:'Chocolat blanc, caramel',price:3},
{name:'L’Oréo',ingredients:'Nutella, chocolat blanc, brisures d’Oréo',price:3},
{name:'Le Croquant',ingredients:'Nutella, éclats de noisettes caramélisés',price:3},
{name:'Le Quiberon',ingredients:'Caramel au beurre salé, éclats de noisettes caramélisés',price:3},
{name:'Le Super Bueno',ingredients:'Nutella, Bueno',price:3}]}
];
const euros=new Intl.NumberFormat('fr-FR',{style:'currency',currency:'EUR'});
export default function Menu(){
 const [category,setCategory]=useState('fromage');
 useEffect(()=>{const sync=()=>{const value=new URLSearchParams(location.search).get('carte');setCategory(sections.some(s=>s.id===value)?value!:'fromage');};sync();window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);},[]);
 function change(value:string){setCategory(value);const url=new URL(location.href);url.searchParams.set('carte',value);window.history.replaceState(null,'',url);}
 return <div className="md:px-8"><Tabs value={category} onValueChange={change} className="menu-tabs">
 <TabsList aria-label="Catégories de paninis" className="menu-tab-list">{sections.map(s=><TabsTrigger key={s.id} value={s.id} className="menu-tab">{s.id==='vegetarien'&&<Leaf size={16} aria-hidden="true"/>}{s.title}</TabsTrigger>)}</TabsList>
 {sections.map(s=><TabsContent key={s.id} value={s.id} className="menu-panel"><div className="menu-intro flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6 pt-8"><h3 className="serif text-3xl">{s.subtitle}</h3><span className="eyebrow">{s.id==='sucre'?'Un peu, beaucoup, passionnément.':'À déguster bien chaud.'}</span></div><div className="grid grid-flow-dense grid-cols-1 gap-x-14 md:grid-cols-2">{s.recipes.map(r=><article className="recipe py-6" key={r.name}><div className="flex items-baseline justify-between gap-5"><h4 className="text-xl font-semibold tracking-tight">{r.name}</h4><span className="shrink-0 text-base font-medium tabular-nums">{r.price===0?<span className="text-xs text-muted-foreground">Prix au comptoir</span>:euros.format(r.price??4.5)}</span></div><p className="mt-2 max-w-[390px] text-sm leading-6 text-muted-foreground">{r.ingredients}</p></article>)}</div></TabsContent>)}
 </Tabs><div className="mt-9 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row"><p className="max-w-lg text-xs leading-5 text-muted-foreground">Carte retranscrite depuis nos ardoises. Prix, suppléments et disponibilités à confirmer au comptoir. Pour les allergènes, renseignez-vous auprès de l’équipe.</p><a className="text-link shrink-0 self-start" href={category==='sucre'?'/images/carte-sucree.webp':'/images/carte-salee.webp'} target="_blank" rel="noreferrer">Voir l’ardoise originale <ArrowUpRight size={16} aria-hidden="true"/></a></div></div>;
}
