const latest_currency=require('./utils/latest')

if(process.argv[2]==='latest'){
    latest_currency((error,data)=>{
        if(error){
            return console.log(error)
        }
        console.log(data)
    })
}
