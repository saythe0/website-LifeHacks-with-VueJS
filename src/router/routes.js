import Main from '@/pages/Main.vue'
import News from '@/pages/News.vue'
import Lifehacks from '@/pages/Lifehacks.vue'
import Advices from '@/pages/Advices.vue'
import Team from '@/pages/Team.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
	{
		path: '/',
		name: 'Main',
		meta: {
			title: 'Главная',
		},
	},
	{
		path: '/news',
		component: News,
		name: 'News',
		meta: {
			title: 'Новости',
		},
	},
	{
		path: '/lifehacks',
		component: Lifehacks,
		name: 'Lifehacks',
		meta: {
			title: 'Лайфхаки',
		},
	},
	{
		path: '/advices',
		component: Advices,
		name: 'Advices',
		meta: {
			title: 'Cоветы',
		},
	},
	{
		path: '/team',
		component: Team,
		name: 'Team',
		meta: {
			title: 'Команда',
		},
	},
	{
		path: '/contact',
		component: Contact,
		name: 'Contact',
		meta: {
			title: 'Контакты',
		},
	},
]

export default routes
