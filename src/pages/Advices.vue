<template>
	<section class="section">
		<h1 class="section__title">Практические советы</h1>
		<div class="section__body">
			<div :class="'drop-block' + (item.isClassAdded ? ' active' : '')" v-for="(item, index) in items" :key="index">
				<div class="drop-block__head" @click="addOrRemoveClass(index)">
					<h3 class="drop-block__name">Совет: "Трюк-Игнор"</h3>
					<svg class="drop-block__svg" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.5">
							<rect y="11" width="27" height="5" rx="2.5" fill="black" />
							<rect x="16" width="27" height="5" rx="2.5" transform="rotate(90 16 0)" fill="black" />
						</g>
					</svg>
				</div>

				<Transition name="fade-slide">
					<p class="drop-block__text" v-if="item.isClassAdded">Моя попытка научить кота трюкам закончилась тем, что он профессионально игнорировал меня. Теперь я думаю, что он считает себя магистром по трюкам, а я - его преданным ассистентом.</p>
				</Transition>
			</div>
		</div>
	</section>
</template>

<script setup>
import { reactive } from 'vue'

const items = Array(3)
	.fill()
	.map(() => reactive({ isClassAdded: false }))

const addOrRemoveClass = index => {
	items[index].isClassAdded = !items[index].isClassAdded
}
</script>
