# Au Ch’ti Panini

Site vitrine français pour le commerce au 280 rue Nationale à Lille.

## Identité de la boutique

L’identité reprend la photo de devanture fournie, conservée dans `references/brand/boutique-reference.jpg` : fond anthracite vert, lettrage ivoire, nom arrondi en contour blanc inspiré de l’enseigne supérieure, et signature manuscrite de la vitre. DynaPuff interprète le lettrage de l’enseigne ; Lobster Two et Barlow Condensed accompagnent les titres. Les trois polices sont hébergées localement. Il s’agit d’une interprétation numérique, pas du fichier original du logo.

Le macaron « Sucré & Salé », sa bordure dentelée, « depuis 2004 » et « L’incontournable » sont repris en SVG dans `app/brand-seal.tsx`. La mention de la boutique unique provient de l’utilisateur et la date de la photographie fournie.

## Développement

- Node.js 22.13 ou version supérieure
- Installer les dépendances avec `pnpm install`
- Démarrer avec `pnpm dev`
- Compiler avec `pnpm build`

Les recettes sont définies dans `app/menu-data.json` et affichées par `app/panini-menu.tsx`. Les textes sont dans `app/page.tsx`, le thème dans `app/globals.css` et les animations dans `app/panini-motion.tsx`.

## Informations à valider avant ouverture publique

Les tarifs et recettes sont retranscrits depuis les trois photos d’ardoises fournies. Les prix des deux Printaniers ne sont pas visibles et renvoient au comptoir. Les horaires détaillés et le téléphone ne sont pas fournis : le site dirige vers Google pour les horaires actualisés. Les suppléments restent à confirmer auprès du commerce. L’établissement devra fournir les informations légales adaptées avant une ouverture publique.

Les ardoises originales sont conservées uniquement comme sources dans `references/ardoises/` et ne sont pas publiées. L’image d’accueil `menu/le-chti.webp` est un visuel d’illustration généré avec l’outil imagegen intégré, et cette nature est mentionnée sur la page.

Direction commune : photographie réaliste d’un panini ovale et aplati, aux proportions de la référence fournie (environ 18 × 8 cm), coupé en deux pour montrer sa garniture. Papier et fond crème, lumière douce et chaude, cadrage légèrement plongeant, sans texte ni logo, format paysage 4:3. Chaque recette utilise exclusivement ses propres ingrédients.

## Photos par recette

Les recettes sont centralisées dans `app/menu-data.json`. `app/menu-images.json` associe les recettes aux images disponibles. Les visuels sont générés directement avec ChatGPT et indiqués comme illustrations.

Les 43 recettes disposent chacune d’un visuel, généré avec l’outil imagegen intégré à ChatGPT puis vérifié et optimisé en WebP dans `public/images/menu/`. Les prompts et les sources sont conservés dans `references/image-generation/chatgpt-manifest.json` et `chatgpt-progress.json`. Le script `scripts/import-menu-images.mjs` optimise les visuels et actualise leur correspondance. Les anciennes tentatives de génération restent dans les références comme historique et ne sont pas utilisées sur le site.
