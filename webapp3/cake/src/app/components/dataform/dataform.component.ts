import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import Lan from '../../configdata/config'


@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent implements OnInit {
    key:string='';
    data:Array<Object>=[];
    showcols:Array<any>=[];
    dictionary: Object={cn:{},en:{}};
    lanType:string='cn'
    language:Object=Lan;
    light:Number=1.3;
    checkArray:Array<number>=[];
    show:Boolean=false;
    itemindex:number;
    showindex:number;

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('http://localhost:88/config1707/show.txt?_='+Math.random()).subscribe((res) => {
                console.log(res.json().pagination);
                this.showcols=res.json().cols|| [];
                
        });
        this.http.get('http://localhost:88/config1707/dictionary.txt?_='+Math.random()).subscribe((res) => {
                //console.log(res.json());
                this.dictionary=res.json() || {};

        });

    }
    getdata(){
        this.http.get('http://localhost:88/cakelistcheck?ChinaName='+this.key).subscribe((res) => {
            console.log(res.json());
            this.data=res.json().data.results;
        });

    }
    getkeys(obj){
        return Object.keys(obj)
    }
    insert(idx){
      console.log(idx)
    }
    delete(idx){
        console.log(idx)

    }
 
    bg(idx){
        let num=this.checkArray.indexOf(idx);
        this.itemindex=idx;
        if(num>=0){
            this.checkArray.splice(num,1)
        }else{
            this.checkArray.push(idx);
        }
        
    }
    inverse(){
        if(this.checkArray.length==this.data.length){
            this.checkArray.splice(0,this.checkArray.length);
        }else{
            this.checkArray.splice(0,this.checkArray.length);
            for(let i=0;i<this.data.length;i++){

                this.checkArray.push(i);
            }
        }
    }
    cancel(){
        this.show=false;
        
    }
    getindex(idx){
        this.showindex=idx;
        this.show=true;
        console.log(idx);
    }
    savedata(){
        this.show=false;
        let self=this;
        console.log(this.data[this.itemindex])

        function str( data )
        {
            let ret = ''
            for ( let it in data) {
                ret += encodeURIComponent( it ) + '=' + encodeURIComponent( data[it] ) + '&'
            }
            return ret;
        }

        this.http.request('http://localhost:88/cakelistedict', new RequestOptions({
          method: RequestMethod.Post,
          body: str(self.data[self.itemindex]) ,
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          })
        })).toPromise().then(response => {
            console.log(response.json());
            if(response.json().status){
                alert('修改成功')
            }else{
                alert('修改失败')
            }
        }).catch((error) => {
            console.log(error);
            return Promise.reject(error);
        });      
    }
}
