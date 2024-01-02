
import {observable, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

class Business{
    data=[];
    temp={name: "Achva Photography",
            address: "Hateena 60 Elad",
            phone: "03-6188522",
            owner: "Tamar Stefansky",
            logo: "https://static1.s123-cdn-static-a.com/uploads/4224322/2000_635983890fc47.jpg?width=1600",
            description: "Embrace Sweet Moments",
        };
    constructor(){
        makeObservable(this,{
            data:observable,
            postBusiness:action,
            preBusiness:action
            
        })
        this.fetchBusiness(); 
        
    }
    init(){
        
        this.preBusiness(this.temp);
        
    }
    fetchBusiness(){
        axios.get("http://localhost:8787/businessData").then((res)=>{
            runInAction(() => {
                this.data=res.data;
                if(this.data.length==undefined){
                      this.init();
                }  
                });
        }).catch(()=>{
        });
    }

    postBusiness(business){
        fetch("http://localhost:8787/businessData",{
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify( business)
        }).then(()=>{
            runInAction(() => {
                this.data=business;
                alert("The details have been successfully updated");
                });
          
        })
       
  }





  preBusiness(business){
    fetch("http://localhost:8787/businessData",{
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify( business)
    }).then(()=>{
        runInAction(() => {
            this.data=business;
            });
      
    })
   
}
}
export default new Business();