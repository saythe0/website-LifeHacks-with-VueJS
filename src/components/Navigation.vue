<template>
	<nav :class="'nav color-' + color">
		<router-link :to="{ name: 'Main' }" class="nav__logo">
			<img src="@/assets/logo.svg" alt="" class="nav__logo-image" />
			<p class="nav__logo-text">LifeHacks</p>
		</router-link>

		<div class="nav__items">
			<router-link :to="{ name: 'News' }" class="nav__link">Новости</router-link>
			<router-link :to="{ name: 'Lifehacks' }" class="nav__link">Лайфхаки</router-link>
			<router-link :to="{ name: 'Advices' }" class="nav__link">Советы</router-link>
			<router-link :to="{ name: 'Team' }" class="nav__link">Команда</router-link>
			<router-link :to="{ name: 'Contact' }" class="nav__link">Контакты</router-link>
		</div>
	</nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
	color: String,
})

const count = ref(0)
</script>
