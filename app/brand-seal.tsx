// Vector interpretation of the lettering on the supplied shop-window photo.
export default function BrandSeal() {
  const edge = Array.from({ length: 80 }, (_, i) => {
    const angle = (i * Math.PI) / 40;
    const radius = i % 2 === 0 ? 61 : 56;
    return `${190 + Math.cos(angle) * radius},${142 + Math.sin(angle) * radius}`;
  }).join(' ');
  return <svg className="shop-seal" viewBox="0 0 380 260" role="img" aria-label="Au Ch’ti Panini, sucré et salé, depuis 2004. L’incontournable.">
    <defs><path id="shop-name-arc" d="M 28 112 Q 190 -14 352 112" /></defs>
    <text className="seal-script seal-name"><textPath href="#shop-name-arc" startOffset="50%" textAnchor="middle">Au Ch’ti Panini</textPath></text>
    <polygon points={edge} fill="currentColor" /><circle cx="190" cy="142" r="50" className="seal-center" /><circle cx="190" cy="142" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="176" y="164" className="seal-script seal-ampersand" textAnchor="middle">&amp;</text>
    <text x="207" y="128" className="seal-script seal-flavour" textAnchor="middle" transform="rotate(-12 207 128)">Sucré</text>
    <text x="210" y="169" className="seal-script seal-flavour" textAnchor="middle" transform="rotate(-12 210 169)">Salé</text>
    <path d="M27 121h85M268 121h85" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="69" y="153" className="seal-date" textAnchor="middle">depuis</text><text x="311" y="153" className="seal-date" textAnchor="middle">2004</text>
    <text x="190" y="239" className="seal-tagline" textAnchor="middle">L’INCONTOURNABLE</text>
  </svg>;
}
