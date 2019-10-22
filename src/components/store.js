import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const CLICK_SEARCH ='CLICK_SEARCH'



export default new Vuex.Store({
	state:{
		//vue의 data와 같은것   computed 에서 불러서 사용하면됨
		listDatas:[{
			index:0,
			text:"P-999K 사용절차와 수리방법",
			name : "중위 위대한"
		},{
			index:1,
			text:"여단화상회의 PC 접속방법과 군단회의 접속",
			name : "소위 한서준"
		},
		{
			index:2,
			text:"P6-520 오류 종류",
			name : "소령 정평화"
			
		},
		{
			index:3,
			text:"P6-520 오류 종류",
			name : "중사 한명한"
			
		},
		{
			index:4,
			text:"P6-520 오류 종류",
			name : "중사 김근영"
			
		},{
			index:5,
			text:"P6-520 오류 종류",
			name : "중사 김근영"
			
		},{
			index:6,
			text:"P6-520 오류 종류",
			name : "중사 김근영"
			
		},{
			index:7,
			text:"P6-520 오류 종류",
			name : "중사 김근영"
			
		},{
			index:8,
			text:"P6-520 오류 종류",
			name : "중사 김근영"
			
		},],
		search:'',
		
		
		
	},
	mutations:{
		//vuex의 methods와 같은것
		[CLICK_SEARCH](state,searchContent){
			//console.log("클릭서치2")
			state.search=searchContent
			
		},
		
	}
	
	
	
	
	
	
	
});