

export default {
    name:'order',
    type:'document',
    title: 'Order',
    fields:[
        {
            name:'firstName',
            type:'string',
            title:'First Name'
        },
        {
            name:'lastName',
            type:'string',
            title:'Last Name'
        },
        {
            name:'address',
            type:'string',
            title:'Address'
        },
        {
            name:'city',
            type:'string',
            title:'City'
        },
        {
            name:'zipCode',
            type:'number',
            title:'Zip Code'
        },
        {
            name:'phone',
            type:'number',
            title:'Phone'
        },
        {
            name:'cartItems',
            type:'array',
            title:'Cart Items',
            of: [
                {
                  type: 'reference',
                  to: [{ type: 'products' }], // Assuming you have a 'product' schema
                },
              ],
        },
        {
            name:'total',
            type:'number',
            title:'Total'
        },
        {
            name:'discount',
            type:'number',
            title:'Discount'
        },
        {
            name:'status',
            type:'string',
            title:'Order Status',
            options: {
                list:[
                    {title:'Pending', value:'pending'},
                    {title:'Success', value:'success'},
                    {title:'Dispatch', value:'dispatch'},
                ],
                layout:'radio'
            },
            intaialValue:'pending'//default value
        },
    
    ]
}