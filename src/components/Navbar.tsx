import LanguageSwitcher from '@/LanguageSwitcher'
import { Menu } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function Navbar({ locale }: { locale: string }) {
	const t = await getTranslations('HomePage')
	console.log(locale)

	return (
		<div>
			<nav className='flex justify-between items-center py-[20px] lg:py-[30px] w-[90%] m-auto'>
				<Image src='/images/logo (17).svg' alt='logo' width={48} height={48} />
				<ul className='hidden lg:flex items-center gap-[50px]'>
					<li className='cursor-pointer'>{t('li1')}</li>
					<li className='cursor-pointer'>{t('li2')}</li>
					<li className='cursor-pointer'>{t('li3')}</li>
					<li className='cursor-pointer'>{t('li4')}</li>
					<li className='cursor-pointer'>{t('li5')}</li>
					<li className='cursor-pointer'>{t('li6')}</li>
				</ul>
				<div className='flex items-center gap-[30px]'>
					<LanguageSwitcher currentLang={locale} />
					<button className='text-[#FFA900] cursor-pointer'>
						<Menu className='w-[40] h-[40]' />
					</button>
				</div>
			</nav>
		</div>
	)
}
