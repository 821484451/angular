var db = require('../db/db')

//此页面写后端接口
module.exports = { 
	register:function(app){
        //分页
        app.get('/cakelist',function(req,res){
            if(req.query.pagenumber&&req.query.pagesize){
                var _pagenumber=req.query.pagenumber*1;
                var _pagesize=req.query.pagesize*1;
                var sql = `select * from cakelista limit ${_pagenumber*_pagesize},${_pagesize}`;
            }else{
                var sql = `select * from cakelista`;
            }
            

           
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        app.get('/orderlist',function(req,res){
            if(req.query.pagenumber&&req.query.pagesize){
                var _pagenumber=req.query.pagenumber*1;
                var _pagesize=req.query.pagesize*1;
                var sql = `select * from orderlist limit ${_pagenumber*_pagesize},${_pagesize}`;
            }else{
                var sql = `select * from orderlist`;
            }
            
            db.select(sql,function(data){
                res.send(data);
            })
        })
        app.get('/userlist',function(req,res){
            if(req.query.pagenumber&&req.query.pagesize){
                var _pagenumber=req.query.pagenumber*1;
                var _pagesize=req.query.pagesize*1;
                var sql = `select * from user limit ${_pagenumber*_pagesize},${_pagesize}`;
            }else{
                var sql = `select * from user`;
            }

            db.select(sql,function(data){
                res.send(data);
            })
        })
        app.get('/carlist',function(req,res){
            if(req.query.pagenumber&&req.query.pagesize){
                var _pagenumber=req.query.pagenumber*1;
                var _pagesize=req.query.pagesize*1;
                var sql = `select * from carlist limit ${_pagenumber*_pagesize},${_pagesize}`;
            }else{
                var sql = `select * from carlist`;
            }
            
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        //改
        app.post('/cakelistedict',function(req,res){
            var _id = Number(req.body.id);
            var _imgurl = req.body.imgurl;
            var _EnglishName = req.body.EnglishName;
            var _ChinaName = req.body.ChinaName;
            var _price = req.body.price;
            var _type = req.body.type;
            var _changjing = req.body.changjing;
            var _guige = req.body.guige;
            var _chicun = req.body.chicun;
            var _canju = req.body.canju;
            var _peoplenumber = req.body.peoplenumber;
      
            var sql = `update cakelista set
                id = '${_id}',
                imgurl = '${_imgurl}',
                EnglishName = '${_EnglishName}',
                ChinaName = '${_ChinaName}',
                price = '${_price}',
                type = '${_type}',
                changjing = '${_changjing}',
                guige = '${_guige}',
                chicun = '${_chicun}',
                canju = '${_canju}',
                peoplenumber = '${_peoplenumber}'
            where id='${_id}'`;
            db.select(sql,function(data){
                res.send(data);
            })

        })

        app.post('/orderlistedict',function(req,res){
            var _orderid=req.body.orderid;
            var _img = req.body.img;
            var _title = req.body.title;
            var _price = req.body.price;
            var _size = req.body.size;
             var _qty = req.body.qty;
            var _total = req.body.total;
            var _deliveryman = req.body.deliveryman;
            
            var _delivertime = req.body.delivertime;
            var _goods = req.body.goods;
            var _phonenumber = req.body.phonenumber;
            var _address = req.body.address;
            var _way = req.body.way;
            var _state = req.body.state;
            var sql = `update orderlist set
               
                img = '${_img}',
                title = '${_title}',
                price = '${_price}',
                size = '${_size}',
                qty = '${_qty}',
                total = '${_total}',
                deliveryman = '${_deliveryman}',
                
                delivertime = '${_delivertime}',
                phonenumber = '${_phonenumber}',
                goods='${_goods}',
                address = '${_address}',
                way = '${_way}',
                state = '${_state}'
            where orderid='${_orderid}'`;
            db.select(sql,function(data){
                res.send(data);
            })

        })
        app.post('/userlistedict',function(req,res){
            var _userid = Number(req.body.userid);
            var _phonenumber = req.body.phonenumber;
            var _password = req.body.password;
            var _myname = req.body.myname;
            var _gender = req.body.gender;
            var _birthday = req.body.birthday;
            var _email = req.body.email;
            var _address = req.body.address;
            var _bestproduct = req.body.bestproduct;
           
      
            var sql = `update user set
                userid = '${_userid}',
                phonenumber = '${_phonenumber}',
                password = '${_password}',
                myname = '${_myname}',
                gender = '${_gender}',
                birthday = '${_birthday}',
                email = '${_email}',
                address = '${_address}',
                bestproduct = '${_bestproduct}'
            where userid='${_userid}'`;
            db.select(sql,function(data){
                res.send(data);
            })

        })
        app.post('/carlistedict',function(req,res){
            var _carid = Number(req.body.carid);
            var _chinaName = req.body.chinaName;
            var _price = req.body.price;
            var _qty = req.body.qty;
            var _imgurl = req.body.imgurl;
            var _sta = req.body.sta;
            var _EnglishName = req.body.EnglishName;
            
      
            var sql = `update carlist set
                carid = '${_carid}',
                imgurl = '${_imgurl}',
                EnglishName = '${_EnglishName}',
                chinaName = '${_chinaName}',
                price = '${_price}',
                qty = '${_qty}',
                imgurl = '${_imgurl}',
                sta = '${_sta}'
            where carid='${_carid}'`;
            db.select(sql,function(data){
                res.send(data);
            })

        })



        //增
        app.post('/cakelistadd',function(req,res){
            console.log(req.body);
            var _imgurl = req.body.imgurl;
            var _EnglishName = req.body.EnglishName;
            var _ChinaName = req.body.ChinaName;
            var _price = req.body.price;
            var _priceB = req.body.priceB;
            var _type = req.body.type;
            var _changjing = req.body.changjing;
            var _guige = req.body.guige;
            var _chicun = req.body.chicun;
            var _canju = req.body.canju;
            var _peoplenumber = req.body.peoplenumber;
                var sql=`insert into  cakelista (
                    imgurl,
                    EnglishName,
                    ChinaName,
                    price,
                    priceB,
                    type,
                    changjing,
                    guige,
                    chicun,
                    canju,
                    peoplenumber
                )
                values
                (
                   '${_imgurl}',
                   '${_EnglishName}',
                   '${_ChinaName}',
                   '${_price}',
                   '${_priceB}',
                   '${_type}',
                   '${_changjing}',
                   '${_guige}',
                   '${_chicun}',
                   '${_canju}',
                   '${_peoplenumber}'
                )
            `
      
            db.insert(sql,function(data){
                res.send(data);
            })
        })

        app.post('/userlistadd',function(req,res){
            console.log(req.body);
            var _phonenumber = req.body.phonenumber;
            var _password = req.body.password;
            var _name = req.body.name;
            var _gender = req.body.gender;
            var _birthday = req.body.birthday;
            var _email = req.body.email;
            var _address = req.body.address;
            var _hobby = req.body.hobby;
            var _phone = req.body.phone;
            var _house = req.body.house;
            var _nickname = req.body.nickname;
            var _city = req.body.city;
           
                 var sql=`insert into  user (
                    address,
                    name,
                    city,
                    phone,
                    house,
                    phonenumber,
                    password,
                    gender,
                    nickname,
                    birthday,
                    email,
                    hobby
                )
                values
                (
                   '${_address}',
                   '${_name}',
                   '${_city}',
                   '${_phone}',
                   '${_house}',
                   '${_phonenumber}',
                   '${_password}',
                   '${_nickname}',
                   '${_gender}',
                   '${_birthday}',
                   '${_email}',
                   '${_hobby}'
                  
                )
            `
      
            db.insert(sql,function(data){
                res.send(data);
            })
        })

        app.post('/orderlistadd',function(req,res){
            console.log(req.body);
           
            var _img = req.body.img;
            var _title = req.body.title;
            var _price = req.body.price;
            var _size = req.body.size;
            var _qty = req.body.qty;
            var _total = req.body.total;
            var _deliveryman = req.body.deliveryman;
            var _phonenumber = req.body.phonenumber;
            var _address = req.body.address;
            var _way = req.body.way;
            var _state = req.body.state;

    
            var sql=`insert into  orderlist (
                    
                    img,
                    title,
                    price,
                    size,
                    qty,
                    total,
                    deliveryman,
                    phonenumber,
                    address,
                    way,
                    state
                )
                values
                (
                   
                   '${_img}',
                   '${_title}',
                   '${_price}',
                   '${_size}',
                   '${_qty}',
                   '${_total}',
                   '${_deliveryman}',
                   '${_phonenumber}',
                   '${_address}',
                   '${_way}',
                   '${_state}'
                   
                )
            `
      
            db.insert(sql,function(data){
                res.send(data);
            })
        })
        app.post('/carlistadd',function(req,res){
            console.log(req.body);
            var _chinaName = req.body.chinaName;
            var _EnglishName = req.body.EnglishName;
            var _price = req.body.price;
            var _qty = req.body.qty;
            var _imgurl = req.body.imgurl;
            var _sta = req.body.sta;
           
                 var sql=`insert into  carlist (
                 
                    chinaName,
                    EnglishName,
                    qty,
                    price,
                    sta,
                    imgurl
                   
                )
                values
                (
                   '${_chinaName}',
                   '${_EnglishName}',
                   '${_qty}',
                   '${_price}',
                   '${_sta}',
                   '${_imgurl}'
                )
            `
      
            db.insert(sql,function(data){
                res.send(data);
            })
        })
        //查
        
        app.get('/cakelistcheck',function(req,res){
            var _ChinaName=req.query.ChinaName;
            var condition='%'+_ChinaName+'%'
            var sql=`select * from cakelista where ChinaName like '${condition}'`
            db.select(sql,function(data){
                res.send(data);
            })
        })







        //删
        app.get('/cakelistdelete',function(req,res){

            var _id = req.query.id;
            var sql = `delete from cakelista where id = ${_id}`;
            db.delete(sql,function(data){
                res.send(data);
            })
        })
        app.get('/orderlistdelete',function(req,res){

            var _orderid = req.query.orderid;
            var sql = `delete from orderlist where orderid = ${_orderid}`;
            db.delete(sql,function(data){
                res.send(data);
            })
        })
        app.get('/userlistdelete',function(req,res){

            var _userid = req.query.userid;
            var sql = `delete from user where userid = ${_userid}`;
            db.delete(sql,function(data){
                res.send(data);
            })
        })
        app.get('/carlistdelete',function(req,res){

            var _carid = req.query.carid;
            var sql = `delete from carlist where carid = ${_carid}`;
            db.delete(sql,function(data){
                res.send(data);
            })
        })



        
 

        
        
        
       
        
      
	}
}
