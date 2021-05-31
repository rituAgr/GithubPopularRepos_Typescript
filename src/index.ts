import {GithubApiService} from './GithubApiService'
import {User} from './User';
import {Repo} from './Repo';
import * as _ from 'lodash';

let svc = new GithubApiService();

svc.getUserInfo('rituAgr', (user: User) =>{
    svc.getRepoInfo('rituAgr', (repos: Repo[]) =>{
    let sortedRepos = _.sortBy(repos,[(repo:Repo) => repo.forkCount]);
    let reversedSortedRepos = _.reverse(sortedRepos)
    let top3Repos = _.take(reversedSortedRepos,3);
     user.repos = top3Repos;
     console.log(user);
   }
 );

 }
);

