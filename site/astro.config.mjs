import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sunscreen',
			social: {
				github: 'https://github.com/decompyl/sunscreen',
			},
			sidebar: [
				{
						label: 'Getting Started',
						link: '/getting-started/',
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{
							label: '@sunscreen/core',
							autogenerate: { directory: 'reference/core' },
						}

					]
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});