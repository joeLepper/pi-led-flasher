var gpio = require('pi-gpio')

  , flash = function(interval,callback){

      gpio.open(22,function(){
        gpio.write(22,1,function(){
          setTimeout(function(){
            gpio.write(22,0,function(){
              gpio.close(22,callback())
            })
          },interval)
        })
      })
    }

exports.flash = flash
