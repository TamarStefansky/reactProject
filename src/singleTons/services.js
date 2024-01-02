import {observable,action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';
class Services{
 data=[];
    temp=[{
            id: '1',
            name: "New Born Photography",
            description: "When sweetness and professionalism meet",
            price: 350,
            duration: 45, 
            picturer:"https://static1.s123-cdn-static-a.com/uploads/4224322/2000_6366c18c2e012.jpg?width=1600"

        },{
            id: '2',
            name: "Chalake Photography",
            description: "When your baby becomes a child...",
            price: 400,
            duration: 120, 
            picturer:"https://static1.s123-cdn-static-a.com/uploads/4224322/2000_6366c0ec05a4c.jpg?width=1600"

        },{
            id: '3',
            name: "Family Photography",
            description: "My family is the best in the world!!",
            price: 250,
            duration: 30, 
            picturer:"https://static1.s123-cdn-static-a.com/uploads/7798607/2000_65371a7be9d5e.jpg"

        },{
            id: '4',
            name: "Outdoor Photography",
            description: "When beauty and nature meet...",
            price: 450,
            duration: 150, 
            picturer:"https://static1.s123-cdn-static-a.com/uploads/7798607/2000_65371a09b93a8.jpg"

        },{
            id: '5',
            name: "Smashcake Photography",
            description: "My First Birthday!!",
            price: 200,
            duration: 30, 
            picturer:"https://static1.s123-cdn-static-a.com/uploads/7798607/2000_644e8c71a161c.jpg"

        },{
            id: '6',
            name: "Bar Mitzva Photography",
            description: "Save exciting moments...",
            price: 400,
            duration: 60, 
            picturer:"https://static1.s123-cdn-static-a.com/uploads/7798607/2000_64ed585355aff.jpg"

        }]
    constructor(){
        makeObservable(this,{
            data:observable,
            postService:action,
            preService:action
        })
        
        this.fetchServices();
        
    }
    init() {
        this.temp.map((service)=>{
            this.preService(service);})
       
    }
    fetchServices(){
        axios.get("http://localhost:8787/services").then((res)=>{
            runInAction(() => {
                this.data = res.data;
                if(this.data.length==0){
                this.init();
                }
                });
        }).catch(()=>{
        });

        
        
    }

    postService(data){
        fetch("http://localhost:8787/service",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                 },
            body: JSON.stringify(data)
        }).then((res)=>{
            this.data.push(data);
       })
    }

    preService(data){
        fetch("http://localhost:8787/service",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                 },
            body: JSON.stringify(data)
        }).then((res)=>{
            this.data.push(data);
       })
    }
}
export default new Services();