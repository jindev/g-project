'use strict';

var glob = require('glob'),
    chalk = require('chalk');


module.exports = function(){
  glob('./config/env/' + process.env.NODE_ENV + ",js",{
      sync : true
  },function(err,envFiles){
      if(!envFiles.length){

      }else{
          console.log(chalk.black.bgWhite('env'));
      }
  });
};