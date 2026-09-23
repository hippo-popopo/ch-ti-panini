import { assetPath } from '@/lib/asset-path';
export default function BrandSeal() {
  return <img
    className="shop-seal"
    src={assetPath("/images/brand/au-chti-panini-logo.webp")}
    alt="Au Ch’ti Panini — Sucrés et Salés, depuis 2004. L’incontournable."
    width={1200}
    height={936}
    loading="lazy"
    decoding="async"
  />;
}
