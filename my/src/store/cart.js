import axios from 'axios';

export default {
    state:{
        cartlist:[{
         qty :1,
         checked:true,
         goods_id :6306609,
         goods_image_url : "http://imgniu.zhaojiafang.com/store/goods/4513/4513_06197120819380493.jpg?imageView2/1/w/300/h/300/ignore-error/1/",
         goods_name : "2019新款棉加绒小女孩图（13372）四件套 1.2m床单款三件套 格子草莓",
         goods_price : "85.00",
         goods_subname: "桃子家居"
        },{
          qty : 1,
          checked:true,
          goods_id: 6367223,
          goods_image_url: "http://imgniu.zhaojiafang.com/store/goods/3459/3459_06199792374119766.jpg?imageView2/1/w/300/h/300/ignore-error/1/",
          goods_name: "2019新款全棉13372四件套青春年华系列 1.8m床单款 雅格",
          goods_price: "135.00",
          goods_subname: "XIWEN-希文家纺"
        }]
    },
    getters:{
        //计算总价
     totalPrice:function(state){
               return state.cartlist.reduce(function(prev,item){
                   if(item.checked == true){
                     prev += item.goods_price*item.qty;
                   }
                    return prev;
               },0)
           },

       //计算商品件数
       totalQty:function(state){
         var count = 0;
        state.cartlist.forEach((item)=>{
            if(item.checked){
                count += item.qty;
            }
        })
           return count;
      }
    },
    mutations:{
        addItem(state,goods){
            state.cartlist.push(goods)
        },
        removeItem(state,id){
            state.cartlist = state.cartlist.filter(item=>item.goods_id!=id);
        },
        changeQty(state,{qty,id}){
            state.cartlist = state.cartlist.map(item=>{
                if(item.goods_id === id){
                    item.qty = qty;
                }
                return item;
            })
        },
        clearCart(state){
            state.cartlist = [];
        },
        //修改商品选中状态
        changeCheck(state,id){
            state.cartlist.forEach((item)=>{
                if(item.goods_id == id){
                 item.checked = !item.checked;
                }
            })
      },
       //全选反选
       allSelect(state,check){   
         state.cartlist.forEach((item)=>{
             item.checked = check;
         })
       }
    },
    actions:{
        //向购物车添加商品
        changeQtyAsync(context,{id,qty}){
            // context：类似与store
            console.log('changeQtyAsync:',qty,id)
           // 需要向服务器获取库存信息，再修改数量
            axios.get('http://localhost:1906/goods/kucun').then(({data})=>{
                let kucun = data.data;
                // 库存不足
                if(qty>kucun){
                    qty = kucun;
                }
                context.commit('changeQty',{id,qty})
            })

            return qty;
        }
     }
}


