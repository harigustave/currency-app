const request=require('request')

const convertCurrency=(from, to, amount,callback)=>{
    
    const api_url='http://api.exchangeratesapi.io/v1/convert?access_key=8c6fad5859ec12ce4612fd68c122930c&from='+from+'&to='+to+'&amount='+amount
    
    request({url:api_url, json:true}, (error, response)=>{
        if(error){
            callback(undefined,undefined,undefined,'Unable to access currency service!')
        }
        
        callback({
            output:response.body
        })
    })
}

module.exports=convertCurrency