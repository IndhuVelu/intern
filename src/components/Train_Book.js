import React, { Component } from 'react'
import './Train_Book.css'
import Container from './Container'
import moment from 'moment'
 class Train_Book extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              from:[],
              startingLocation:'',
              endingLocation:'',
              date:'',
              train:[],
              offset:0,
              count:0,
              msg:'',
              from1:[],
              to1:[],
              disfrom:true,
              tofrom:true,
              icon:false,
              icon1:false,
              icon2:false,
              icondown:false,
              icondown1:false,
              icondown2:false,
              maindisplay:false,
         }
     }
     addEventListener=()=>{
        
        let a=document.documentElement.scrollHeight-window.innerHeight;
        if (a==window.scrollY){
            let offset=this.state.offset+1;
            this.setState({
                offset:offset
            })
            fetch('http://localhost:3050/search',{
                method:"POST",
                body:JSON.stringify({
                    startingLocation:this.state.startingLocation,
                    endingLocation:this.state.endingLocation,
                    date:this.state.date,
                    offset:this.state.offset
                }),
                headers:{'Content-Type':'application/json'}
              })
              .then(res=> res.json())
              .then(data=>
                {
                    
                        this.setState({
                            msg:this.state.msg
                        })
                    
                        data.forEach(element => {
                            this.setState({
                                train:[...this.state.train,element]
                            })
                        });
                    
                    
                })
        }
     }
     componentDidUpdate(){
        if(this.state.startingLocation ===''){
            document.getElementById("to_bar").disabled=true;
            }
            else
            document.getElementById("to_bar").disabled=false;
       
    }
     componentDidMount(){
        if(this.state.startingLocation ===''){
            document.getElementById("to_bar").disabled=true;
            }
            else
            document.getElementById("to_bar").disabled=false;

    }
   
    handledisplay=(e)=> {  
    
        console.log(e.target.dataset.front);   
        this.setState({
            startingLocation:e.target.dataset.front,
            disfrom:true
        },()=>{
            this.handleSearch()
        })
        
    }
    handledisplayto=(e)=> {     
        this.setState({
            endingLocation:e.target.dataset.back,
            tofrom:true
        },()=>{this.handleSearch()})
            
        }

handleTo=(e)=>{
    var arr=[];
    var x=e.target.value
    this.setState({ 
       endingLocation: e.target.value
    },()=>{
        fetch('http://localhost:3050/tosort',
        {
            method:"POST",
            body:JSON.stringify({
                endingLocation:x
            }),
            headers:{'Content-Type':'application/json'}
          })
          .then(res=> res.json())
          .then(data=>
            {  
                console.log('...',data)
                arr=data
                const unique = [...new Set(arr.map(bill => bill.to))]
                console.log(unique)
                this.setState({
                   to1:unique,
                   tofrom:false
                })
            })
            .catch(()=>{
                console.log('error')
                this.setState({ to1:''})
            })


            this.handleSearch();
          
    });

}

    handleFrom=(e)=> {
        var arr=[];
        var x=e.target.value
        this.setState({ 
            startingLocation: e.target.value
        },()=>{
            fetch('http://localhost:3050/fromsort',
            {
                method:"POST",
                body:JSON.stringify({
                    startingLocation:x
                }),
                headers:{'Content-Type':'application/json'}
              })
              .then(res=> res.json())
              .then(data=>
                {  
                    console.log('...',data)
                    arr=data
                    const unique = [...new Set(arr.map(bill => bill.from))]
                    console.log(unique)
                    this.setState({
                        from1:unique,
                        disfrom:false
                    })
                })
                .catch(()=>{
                    console.log('error')
                    this.setState({ from1:''})
                })


                this.handleSearch();
              
        });

       
    }
        
    handleDate=(e)=> {

        var dates=e.target.value.split('-')
       if((dates[0] <2020)){
        this.setState({ msg:'Not a Valid Date'});
       }
       else if((dates[0] >2040)){
        this.setState({ msg:'Not a Valid Date'});
       }
       else{
        this.setState({ date: moment(e.target.value).format("MMM DD YYYY")},()=>{this.handleSearch();});
        
       }
      
        
    }
    checkFrom=(fro)=>{
        var check=0;
        this.state.from1.forEach(element => {
            if(element===fro){
                check=1;
            }
        });
        if(check===1){
            return true
        }
        else{
            return false
        }
    }
    checkTo=(tos)=>{
        var check=0
        this.state.to1.forEach(element => {
            if(element===tos){
                check=1
            }
        });
        if(check===1)
        {
            return true
        }
        else{
            return false
        }
       
    }
    
    handleSearch=(e)=> {
        console.log("????????????",this.checkFrom(this.state.startingLocation) )
        if((this.state.date ==='') || (this.state.startingLocation ==='') || (this.state.endingLocation==='')){
            this.setState({train:[],offset:0})
            document.getElementById("head").style.display="none";
        }
       
        else if(this.checkFrom(this.state.startingLocation) && this.checkTo(this.state.endingLocation)){
            document.getElementById("head").style.display="flex";
            console.log('>><><><><>',this.state.date,this.state.startingLocation,this.state.endingLocation)
             fetch('http://localhost:3050/search',{
              
                method:"POST",
                body:JSON.stringify({
                    startingLocation:this.state.startingLocation,
                    endingLocation:this.state.endingLocation,
                    date:this.state.date,
                    offset:this.state.offset
                }),
                headers:{'Content-Type':'application/json'}
              })
              .then(res=> {
                var a =res.json()
            
            return a})
              .then(data=>
                {
                    console.log(data,'search')
                    this.setState({ train: data},()=>{console.log('>>>>>>>>>>>>>>train',this.state.train)});
                       
                })
        window.addEventListener('scroll',this.addEventListener,false);
        }else {
            console.log('no condition satisfieddd')
            this.setState({train:[],offset:0})
        }
        
 
    }
    handleNameSort=(e)=> {
        this.setState((prevState) => {
            return {
                    icon:prevState.!this.state.icon,
                    icon1:false,
                    icon2:false,
                    icondown:false,
                    icondown1:false,
                    icondown2:false};
        });
//         this.setState({
//             icon:!this.state.icon,
//             icon1:false,
//             icon2:false,
//             icondown:false,
//             icondown1:false,
//             icondown2:false
//         })


        fetch('http://localhost:3050/namesort',{
        method:"POST",
        body:JSON.stringify({
            startingLocation:this.state.startingLocation,
            endingLocation:this.state.endingLocation,
            date:this.state.date,
        }),
        headers:{'Content-Type':'application/json'}
      })
      .then(res=> res.json())
      .then(data=>
        {
            console.log(data);
            this.setState({ train: data});
            
        })
    }
    handleNameRevSort=(e)=> {
        this.setState({
            icondown:!this.state.icon,
            icondown1:false,
            icondown2:false,
            icon:false,
            icon1:false,
            icon2:false,


        })
    

        fetch('http://localhost:3050/namerevsort',{
        method:"POST",
        body:JSON.stringify({
            startingLocation:this.state.startingLocation,
            endingLocation:this.state.endingLocation,
            date:this.state.date,
        }),
        headers:{'Content-Type':'application/json'}
      })
      .then(res=> res.json())
      .then(data=>
        {
            console.log(data);
            this.setState({ train: data});
            
        })
    }
  handleDepartSort=(e)=> {
    this.setState({
        icon1:!this.state.icon,
        icon:false,
        icon2:false,
        icondown:false,
        icondown1:false,
        icondown2:false
    })
  

        fetch('http://localhost:3050/departsort',{
        method:"POST",
        body:JSON.stringify({
            startingLocation:this.state.startingLocation,
            endingLocation:this.state.endingLocation,
            date:this.state.date,
        }),
        headers:{'Content-Type':'application/json'}
      })
      .then(res=> res.json())
      .then(data=>
        {
            console.log(data);
            this.setState({ train: data});
        })
    }
    handleDepartRevSort=(e)=> {
        this.setState({
            icondown1:!this.state.icon,
            icondown:false,
            icondown2:false,
            icon:false,
            icon1:false,
            icon2:false,
        })
    
            fetch('http://localhost:3050/departrevsort',{
            method:"POST",
            body:JSON.stringify({
                startingLocation:this.state.startingLocation,
                endingLocation:this.state.endingLocation,
                date:this.state.date,
            }),
            headers:{'Content-Type':'application/json'}
          })
          .then(res=> res.json())
          .then(data=>
            {
                console.log(data);
                this.setState({ train: data});
            })
        }
    handleArrivesSort=(e)=> {
        this.setState({
            icon2:!this.state.icon,
            icon1:false,
            icon:false,
            icondown:false,
            icondown1:false,
            icondown2:false
        })
      
        fetch('http://localhost:3050/arrivalsort',{
        method:"POST",
        body:JSON.stringify({
            startingLocation:this.state.startingLocation,
            endingLocation:this.state.endingLocation,
            date:this.state.date,
        }),
        headers:{'Content-Type':'application/json'}
      })
      .then(res=> res.json())
      .then(data=>
        {
            console.log(data);
            this.setState({ train: data});
        })
    }
    handleArrivesRevSort=(e)=> {
        this.setState({
            icondown2:!this.state.icon,
            icondown1:false,
            icondown:false,
            icon:false,
            icon1:false,
            icon2:false,
        })



        fetch('http://localhost:3050/arrivalrevsort',{
        method:"POST",
        body:JSON.stringify({
            startingLocation:this.state.startingLocation,
            endingLocation:this.state.endingLocation,
            date:this.state.date,
        }),
        headers:{'Content-Type':'application/json'}
      })
      .then(res=> res.json())
      .then(data=>
        {
            console.log(data);
            this.setState({ train: data});
        })
    }
  
  
  


    render() {
    
   
        function tConvert (time) {
            // Check correct time format and split into components
            time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
          
            if (time.length > 1) { // If time format correct
              time = time.slice (1);  // Remove full string match value
              time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
              time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            time.splice(3,1);
            return time.join (''); // return adjusted time or original string
          }
        return (
            <div>
                 <div className="mybook">
                   <h3 id="book"> <a href="/Mybookings" date= {this.state.date}>MyBookings</a> </h3>
                     </div>
                
               <div id="main" >
               <input id="from_bar" list="from"  placeholder="From" value={this.state.startingLocation} onChange={e => this.handleFrom(e) }/>
                <input   id="to_bar" list="to" placeholder="To"  value={this.state.endingLocation}  onChange={e => this.handleTo(e) }/>
        
                <input   id="from_bar" type="date" min="2020-02-12" onChange={e => this.handleDate(e) } required/>
               
                </div> 
                <div className="whole">
                {this.state.disfrom!==true?
                    <div id="wholedisplay_from">
                    {
                     this.state.from1.map(element =>(
                    <div> <li className="fromdisplay" id="fromdisplay" data-front={element}    onClick= {e => this.handledisplay(e) }>{element}</li> </div>

                    ))
                     }
                
                </div> :  <input type="hidden"/>}
                {this.state.tofrom!==true?
                     <div id="wholedisplay_to">
                     {
                    this.state.to1.map(element =>(
                        <div> <li className="todisplay"  id="todisplay" data-back={element} onClick= {e => this.handledisplayto(e) }>{element}</li> </div>
    
                        ))
                    }
                    </div>:  <p></p>}
                  
                </div>
              
            
    

                <div className="submain">
            <div id="message">{this.state.msg} </div>
                
                
                  <div className="heading" id="head" >
                    <div className="arrange"><a  >Train Name</a>  <span className="iconic">
                {this.state.icon!==true?<i className="fa fa-chevron-up icon-up" onClick={e => this.handleNameSort(e)}/>  :  <i className="fa fa-chevron-up icon-ups" onClick={e => this.handleNameSort(e)}/>}  {this.state.icondown!==true? <i className="fa fa-chevron-down icon-down" onClick={e => this.handleNameRevSort(e)}/> :   <i className="fa fa-chevron-down icon-downs" onClick={e => this.handleNameRevSort(e)}/>  }</span>   </div>
                    <div className="arrange"> <a id="depart"> Depart  </a> <span className="iconic">  {this.state.icon1!==true?    <i className="fa fa-chevron-up icon-up1"onClick={e => this.handleDepartSort(e)}/>  :   <i className="fa fa-chevron-up icon-ups1" onClick={e => this.handleNameSort(e)}/>   }    {this.state.icondown1!==true?  <i className="fa fa-chevron-down icon-down1" onClick={e => this.handleDepartRevSort(e)}/>   :  <i className="fa fa-chevron-down icon-downs1" onClick={e => this.handleDepartRevSort(e)}/>}</span>  </div>
                    <div className="arrange"> <a id="arrives" >Arrives  </a> <span className="iconic">  {this.state.icon2!==true?   <i className="fa fa-chevron-up icon-up2" onClick={e => this.handleArrivesSort(e)}/>  :   <i className="fa fa-chevron-up icon-ups2" onClick={e => this.handleArrivesSort(e)}/>   }      {this.state.icondown2!==true? <i className="fa fa-chevron-down icon-down2" onClick={e => this.handleArrivesRevSort(e)}/>  :  <i  className="fa fa-chevron-down icon-downs2" onClick={e => this.handleArrivesRevSort(e)}/> } </span>  </div>
                    <div></div>
                    <div></div>
   
                </div>
            
    
             
                    <div>
                            {this.state.train.length>0?
                            this.state.train.map(element=>(
                        <Container name={element.TrainName}departure={ tConvert (element.Depart_Time)}arrival={tConvert (element.Arrival_Time)} date= {this.state.date} id={element.id} /> 
                            ))  : 
                        
                    
                            <h1> No Trains Available </h1>
                          
                           
                            }
                    </div>
             
                  
                </div>
            </div>
        )
    }
}

export default Train_Book
