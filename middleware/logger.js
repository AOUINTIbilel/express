let date = new Date();

let currentHour = date.getHours();
let currentDay = date.getDate();

const logger = (req,res,next) =>{
    if (currentHour >8 && currentHour <17 && currentDay >0 && currentDay < 6) {
            next();

        }
        else{
            res.send("<img src='https://i0.wp.com/www.bullring.org/wp-content/uploads/2021/01/kids-1.jpg?w=1200&ssl=1' alt'closed'/>")
        }
}
module.exports = logger