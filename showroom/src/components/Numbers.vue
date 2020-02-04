<template>
	<div class="container">
		<div class="row h-100">
			<div class="num col-sm">
				<animated-number :value="cont_1" :formatValue="func" :easing="easing" :duration="duration"/>
				<p class="num-title">{{title_cont_1}}</p>
			</div>
			<div class="num col-sm">
				<animated-number :value="cont_2" :formatValue="func" :easing="easing" :duration="duration"/>
				<p class="num-title">{{title_cont_2}}</p>
			</div>
			<div class="num col-sm">
				<animated-number :value="cont_3" :formatValue="func" :easing="easing" :duration="duration"/>
				<p class="num-title">{{title_cont_3}}</p>
			</div>
		</div>
	</div>
</template>



<script>

import {mapState} from 'vuex';
import AnimatedNumber from 'animated-number-vue';

	export default{
		name:"Numbers",
		components:{
			AnimatedNumber
		},
		data() {
			return{
				easing: 'easeOutCirc',
				duration: 1500,
			}
		},
		computed:{
			...mapState(['title_cont_1','title_cont_2','title_cont_3','cont_1','cont_2','cont_3']),
			
		},
		methods:{
			func(num){
				return num.toFixed(0);
			}
		}
		
		
	}
</script>

<style >
	.num-title{
		font-size: 20px;
		padding: 0px;
	}

</style>



