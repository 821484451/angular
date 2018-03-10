var db = require('../db/db')

//此页面写前端接口
module.exports = {
	register:function(app){
		//home(首页)组件请求接口
		//好车推荐
		app.get('/haoche',function(req,res){
			var sql = `select * from cars where haoche='true'`

			db.select(sql,function(data){
				res.send(data);
			})
		})
		
		//保卖车
		app.get('/baomai',function(req,res){
			var sql = `select * from cars where baomai='true'`
			db.select(sql,function(data){
				res.send(data);
			})
		})
		
		//降价急售
		app.get('/jishou',function(req,res){
			var sql = `select * from cars where jishou='true'`
			db.select(sql,function(data){
				res.send(data);
			})
		})
		
		
		//---------为你推荐的接口------------
        app.get('/suggest',function(req,res){
            var sql = `select * from cars where car_area='广州'`;

            db.select(sql, function(data){
                res.send(data);
            })
        })
		
		
		//根据传过来的 类型 返回对应的数据
		app.get('/classify',function(req,res){
//		    console.log(req.query);
		    var sql;
		    if(req.query.n == 1){
		        sql = `select * from cars where biansuxiang='自动'`
		    }
		    else if(req.query.n == 2){
		        sql = `select * from cars where baomai='true'`
		    }
		    else if(req.query.n == 3){
                sql = `select * from cars where mileage<10`
            }
		    else if(req.query.n == 4){
                sql = `select * from cars where jishou='true'`
            }
		    db.select(sql,function(data){
                res.send(data);
            })
		})
		
		
		//prolist(列表页，买车)组件请求接口
		//查询车辆，品牌分类（品牌名传过来，返回对应品牌的车型）
        app.get('/qchaxun',function(req,res){
            var _data = req.query.data;

            var sql = `select * from cars where brand_name='${_data}'`;
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        
        //根据价格区间，返回对应车辆信息
        app.get('/scope',function(req,res){
//          console.log(req.query);
            var _low = req.query.low;
            var _high = req.query.high;
            var sql = `select * from cars where oprice>='${_low}' and oprice<='${_high}'`
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        
        //价格排序接口
        //价格由高到低
        app.get('/sorthigh',function(req,res){
//          var sort = req.query.way;
//          var sql = `select from cars ORDER BY oprice ${sort}`;
            var sql = `select * from cars order By oprice desc`;
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        //价格由低到高
        app.get('/sortlow',function(req,res){
            var sql = `select * from cars order By oprice asc`;
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
		
		
		
		//数据库所有商品，allcar 请求所有车的数据（可以成功返回数据）
		app.get('/allcar',function(req,res){
            var sql = `select * from cars` ;

            db.select(sql, function(data){
                res.send(data);
            })
        })
		
		//一条数据(测试) ---------------------
		app.get('/one',function(req,res){
            var sql = `select * from cars where id=50` ;

            db.select(sql, function(data){
                res.send(data);
            })
        })
		
		//通过id查找车辆
		app.get('/idchaxun',function(req,res){
		    var _id = req.query.id;
            var sql = `select * from cars where id='${_id}'`;
            db.select(sql, function(data){
                res.send(data);
            })
        })
		
		
		
		//获取买车接口
		app.get('/getcar',function(req,res){
		    var _user_name = req.query.user_name;
            var sql = `select * from orders where user_name='${_user_name}'`;
            
            db.select(sql, function(data){
                res.send(data);
            })
        })
		 
		

		
		//预约看车接口
		app.get('/bookcar',function(req,res){
		    var _user = req.query.username;
		    var _phone = req.query.phone;
		    var _test_time = req.query.test_time;
		    var _test_area = req.query.test_area;
		    var sql = `insert into bookcar (
		        user,
		        phone,
		        test_shijian,
		        test_area
		    )
		    values(
		        '${_user}',
		        '${_phone}',
		        '${_test_time}',
		        '${_test_area}'
		    )
		    `
		    db.insert(sql,function(data){
                res.send(data);
            })
		})
		
		
		//卖车信息
		app.get('/sellcar',function(req,res){
		    console.log(req.query)
            var _brand = req.query.brand;
            var _license_shijian = req.query.license_shijian;
            var _mileage = req.query.mileage;
            var _license_area = req.query.license_area;
            var _car_status = req.query.car_status;
            var sql = `insert into sellcar (
                brand,
                license_shijian,
                mileage,
                license_area,
                car_status,
                imgurl
            )
            values(
                '${_brand}',
                '${_license_shijian}',
                '${_mileage}',
                '${_license_area}',
                '${_car_status}',
                'project/src/img/aodi1.jpg'
            )
            `
            db.insert(sql,function(data){
                res.send(data);
            })
        })
		
		//请求卖车订单里的所以数据
        app.get('/getdata',function(req,res){
            var sql = `select * from sellcar`
            db.select(sql, function(data){
                res.send(data);
            })
        })
		      
		
		//mine(我的)组件请求接口
		
		
		
		//获取订单数据
        app.get('/getorders',function(req,res){
            var sql =`select * from orders`
            db.select(sql,function(data){
                res.send(data);
            })
        })

        // 把订单信息写入数据库
        app.get('/orderx',function(req,res){
            console.log(req.query);
            var _username = req.query.username;
            var _car_name = req.query.car_name;
            var _imgurl = req.query.imgurl;
            var _mileage = req.query.mileage;
            var _oprice = req.query.oprice;
            var _type = req.query.type;
            var _license_time = req.query.license_time;

            var sql = `insert into orders (user_name,car_name,imgurl,mileage,oprice,type,license_time) 
                values
                ('${_username}','${_car_name }','${_imgurl}','${_mileage}','${_oprice}','${_type}','2018-2-9')`;
            db.insert(sql,function(data){
                res.send(data);
            })
        });
//     
//     // 支付后删除购物车商品
//      app.get('/orderdel',function(req,res){
//          console.log(req.query);
//          var _id = req.query.id;
//          var sql = `delete from goods_order where id = ${_id}`;
//          console.log(sql);
//          db.delete(sql,function(data){
//              res.send('yes');
//          })
//      })
	}
}
