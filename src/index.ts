import {GithubApiService} from './GithubApiService'
import {User} from './User';
import {Repo} from './Repo';
import * as _ from 'lodash';

let svc = new GithubApiService();

if(process.argv.length<3){
      console.log("Plz enter git repo user name");
    }else
    {
    let userName = process.argv[2]
    svc.getUserInfo(userName, (user: User) =>{
    svc.getRepoInfo(userName, (repos: Repo[]) =>{
    let sortedRepos = _.sortBy(repos,[(repo:Repo) => repo.forkCount]);
    let reversedSortedRepos = _.reverse(sortedRepos)
    let top3Repos = _.take(reversedSortedRepos,3);
     user.repos = top3Repos;
     console.log(user);
   }
 );

 }
);
}

