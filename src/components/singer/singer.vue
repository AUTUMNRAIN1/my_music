<template>
	<div>歌手</div>
	
</template>
	<!-- https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&jsonpCallback=__jp0 -->
<script type="text/javascript">
import {getSingerList} from 'api/singer'
import {ERR_OK} from 'api/config'
	export default {
		data(){
			return{
				singers:[],
				recommends:[]
			}
		},
		created(){
			this._getSingerList();
		},
		methods:{
			_getSingerList(){
				console.log(3)
				getSingerList().then((res)=>{
					console.log(4)
					if(res.code === ERR_OK){
						this.singers = res.data.list;
						console.log("aaaa",this.singers)
					}else{
						console.log("error")
					}
				})				
			}
		}

	}
</script>


<style>
	div
		color:#fff
</style>

