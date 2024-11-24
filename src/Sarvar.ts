
import mongoose from 'mongoose'
import config from './config';
import app from './app';
async function main() {
    try{
        await mongoose.connect(process.env.DATABAJES as string);
        app.listen(config.prot, () => {
            console.log(`Example app listening on port ${config.prot}`)
          })
      }catch(err){
console.log(err);

      }
    }




  main()