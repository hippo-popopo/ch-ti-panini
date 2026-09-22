'use client';

import { useEffect, useState } from 'react';
import { Leaf } from '@phosphor-icons/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import sections from './menu-data.json';
import imageData from './menu-images.json';

const images: Record<string, string> = imageData;
const euros = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

export default function Menu() {
  const [category, setCategory] = useState('fromage');

  useEffect(() => {
    const sync = () => {
      const value = new URLSearchParams(location.search).get('carte');
      setCategory(sections.some(section => section.id === value) ? value! : 'fromage');
    };
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [category]);

  function change(value: string) {
    setCategory(value);
    const url = new URL(location.href);
    url.searchParams.set('carte', value);
    window.history.replaceState(null, '', url);
  }

  return (
    <div className="md:px-8">
      <Tabs value={category} onValueChange={change} className="menu-tabs">
        <TabsList aria-label="Catégories de paninis" className="menu-tab-list">
          {sections.map(section => (
            <TabsTrigger key={section.id} value={section.id} className="menu-tab">
              {section.id === 'vegetarien' && <Leaf size={16} aria-hidden="true" />}
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map(section => (
          <TabsContent key={section.id} value={section.id} className="menu-panel">
            <div className="menu-intro flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6 pt-8">
              <h3 className="serif text-3xl">{section.subtitle}</h3>
              <span className="eyebrow">{section.id === 'sucre' ? 'Un peu, beaucoup, passionnément.' : 'À déguster bien chaud.'}</span>
            </div>
            <div className="recipe-grid grid grid-flow-dense grid-cols-1 gap-x-10 md:grid-cols-2">
              {section.recipes.map(recipe => (
                <article className={`recipe-card py-7 ${images[recipe.id] ? 'recipe-card-illustrated' : ''}`} key={recipe.id}>
                  {images[recipe.id] && (
                    <div className="recipe-image-frame">
                      <img
                        src={images[recipe.id]}
                        alt={`${recipe.name} : ${recipe.ingredients.toLowerCase()}. Visuel d’illustration.`}
                        width={960}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="recipe-image"
                      />
                    </div>
                  )}
                  <div className="recipe-description">
                    <div className="flex items-baseline justify-between gap-5">
                      <h4 className="text-xl font-semibold tracking-tight">{recipe.name}</h4>
                      <span className="shrink-0 text-base font-medium tabular-nums">
                        {recipe.price === 0 ? <span className="text-xs text-muted-foreground">Prix au comptoir</span> : euros.format(recipe.price ?? 4.5)}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[440px] text-sm leading-6 text-muted-foreground">{recipe.ingredients}</p>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-9 border-t border-border pt-6">
        {Object.keys(images).length > 0 && <p className="mb-2 text-xs leading-5 text-muted-foreground">Visuels d’illustration générés à partir des recettes. La présentation peut varier au comptoir.</p>}
        <p className="max-w-lg text-xs leading-5 text-muted-foreground">Prix, suppléments et disponibilités à confirmer au comptoir. Pour les allergènes, renseignez-vous auprès de l’équipe.</p>
      </div>
    </div>
  );
}
