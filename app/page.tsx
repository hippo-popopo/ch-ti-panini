import { assetPath } from '@/lib/asset-path';
import { ArrowUpRight, ArrowDown, MapPin, StarFour } from '@phosphor-icons/react/dist/ssr';
import Menu from './panini-menu';
import Motion from './panini-motion';
import BrandSeal from './brand-seal';

const maps = 'https://www.google.com/maps/dir/?api=1&destination=Au+Ch+Ti+Panini+280+Rue+Nationale+59000+Lille';
export default function Home() {
  return <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <header className="shop-header mx-auto max-w-[1440px] px-6 md:px-14">
      <div className="shop-masthead">
        <p className="masthead-note">Une adresse.<br/>Tout un quartier.</p>
        <a href="#" aria-label="Au Ch’ti Panini, accueil" className="awning-wordmark" translate="no">Au Ch’ti Panini</a>
        <p className="masthead-note text-right">Sucré &amp; salé.<br/>Depuis 2004.</p>
      </div>
      <nav aria-label="Navigation principale" className="shop-nav flex items-center justify-between gap-4">
        <a href="#adresse" className="nav-address hidden items-center gap-2 text-xs md:flex"><MapPin size={14} aria-hidden="true"/> 280 rue Nationale · Lille</a>
        <div className="flex items-center gap-5 text-sm sm:gap-9"><a className="nav-link" href="#carte">La carte</a><a className="nav-link" href="#formule">Le menu Prem’s</a><a className="nav-link hidden sm:block" href="#adresse">La boutique</a></div>
        <a href={maps} target="_blank" rel="noreferrer" className="text-link nav-directions">Y aller <ArrowUpRight size={17} aria-hidden="true"/></a>
      </nav>
    </header>
    <main id="contenu" className="w-full max-w-full overflow-x-hidden">
      <section className="hero mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.05fr_1fr] md:gap-12 md:px-14 md:py-20">
        <div className="hero-copy min-w-0 py-4 md:py-8">
          <p className="eyebrow mb-6">Le p’tit rendez-vous lillois, depuis 2004</p>
          <h1 className="max-w-5xl">L’incontournable.<br/><span className="serif">Sucré &amp; salé.</span></h1>
          <p className="mt-8 max-w-[390px] text-base leading-7 text-muted-foreground">Du pain bien grillé, une garniture généreuse et un p’tit accent du Nord. C’est comme ça, au Ch’ti Panini.</p>
          <div className="mt-9 flex flex-wrap items-center gap-7"><a className="button" href="#carte">Découvrir la carte <ArrowDown size={17} aria-hidden="true"/></a><a className="text-link" href="#adresse">Passer nous voir <ArrowUpRight size={16} aria-hidden="true"/></a></div>
          <p className="hero-signoff mt-12">Une seule boutique. Rue Nationale, à Lille.</p>
        </div>
        <figure className="hero-photo relative min-w-0">
          <div className="shop-window-frame overflow-hidden"><img src={assetPath("/images/menu/le-chti.webp")} alt="Le Ch’ti, panini grillé au jambon, à la mozzarella, à la tomate et au maroilles, image d’illustration" width="960" height="720" fetchPriority="high" className="aspect-[4/3] h-auto w-full object-cover"/></div>
          <figcaption className="photo-caption mt-4 flex items-center justify-between gap-4"><span className="serif">Le Ch’ti, forcément.</span><span className="text-right text-[11px] leading-4 text-muted-foreground">Jambon, mozzarella, tomate &amp; maroilles<br/>Visuel d’illustration</span></figcaption>
        </figure>
      </section>
      <div className="food-ribbon flex items-center justify-center gap-6 overflow-hidden border-y border-border py-5 md:gap-14" aria-label="Paninis salés et sucrés depuis 2004"><span>Bien grillé</span><StarFour size={17} aria-hidden="true"/><span>Bien garni</span><StarFour size={17} aria-hidden="true"/><span>Bien Ch’ti</span></div>
      <section id="carte" className="mx-auto max-w-[1328px] px-6 py-24 md:px-0 md:py-32">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_360px] md:px-8"><div><p className="eyebrow mb-5">La carte du comptoir</p><h2>À chacun<br/><span className="serif">son p’tit préféré.</span></h2></div><p className="max-w-sm text-base leading-7 text-muted-foreground">Du maroilles qui fond au Nutella-banane : les classiques, les bien garnis, et les envies de sucré.</p></div>
        <Menu/>
      </section>
      <section id="formule" className="formula-section relative">
        <div className="mx-auto grid max-w-[1328px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:gap-24 md:px-8 md:py-32">
          <div className="formula-heading self-start"><p className="eyebrow mb-6">Le menu Prem’s</p><h2>La pause complète.<br/><span className="serif">Tout simplement.</span></h2><p className="formula-muted mt-7 max-w-sm leading-7">Un panini, une boisson, un dessert. Tout ce qu’il faut pour faire une vraie pause.</p><div className="formula-price mt-10 flex items-baseline gap-3"><span>6,50</span><span className="price-currency">€</span><span className="price-label ml-2">le menu Prem’s</span></div><p className="formula-muted mt-5 text-xs">Tarif à confirmer sur place.</p></div>
          <div className="formula-list"><div className="formula-row"><span className="formula-number">01</span><div><h3>Un panini salé</h3><p>La recette de votre choix, tout simplement.</p></div></div><div className="formula-row"><span className="formula-number">02</span><div><h3>Une boisson</h3><p>Eau 50 cl, soda 33 cl ou Capri-Sun.</p></div></div><div className="formula-row"><span className="formula-number">03</span><div><h3>Un dessert</h3><p>Un demi-panini Nut, un petit cookie ou un fruit.</p></div></div></div>
        </div>
      </section>
      <section id="adresse" className="mx-auto max-w-[1328px] px-6 py-24 md:px-8 md:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8"><div><p className="eyebrow mb-5">Une seule adresse, depuis 2004</p><h2>Le vrai rendez-vous,<br/><span className="serif">c’est ici.</span></h2></div><a className="button" href={maps} target="_blank" rel="noreferrer">Trouver la boutique <ArrowUpRight size={18} aria-hidden="true"/></a></div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div className="storefront-sign"><BrandSeal/><p className="storefront-caption">Votre pause rue Nationale.</p></div>
          <div className="address-panel border-t border-border"><div className="border-b border-border py-7"><p className="eyebrow mb-3">Au Ch’ti Panini</p><address className="text-2xl not-italic font-medium leading-relaxed">280 rue Nationale<br/>59000 Lille</address></div><div className="border-b border-border py-7"><p className="eyebrow mb-3">Avant de passer</p><p className="mb-4 leading-7 text-muted-foreground">Retrouvez les horaires actualisés et les avis de nos visiteurs sur Google.</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Au+Ch+Ti+Panini+280+Rue+Nationale+Lille" target="_blank" rel="noreferrer">Horaires et avis Google <ArrowUpRight size={17} aria-hidden="true"/></a></div></div>
        </div>
      </section>
    </main>
    <footer className="border-t border-border"><div className="mx-auto flex max-w-[1328px] flex-col justify-between gap-8 px-6 py-10 sm:flex-row sm:items-center md:px-8"><a href="#" className="awning-wordmark footer-wordmark" aria-label="Au Ch’ti Panini, retour en haut" translate="no">Au Ch’ti Panini</a><p className="text-sm text-muted-foreground">L’incontournable, depuis 2004.</p><a href="#carte" className="text-link text-sm">La carte <ArrowUpRight size={16} aria-hidden="true"/></a></div><div className="mx-auto max-w-[1328px] px-6 pb-6 text-xs text-muted-foreground md:px-8">Au Ch’ti Panini · Lille · Tarifs et disponibilités à confirmer au comptoir.</div></footer>
    <Motion/>
  </>;
}
