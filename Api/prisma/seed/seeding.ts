import status from './seed.status'
import user from './seed.users'


user()
.then(()=>{
    console.log("------------------User Seeding SuccessFul------------------\n");
    
})
.catch((error) => {
    console.error(error);
})
status()
.then(()=>{
    console.log("------------------Status Seeding SuccessFul------------------\n");
    
})
.catch((error) => {
    console.error(error);
})
