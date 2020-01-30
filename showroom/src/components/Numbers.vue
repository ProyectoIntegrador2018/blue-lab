<template>
	<div class="container">
		<div class="row h-100">
			<div class="num col-sm" v-for="number in numbers" :key="number.type">
				<p>{{number.value}}</p>
				<p class="num-title">{{number.description}}</p>
			</div>
		</div>
	</div>
</template>



<script>
	export default{
		name:"Numbers",
		data: () => ({
			numbers: [
			{type:"1",value:"88",description:"Proyectos"},
			{type:"2",value:"55",description:"Desarrolladores"},
			{type:"3",value:"99",description:"Certificados"}
			]
		})
	}
</script>

<style >
	.num-title{
		font-size: 20px;
		padding: 0px;
	}

</style>