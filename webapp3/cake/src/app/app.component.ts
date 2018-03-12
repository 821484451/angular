import { Component ,OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import Lan from './configdata/config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'app';
    lantype:string='cn';
    language:Object=Lan;
    dictionary:Object={en:{},cn:{}};
    loginname:string;
    loginpassword:string;
    loginsucess:boolean=false;
    num:string='';
    

    constructor(private http: Http ) { }
    ngOnInit() {
        if(localStorage.username){
            this.loginname=localStorage.username;
            this.loginsucess=true;
        }
        this.num=location.href
        this.http.get('http://localhost:88/config1707/dictionary.txt?_='+Math.random()).subscribe((res) => {
                //console.log(res.json());
                this.dictionary=res.json()||{}

        });
    }
    getkeys(){
      
        //console.log(this.Lan)

    }
    login(){
        let rightname:string='zjx';
        let rightpassword:string='123456';
        if(this.loginname==rightname && this.loginpassword==rightpassword){
            alert('登陆成功');
            this.loginsucess=true;
            localStorage.username='zjx';

        }else{
            alert('登陆失败')
        }

           
       
    }
    quit(){
        localStorage.username='';
        this.loginsucess=false;
    }
    getnum(number){
        
        this.num=location.href
        
    }
}
