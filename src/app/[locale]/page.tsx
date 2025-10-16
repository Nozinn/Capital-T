import LanguageSwitcher from '@/LanguageSwitcher';
import { getTranslations } from 'next-intl/server';


export default async function HomePage({ params }: { params: { lang: string } }) {
  const t = await getTranslations('HomePage');

  return (
    <div className="p-6">
      <h1 >{t('title')}</h1>

      <label htmlFor="lang" className="block mt-4 mb-2 text-sm font-medium">
     
      </label>
      <LanguageSwitcher currentLang={params.lang} />
    </div>
  );
}