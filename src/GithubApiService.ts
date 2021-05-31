import * as request from 'request';
import {User} from './User';

export class GithubApiService {

  getUserInfo(userName: string){
  let options: any = {
   headers: {
   'User-Agent': 'request'
   }
  }
  request.get("https://api.github.com/users/"+userName, options, (error:any, response:any, body:any)=>{
  let user = new User(JSON.parse(body));
  console.log(user);
  })

  }

  getRepoInfo(){

  }
}