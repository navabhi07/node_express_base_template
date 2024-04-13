const express= require('express')

const app= express();
const {PORT}=require('./config')
const apiRoutes=require('./routes');
const {ServerConfig,logger}=require('./config')
app.use('/api',apiRoutes);






app.listen(ServerConfig.PORT, () => {
    console.log(`⚙️ Server is running at port : ${ServerConfig.PORT}`);
    logger.info("successfully started server",{});
})


