import {observable, computed, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';
class Appointment{
    data=[];
    temp=[
                
        {
            serviceName: "Family Photography",
            dateTime: "2021-08-20T10:00:00.000Z",
            clientName: "Rachel Levi",
            clientPhone: "050-1234567",
            clientEmail: "racej222@gmail.com",
        },
        {
            serviceName: "New Born Photography",
            dateTime: "2024-08-20T10:00:00.000Z",
            clientName: "Noah Chayon",
            clientPhone: "050-3699889",
            clientEmail: "noah050@gmail.com",
        },
        {
            serviceName: "Bar Mitzva Photography",
            dateTime: "2023-07-20T10:00:00.000Z",
            clientName: "Lea Sason",
            clientPhone: "053-1233789",
            clientEmail: "Lea789@gmail.com",
        },
        {
            serviceName: "Outdoor Photography",
            dateTime: "2024-01-02T10:00:00.000Z",
            clientName: "Miri Nasi",
            clientPhone: "053-1477412",
            clientEmail: "miri@gmail.com",
        }
        
        
                    
    ];
    constructor(){
        makeObservable(this,{
            data:observable,
            postAppointment:action,
            preAppointment:action
        });
        
         this.fetchAppointment();
         
        
        
    }
    init() {
        this.temp.map((appoimtment)=>{
            this.preAppointment(appoimtment);
        })
    }
    fetchAppointment(){
        axios.get("http://localhost:8787/appointments").then((res)=>{
            runInAction(() => {
                this.data = res.data;
                if(this.data.length==0){
            this.init();
                }
                });
        }).catch(()=>{
        })
        
    }

     postAppointment(appointmet){
        return new Promise((resolve, reject) => {
            fetch("http://localhost:8787/appointment",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                 },
            body: JSON.stringify(appointmet)
        }).then((res) => {
                    if (res.status === 200) {
                        runInAction(() => {
                            this.data.push(appointmet);
                           alert("Your appointment was keeped successfully");
                        });
                    } else {
                        console.error("Meeting was not added. Unexpected status:", res.status);
                    }
                    resolve(res.status);
                })
                .catch((error) => {
                    console.error("Error adding meeting:", error);
                    reject(error); 
                });
        });
    }


    preAppointment(appointmet){
        fetch("http://localhost:8787/appointment",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                 },
            body: JSON.stringify(appointmet)
        }).then((res)=>{
           
                this.data.push(appointmet);
                
        })
    }
}
export default new Appointment();








