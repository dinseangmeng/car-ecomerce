import { PrismaClient, Status } from '@prisma/client';
import * as bcrypt from 'bcrypt'
var download = require('download-file')
const prisma = new PrismaClient();


export default  async function seed() {
    


    const salt= await bcrypt.genSalt();
    const hasPassword= await bcrypt.hash("123456",salt);

    var url = `https://api.multiavatar.com/dinseangmeng.png`
    const preUnique=Math.floor(Math.random()*10e10+9999999);

    var newName=`${preUnique}.png`
    var options = {
        directory: "./file/user/",
        filename: newName
    }
    newName=`/file/user/${newName}`
    
    download(url, options, function(err){
        if (err) throw err

    }) 


    await prisma.user.createMany({
        data:[
            { 
                id: 1, 
                email: 'bongmeng@gmail.com' ,
                username:"dinseangmeng",
                firstName:"DIN",
                lastName:"SEANGMENG",
                isactive:true,
                statusId:1,
                password:hasPassword,
                profile:newName
            },
        ]
    })
}

