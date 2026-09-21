import { ArrowUpRight, ArrowDown, MapPin, Heart } from '@phosphor-icons/react/dist/ssr';
import Menu from './panini-menu';
import Motion from './panini-motion';

const maps = 'https://www.google.com/maps/dir/?api=1&destination=Au+Ch+Ti+Panini+280+Rue+Nationale+59000+Lille';
export default function Home() {
  return <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <header className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-6 py-6 md:px-14 md:py-7">
      <a href="#" aria-label="Au Ch’ti Panini, accueil" className="brand" translate="no"><span>au ch’ti</span><strong>panini<span className="brand-dot">.</span></strong></a>
      <nav aria-label="Navigation principale" className="flex items-center gap-7 text-sm font-medium md:gap-10">
        <a className="nav-link hidden sm:block" href="#carte">La carte</a><a className="nav-link hidden md:block" href="#formule">Le menu Prem’s</a><a className="nav-link hidden md:block" href="#adresse">Nous trouver</a>
        <a href={maps} target="_blank" rel="noreferrer" className="button button-small">On se retrouve ? <ArrowUpRight size={17} aria-hidden="true"/></a>
      </nav>
    </header>
    <main id="contenu" className="w-full max-w-full overflow-x-hidden">
      <section className="hero mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pb-16 pt-6 md:grid-cols-[1.08fr_1fr] md:gap-8 md:px-14 md:pb-20 md:pt-9">
        <div className="hero-copy relative z-[1] py-4 md:py-12">
          <p className="eyebrow mb-7 flex items-center gap-2"><MapPin size={15} aria-hidden="true"/> Le rendez-vous gourmand, à Lille</p>
          <h1 className="max-w-5xl">Chaud devant.<br/><span className="serif">Bon dedans.</span></h1>
          <p className="mt-7 max-w-[365px] text-base leading-7 text-muted-foreground">Du pain doré, du fromage qui fond et votre recette préférée. Votre prochaine pause se passe rue Nationale.</p>
          <div className="mt-9 flex flex-wrap items-center gap-7"><a className="button" href="#carte">Découvrir la carte <ArrowDown size={17} aria-hidden="true"/></a><a className="text-link" href="#adresse">Passer nous voir <ArrowUpRight size={16} aria-hidden="true"/></a></div>
          <p className="mt-12 flex items-center gap-2 text-sm text-muted-foreground"><Heart size={18} aria-hidden="true"/> Un p’tit coin de Lille. Beaucoup de gourmandise.</p>
        </div>
        <figure className="hero-photo relative min-w-0"><div className="overflow-hidden rounded-tl-[120px] rounded-br-[100px] md:rounded-tl-[180px]"><img src="/images/panini-long.png" alt="Deux paninis longs grillés, garnis de jambon, mozzarella et tomate, image d’illustration" width="1536" height="1024" fetchPriority="high" className="aspect-[5/4] h-auto w-full object-cover"/></div><figcaption className="mt-3 text-right text-xs text-muted-foreground">Suggestion gourmande · visuel d’illustration</figcaption></figure>
      </section>
      <div className="food-ribbon flex items-center justify-center gap-8 overflow-hidden border-y border-border py-5 text-sm font-medium md:gap-16" aria-label="Paninis salés, paninis sucrés, petits prix"><span>Bien grillé.</span><span aria-hidden="true">✳</span><span>Bien garni.</span><span aria-hidden="true">✳</span><span>Toujours gourmand.</span><span aria-hidden="true" className="hidden sm:inline">✳</span><span className="hidden sm:inline">Tout simplement.</span></div>
      <section id="carte" className="mx-auto max-w-[1328px] px-6 py-24 md:px-0 md:py-32">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_360px] md:px-8"><div><p className="eyebrow mb-4">À chacun son p’tit préféré</p><h2>La faim justifie<br/><span className="serif">les bons moyens.</span></h2></div><p className="max-w-sm text-base leading-7 text-muted-foreground">Plutôt Ch’ti au maroilles ou Nutella-banane ? Le plus difficile, c’est de choisir.</p></div>
        <Menu/>
      </section>
      <section id="formule" className="formula-section relative bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1328px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:gap-24 md:px-8 md:py-32">
          <div className="formula-heading self-start"><p className="eyebrow mb-6 opacity-75">La pause complète</p><h2>Un p’tit menu.<br/><span className="serif">Un grand oui.</span></h2><p className="mt-7 max-w-sm leading-7 text-[#e2d3c4]">Le menu Prem’s réunit l’essentiel : du salé, de quoi se désaltérer et une touche sucrée.</p><div className="mt-10 flex items-baseline gap-3"><span className="text-[90px] font-semibold leading-none tracking-[-.07em]">6,50</span><span className="text-4xl">€</span><span className="ml-2 text-sm text-[#e2d3c4]">le menu Prem’s</span></div><p className="mt-5 text-xs text-[#e2d3c4]">Tarif à confirmer sur place.</p></div>
          <div className="formula-list"><div className="formula-row"><span className="formula-number">01</span><div><h3>Un panini salé</h3><p>La recette de votre choix, tout simplement.</p></div></div><div className="formula-row"><span className="formula-number">02</span><div><h3>Une boisson</h3><p>Eau 50 cl, soda 33 cl ou Capri-Sun.</p></div></div><div className="formula-row"><span className="formula-number">03</span><div><h3>Un dessert</h3><p>Un demi-panini Nut, un petit cookie ou un fruit.</p></div></div></div>
        </div>
      </section>
      <section id="adresse" className="mx-auto grid max-w-[1328px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:gap-24 md:px-8 md:py-32">
        <div><p className="eyebrow mb-5">Au coin de votre journée</p><h2>On vous garde<br/><span className="serif">une p’tite pause.</span></h2><p className="mt-7 max-w-sm leading-7 text-muted-foreground">Pour le déjeuner ou une envie de sucré, rendez-vous au 280 rue Nationale.</p><a className="button mt-8" href={maps} target="_blank" rel="noreferrer">C’est par ici <ArrowUpRight size={18} aria-hidden="true"/></a></div>
        <div className="address-panel border-t border-border"><div className="border-b border-border py-7"><p className="eyebrow mb-3">L’adresse</p><address className="text-2xl not-italic font-medium leading-relaxed">280 rue Nationale<br/>59000 Lille</address></div><div className="border-b border-border py-7"><p className="eyebrow mb-3">Avant de passer</p><p className="mb-4 leading-7 text-muted-foreground">Retrouvez les horaires actualisés et les avis de nos visiteurs sur Google.</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Au+Ch+Ti+Panini+280+Rue+Nationale+Lille" target="_blank" rel="noreferrer">Horaires et avis Google <ArrowUpRight size={17} aria-hidden="true"/></a></div></div>
      </section>
    </main>
    <footer className="border-t border-border"><div className="mx-auto flex max-w-[1328px] flex-col justify-between gap-8 px-6 py-10 sm:flex-row sm:items-end md:px-8"><a href="#" className="brand" aria-label="Au Ch’ti Panini, retour en haut" translate="no"><span>au ch’ti</span><strong>panini.</strong></a><p className="text-sm text-muted-foreground">Du cœur, du pain, et un p’tit accent du Nord.</p><a href="#carte" className="text-link text-sm">La carte <ArrowUpRight size={16} aria-hidden="true"/></a></div><div className="mx-auto max-w-[1328px] px-6 pb-6 text-xs text-muted-foreground md:px-8">Au Ch’ti Panini · Lille · Tarifs et disponibilités à confirmer au comptoir.</div></footer>
    <Motion/>
  </>;
}
