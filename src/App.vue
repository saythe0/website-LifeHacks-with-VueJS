<template>
	<Transition>
		<div class="header" v-if="route.name == 'Main'">
			<div class="header__wrapper">
				<div class="container">
					<Navigation color="white" />

					<div class="header__body">
						<div class="header__left">
							<h1 class="header__title">LifeHacks</h1>
							<p class="header__description">Сайт для просмотра лайфхаков и практических советов, которые упростят облегчат долгую житуху и вы будете блестать, как не блестали со времён распада СССР в 2222 году.</p>
						</div>

						<video class="header__video" playsinline autoplay loop muted>
							<source src="@/assets/video.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		</div>
	</Transition>

	<div class="wrapper" v-if="route.name != 'Main'">
		<div class="container">
			<Navigation color="black" />

			<Transition name="slide-fade">
				<router-view />
			</Transition>
		</div>
	</div>
</template>

<script setup>
import { watchEffect } from 'vue'
import Navigation from '@/components/Navigation.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watchEffect(() => {
	$('title').html('WebSite | ' + route.meta.title)
})
</script>
