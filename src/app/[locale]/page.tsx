import LanguageSwitcher from '@/LanguageSwitcher';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image'


export default async function HomePage({ params }: { params: { lang: string } }) {
  const t = await getTranslations('HomePage');

  return (
    <div className="p-6">
      

      
      
      <header>
        
        {/* <Image src='/images/unsplash_nbRgZltoOck.png' width={100} height={100} alt='picture' /> */}
      </header>
    </div>
  );
}