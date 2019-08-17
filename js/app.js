const todos = [
	{
		id: 1,
		title: '睡觉',
		complate: true
	},
	{
		id: 2,
		title: '打游戏',
		complate: false
	},
	{
		id: 1,
		title: '写代码',
		complate: false
	}
]

	const app = new Vue({
		el: '#app',
		data: {
			todos,
			currentEdit: null
		},
		methods: {
			add(e){
				/*console.log(e.target.value)*/
				const todotext = e.target.value.trim()
				if(!todotext.length){
					return
				}
				todos.push({
					/*如果有项，则添加项id根据原最高项id+1。若没有项，添加项id为1*/
					id: todos.length ? todos[todos.length-1].id : 1,
					title: todotext,
					complate: false
				})
				e.target.value = ''
			},
			addAll(e){
				/*点击checkbox触发*/
				/*获取checkbox的checked状态*/
				/*遍历列表项，使其complate状态与checked状态保持一致*/
				const checked = e.target.checked
				this.todos.forEach(item => item.complate = checked)
			},
			remove(index){
				this.todos.splice(index,1)
			},
			edit(item){
				this.currentEdit = item
			},
			editAdd(item,index,e){
				/*当进入编辑模式时，获取文本框内容，如果为空，去除该元素。如果有，则将title改为编辑后的title*/
				if(!e.target.value.length){
					this.todos.splice(index,1)
				}
				item.title = e.target.value
				/*退出编辑样式*/
				this.currentEdit = null
			},
			editEsc(){
				this.currentEdit = null
			},
			removeAllsuccess(){
				const todos = this.todos
				for(var i=0;i<todos.length;i++){
					if(todos[i].complate){
						todos.splice(i,1)
						i--
					}
				}
			}

		}
	})


