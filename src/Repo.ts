export class Repo {
 name?: string;
 description?: string;
 url?: string;
 size?: number;
 forkCount?: number;

 constructor(userRepo: any){
   this.name = userRepo.name;
   this.description = userRepo.description;
   this.url = userRepo.userRepos_url;
   this.size = userRepo.size;
   this.forkCount = userRepo.forks;
 }
}
