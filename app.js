const latest_currency=require('./utils/latest')
const convert_currency=require('./utils/conversion')

if(process.argv[2]==='latest'){
    latest_currency((error,latest_data)=>{
        if(error){
            return console.log(error)
        }
        console.log(latest_data)
    })
}else if(process.argv[2]==='convert'){
    from=process.argv[3]
    to=process.argv[4]
    amount=process.argv[5]
    convert_currency(from, to, amount, (error,converted_data)=>{
        if(error){
            return console.log(error.output.error.message)
        }

        console.log(converted_data)
    })
}
