import { Component, OnInit ,Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import Lan from '../../configdata/config'


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {
    @Input() cakeapi: string
    @Input() orderapi: string
    lanType:string='cn'
    language:Object=Lan
    itemindex: number=1.3;
    cakelist: Array<Object>=[]
    showindex: string;
    show:boolean=false;
    visible:boolean=false;
    dictionary: Object={cn:{},en:{}};
    insertdata: Object={};
    showcols:Array<string>=[];
    alldata:Array<Object>=[];
    page:Array<number>=[];
    pagesize:number=10;

    constructor(private http: Http) { }

    ngOnInit() {
        let self=this;
        
        this.http.get(this.cakeapi+'?_='+Math.random()).subscribe((res) => {
                //console.log(res.json().data.results);
                this.alldata=res.json().data.results || [];
                

        });
        this.http.get('http://localhost:88/config1707/dictionary.txt?_='+Math.random()).subscribe((res) => {
                //console.log(res.json());
                this.dictionary=res.json() || {};

        });
        this.http.get('http://localhost:88/config1707/show.txt?_='+Math.random()).subscribe((res) => {
                
                this.showcols=res.json().cols|| [];
                this.pagesize=res.json().pagination||10;

                self.http.get(this.cakeapi+"?pagenumber=0&pagesize="+self.pagesize+"&_="+Math.random()).subscribe((res) => {
                //console.log(res.json().data.results);
                self.cakelist=res.json().data.results || [];

        });
                

        });
       
    }
    getArrays(obj){
        return Object.keys(obj);
    }
    getId(idex){
        this.itemindex=idex;
    }
    getindex(idx){
        this.showindex=idx;
        this.show=true;
    }
    save(edictapi){
        this.show=false;
        let self=this;
        console.log(this.cakelist[this.itemindex])

        function str( data )
        {
            let ret = ''
            for ( let it in data ) {
                ret += encodeURIComponent( it ) + '=' + encodeURIComponent( data[it] ) + '&'
            }
            return ret;
        }

        this.http.request(edictapi+'edict', new RequestOptions({
          method: RequestMethod.Post,
          body: str(self.cakelist[self.itemindex]) ,
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
    insert(idx){
        this.showindex=idx;
        this.visible=true;
        console.log(this.getArrays(this.cakelist[0]));
        let array: Array<string>=this.getArrays(this.cakelist[0])
        for(let i=1;i<array.length;i++){
        console.log(array[i])
            this.insertdata[array[i]]='';
        }
        this.insertdata[array[0]]=this.alldata.length;
        console.log(this.insertdata)
    }
    insertsave(insertapi){
        console.log(this.insertdata)
        this.visible=false;

        let self=this;


        function str( data )
        {
            let ret = ''
            for ( let it in data ) {
                ret += encodeURIComponent( it ) + '=' + encodeURIComponent( data[it] ) + '&'
            }
            return ret;
        }

        this.http.request(insertapi+'add', new RequestOptions({
          method: RequestMethod.Post,
          body: str(this.insertdata) ,
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          })
        })).toPromise().then(response => {
            console.log(response.json());
            if(response.json().status){
                self.alldata.push(self.insertdata);
                self.cakelist.push(self.insertdata);
                alert('添加成功')
            }else{
                alert('数据类型有误')
            }
            
        }).catch((error) => {
            console.log(error);

            return Promise.reject(error);
        });      

    }


    delete(deleteid){
        //console.log(deleteid)
        console.log(this.cakelist[deleteid])
        let removedata=this.cakelist[deleteid];
        let removeidname=this.getArrays(this.cakelist[0])[0];
        console.log(removedata[removeidname])

        this.http.get(this.cakeapi+"delete?"+removeidname+"="+removedata[removeidname]).subscribe((res) => {
                console.log(res.json());
                if(res.json().status){
                    alert('删除成功')
                    this.cakelist.splice(deleteid,1);
                }else{
                    alert('删除失败')
                }
                

        });

    }
    getpageArray(){
        this.page=[];
        let num=Math.ceil(this.alldata.length/this.pagesize)
        for(let i=0;i<num;i++){
            this.page.push(i);
        } 
        
        return this.page;

    }
    pagenum(num){

        this.http.get(this.cakeapi+"?pagenumber="+num+"&pagesize="+this.pagesize).subscribe((res) => {
               
                this.cakelist=res.json().data.results || [];

        });
    }
    cancel(){
        this.show=false;
        this.visible=false;
    }
}
