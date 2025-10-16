'use client'

import { useRouter } from 'next/navigation'

export default function LanguageSwitcher({
	currentLang,
}: {
	currentLang: string
}) {
	const router = useRouter()

	const handleChange = (e: any) => {
		router.push(`/${e.target.value}`)
		console.log(currentLang)
	}
	console.log(currentLang)

	return (
		<select
			value={currentLang}
			defaultValue={currentLang}
			onChange={handleChange}
			className='border rounded px-2 py-1'
		>
			<option value='en'>English</option>
			<option value='ru'>Русский</option>
		</select>
	)
}
