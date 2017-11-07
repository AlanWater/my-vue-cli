<script>
export default {
    name: "myTest",
    data () {
        return {
            routerParam: this.$route.params.routerParam,
            list:['one','two','three']
        }
    },
    render(h){
            return <div><button on-click={this.changeData} type="button">change data</button>
                        {
                            this.routerParam=='1'?
                                'this is 1':
                                this.routerParam=='2'?
                                    'this is 2':
                                    <ul>{this.list.map(item=><li>{item}</li>)}</ul>
                        }
                   </div>
    },
    methods:{
        changeData(){
            this.routerParam = this.routerParam%3+1;
        }
    },
    watch:{
        routerParam:function(newVal,oldVal){
            console.log(newVal);
        }
    }
}
</script>