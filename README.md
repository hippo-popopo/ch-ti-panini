# Au Ch’ti Panini

Site vitrine français pour le commerce au 280 rue Nationale à Lille.

## Identité de la boutique

L’identité reprend la photo de devanture fournie, conservée dans `references/brand/boutique-reference.jpg`. À la demande du client, le site utilise le fond ivoire clair de l’ancienne section Prem’s, du texte anthracite et réserve le fond sombre au menu Prem’s. Le nom en contour reprend le lettrage de l’enseigne supérieure. DynaPuff interprète ce lettrage ; Lobster Two et Barlow Condensed accompagnent les titres. Les trois polices sont hébergées localement.

Le logo du bas est restauré avec l’outil imagegen intégré depuis la photo plus précise `references/brand/boutique-logo-reference.jpg`, puis optimisé en WebP transparent. Le grand S est commun aux mots « Sucrés » et « Salés » et accompagné du mot « et » ; le nom arqué, le macaron ondulé, les mentions « depuis 2004 » et « L’incontournable », ainsi que le pain sont repris de la photo. `app/brand-seal.tsx` affiche `public/images/brand/au-chti-panini-logo.webp`. C’est une restauration depuis photographie, pas le fichier source original. La mention de la boutique unique provient de l’utilisateur et la date de la photographie fournie.

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

## GitHub Pages

Le site est publié à https://hippo-popopo.github.io/ch-ti-panini/. `pnpm build:pages` compile une version statique dans `out`, avec les chemins des images et polices adaptés au préfixe `/ch-ti-panini`. GitHub Pages utilise la racine de la branche `gh-pages`, qui contient uniquement le contenu compilé de `out` et le fichier `.nojekyll`. La branche `main` conserve le code source. Après une modification, recompiler puis actualiser les fichiers de `gh-pages` pour publier ; pousser uniquement `main` ne met pas le site en ligne à jour. Le développement local et la compilation Sites restent disponibles avec les commandes habituelles.
