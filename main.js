const ohMyBirthDay = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(!isKayoSick){
                resolve(2);
            }else{
                reject(new Error('I am sad'));
            }
        }, 2000);
    })
}

ohMyBirthDay(false)
.then((result) => {
    console.log(`I have ${result} cakes`)
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log('Party');
})

ohMyBirthDay(true)
.then((result) => {
    console.log(`I have ${result} cakes`)
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('Party')
})