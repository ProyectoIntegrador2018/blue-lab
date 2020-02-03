<template>
	<div class="container">
		<div class="row h-100">
			<div class="num col-sm">
				<p>{{cont_1}}</p>
				<p class="num-title">{{title_cont_1}}</p>
			</div>
			<div class="num col-sm">
				<p>{{cont_2}}</p>
				<p class="num-title">{{title_cont_2}}</p>
			</div>
			<div class="num col-sm">
				<p>{{cont_3}}</p>
				<p class="num-title">{{title_cont_3}}</p>
			</div>
		</div>
	</div>
</template>



<script>

import {mapState} from 'vuex'

	export default{
		name:"Numbers",
		// data: () => ({
		// 	numbers: [
		// 	{type:"1",value:"88",description:"Proyectos"},
		// 	{type:"2",value:"55",description:"Desarrolladores"},
		// 	{type:"3",value:"99",description:"Certificados"}
		// 	]
		// })
		computed: mapState(['title_cont_1','title_cont_2','title_cont_3','cont_1','cont_2','cont_3']),
	}
</script>

<style >
	.num-title{
		font-size: 20px;
		padding: 0px;
	}

</style>