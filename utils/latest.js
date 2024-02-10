const request=require('request')

const getLatestCurrency=(callback)=>{
    
    const api_url="http://api.exchangeratesapi.io/v1/latest?access_key=8c6fad5859ec12ce4612fd68c122930c"
    
    request({url:api_url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to access currency service!', undefined)
        }
        callback({
            Base:response.body.base,
            Rates:response.body.rates
        })
    })
}

module.exports=getLatestCurrency