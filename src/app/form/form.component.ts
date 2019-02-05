import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';
import {ServiceService} from'../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ServiceService]
})
export class formComponent implements OnInit {

  username= new User("",'');
  repos=new Repository("",0,"");
  constructor(private http:HttpClient) { 
    this.repos=new Repository("",0,"");
    }
  Check(){
    interface ApiResponse{
      name:string;
      public_repos:number;
      created_at:Date;
      followers:string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/"+this.username+"?access_token=" +environment.api_key)
    .subscribe((data:any)=>{
      
      // console.log(data);
      this.repos.name= data.name;
      this.repos.public_repos=data.public_repos;
      this.repos.followers=data.followers;
    });
  }
  // console.log(this.username)


  ngOnInit() {
  }

}