

/// making th pro and des come ...
let pro_=document.querySelector('.pro')
function pro(){
    pro_.classList.remove("go")
    pro_.classList.add("come")
}

//  setting the all task , description  and dates in whole array.....
let quote=document.querySelector('.quote');
console.log()
let taskall=[]
let taskall_value= JSON.parse(localStorage.getItem('tasks'))
if(taskall_value){
    taskall=taskall_value
}


function quote_() {
    // console.log("quote , "+taskall.length)
    if(taskall.length>=1){
        quote.style="display:none;"
    }
    else{
        quote.style="display:block;"
    }
    
}
quote_()

let des_all=[]
let des_all_val=JSON.parse(localStorage.getItem('des'));
if(des_all_val){
    des_all=des_all_val
}


let date_all=[]
let date_all_val=JSON.parse(localStorage.getItem('dates'));
if(date_all_val){
    date_all=date_all_val
}

let checked_tsk=[]
let ch_tsk_all=JSON.parse(localStorage.getItem('check_task'));
if(ch_tsk_all){
    checked_tsk=ch_tsk_all
}

console.log(checked_tsk)
let task_sc=checked_tsk.length
console.log('task_sc'+task_sc)
// localStorage.clear()
// console.log(taskall)
/// saving the data in local stroage ...

function save() {
    localStorage.setItem('tasks', JSON.stringify(taskall));
    localStorage.setItem('des', JSON.stringify(des_all));
    localStorage.setItem('dates', JSON.stringify(date_all));
    
}


//initial taskss svaed in the local storage
let tab=document.querySelector('.tab')
function initial(){
    for(let i=0;i<taskall.length;i++){
    tab.innerHTML+=`
    <div class="tr">

    <div class="bx_div" onclick="box(this)">
        <i class="fa-solid fa-square-check chk hide"></i>
        <i class="fa-regular fa-square sq"></i>
        
    </div>

    <div class="task_main">
        <p onclick="pro2(this)">${taskall[i]}</p>
        <div class="finish_line "></div>
    </div>

    <div class="del_div" onclick="del_task(this.parentNode)">
        <i class="fa-solid fa-trash"></i>
    </div>

    <div class="cvr"></div>
</div>
    `
    }
}
initial()

/// striking the already striked tasksss...
function striked(){
    for(let i=0;i<checked_tsk.length;i++){
        for(let j=0;j<taskall.length;j++){
            if(checked_tsk[i]==taskall[j]){
                bx=tab.children[j].children[0]
                
                //  strike_(tab.children[j].children[0])
                let par=bx.parentNode
                    let tsk_mn=par.childNodes[3]
                    console.log(tsk_mn.childNodes[3])
                    let fin=tsk_mn.childNodes[3]
                    fin.classList.add('fin')
                    let cvr=tsk_mn.parentNode.children[3]
                    cvr.classList.add('cvv')
                

                    ////box....
                    let checked;
    let chk=bx.childNodes[1]
    let sq=bx.childNodes[3]
    console.log(chk)
    console.log(sq)

// to check the square is checked or nottttt......
    if(chk.classList.contains('hide')){
        checked = false;
        console.log("oji")
    }
    else{
        checked = true
        console.log("oji")
    }

// to tick the square..............
    if(!checked){
        chk.classList.remove('hide')
        sq.classList.add('hide')
        console.log('checked..')
        // increase_tsk()
        checked=true
    }
    else{
        sq.classList.remove('hide')
        chk.classList.add('hide')
        console.log('removed..')
        checked=false
            }
        
            }
        }

    }
}

striked()
/// the user input values.....
let task=document.getElementById('task');
let de=document.getElementById('des');
let date_=document.getElementById('dt');


//  description.....
let task_de=document.querySelector('.tsk_de')
let dt_de=document.querySelector('.date_de')
let de_de=document.querySelector('.de_de')


/// setiing minimum date as todayyy.......
var today = new Date().toISOString().split('T')[0];
date_.setAttribute('min', today);

function submit(){
    let score=0;
    
    ////evaluate the task..........
    let ltt=task.value
    if(ltt.length<=20 && ltt.length>=1){
        score+=1
        taskall.push(String(ltt))
        console.log(taskall)
        
        
    }
    else{
        task_wrn()
    }
    // evaluate the description....
    let stt=de.value
    if(stt.length>=1){
        score+=1
        des_all.push(String(stt));
        console.log(des_all)
      
        
    }
    else{
        console.log(stt)
        des_wrn()
    }
   
    //  evaluate the date (the date must not empty)
    let dttt=date_.value
    if(dttt.length>=1){
        date_all.push(String(dttt))
        score++
    }
    else{
        date_wrn()
    }
    console.log(score)
    if(score==3){
        go()
        createtask()
    }
}
function go(){

    save()
    console.log('save from go....')
    console.log(taskall)
    pro_.classList.remove("come")
    pro_.classList.add("go")

    //  resetinng the value
    date_.value=''
    de.value=''
    task.value=''

    // resetting the worng indicators....
    task.style.outline='0px solid red'
    task_de.style='display:none';

    de.style.outline='0px solid red'
    de_de.style='display:none'

    date_.style.outline='0px solid red'
    dt_de.style='display:none'
}

let pro_2=document.querySelector('.pro2')
let re=document.querySelector('.re')
let exp=document.querySelector('.exp')

function go_s(){
    let re=document.querySelector('.re')
    re.style='display:none'
    pro_2.classList.remove("come")
    pro_2.classList.add("go")
    // re.classList.remove('none')
    exp.style='display:none'
}

function pro2(task){

    let re=document.querySelector('.re')
    re.style='display:block'

    console.log(task)
    let n;
    for(let i=0;i<taskall.length;i++){
        if(taskall[i]==task.innerHTML){
            n=i
        }
    }
    let task_s=document.getElementById("task_s")
    task_s.innerHTML="&nbsp&nbsp"+taskall[n]

    let des_s=document.getElementById("des_s")
    des_s.innerHTML="&nbsp&nbsp"+des_all[n]

     let dt_s=document.getElementById("dt_s")
     dt_s.innerHTML=date_all[n]

     remin(n)

    pro_2.classList.remove("go")
    pro_2.classList.add("come")
}
// creating the task in the main page..........
let tr=document.querySelectorAll('.tr')


function createtask(){
        tab.innerHTML+=`
        <div class="tr">

        <div class="bx_div" onclick="box(this)">
            <i class="fa-solid fa-square-check chk hide"></i>
            <i class="fa-regular fa-square sq"></i>
            
        </div>

        <div class="task_main">
            <p onclick="pro2(this)">${taskall[taskall.length-1]}</p>
            <div class="finish_line "></div>
        </div>

        <div class="del_div" onclick="del_task(this.parentNode)">
            <i class="fa-solid fa-trash"></i>
        </div>

        <div class="cvr"></div>
    </div>
        `
        quote_()
}




function task_wrn(){
    task.style.outline='1px solid red'
   
    task_de.style='display:block'
}
function date_wrn(){
    date_.style.outline='1px solid red'
  
    dt_de.style='display:block'
}
function des_wrn(){
    de.style.outline='1px solid red'
    
    de_de.style='display:block'
}

///delete the task...

/// delete the icon from the page.....
function del_task(td){
    let n;
    console.log(td)
    td.classList.add("del_task")
    td.addEventListener("animationend",()=>{
        td.style="display:none";
        console.log('removeddd')
    
        for(let i=0;i<tab.children.length;i++){
            if(tab.children[i]==td){
                n=i
            }
        }
        tab.removeChild(td)
        console.log(n);


        /// delete from checked...
        console.log(checked_tsk)
        let temp_chkk=[]
        for(let i=0;i<checked_tsk.length;i++){
            if(taskall[n]!=checked_tsk[i]){
                temp_chkk.push(checked_tsk[i])
            }
        }
        console.log(temp_chkk)
        checked_tsk=temp_chkk
        localStorage.setItem('check_task',JSON.stringify(checked_tsk))
        
            
        ///temp to store the copy of that valuessss
        let temp_tsk=[];
        let temp_des=[];
        let temp_dt=[]

        ////deleting from the all arraysss......
        for(let i=0;i<taskall.length;i++){
            if(i!=n){
                temp_tsk.push(taskall[i])
                temp_des.push(des_all[i])
                temp_dt.push(date_all[i])
            }
        }
        taskall=temp_tsk
        quote_()
        des_all=temp_des
        date_all=temp_dt
        // taskall.splice(n,n)
        // console.log(taskall)
        // console.log(des_all)
        // console.log(date_all)

        // delete from checked array.......
        

        //// deleting from theee localstorage by resaving the modified arrayyyy...
        save()
        console.log('save from delete')
        console.log(taskall)
    })
    
   
}



///checkbox_function
let bo=document.querySelectorAll(".bx_div")
function box(bx){
    let checked;
    let chk=bx.childNodes[1]
    let sq=bx.childNodes[3]
    console.log(chk)
    console.log(sq)

// to check the square is checked or nottttt......
    if(chk.classList.contains('hide')){
        checked = false;
        console.log("oji")
    }
    else{
        checked = true
        console.log("oji")
    }

// to tick the square..............
    if(!checked){
        chk.classList.remove('hide')
        sq.classList.add('hide')
        console.log('checked..')
        // increase_tsk()
        checked=true
    }
    else{
        sq.classList.remove('hide')
        chk.classList.add('hide')
        
        console.log('removed..')
        checked=false
    }
    //  finding the index of bx
    // calling the strike function to indicate the task is finished.............
    strike_(bx)
    

}

// localStorage.clear()
function strike_(bx){

    let par=bx.parentNode
    let tsk_mn=par.childNodes[3]
    console.log(tsk_mn.parentNode)
    let fin=tsk_mn.childNodes[3]
    fin.classList.add('fin')
    console.log(tsk_mn.childNodes[1].innerHTML)
    checked_tsk.push(tsk_mn.childNodes[1].innerHTML)
    console.log(checked_tsk)

    ///
        let cvr=tsk_mn.parentNode.children[3]
        cvr.classList.add('cvv')

    ///store it in local strorage;;;;;
    localStorage.setItem('check_task', JSON.stringify(checked_tsk));
     
}
 /// find the remaining dayssss....
 function remin(n){

            console.log("reminnnn")
            //  the specific date...
            const expdate = new Date(date_all[n]);  

            //  today's date...
            const today = new Date();

            //  the difference in milliseconds between the two dates
            const diff_milli = expdate - today;

            // Convert milliseconds to days....
            const millisecond = 24 * 60 * 60 * 1000;
            const day_diff = Math.floor(diff_milli / millisecond);
            const hour_diff = Math.floor((diff_milli % millisecond) / (60 * 60 * 1000));
            

            /// setting the daysssss....
            let dayss=document.querySelector('.daysss');
            dayss.innerHTML=day_diff;

            let hrss=document.querySelector('.hrr')
            hrss.innerHTML=hour_diff;
            
            if(day_diff<=0){
               
                re.style='display:none'
                exp.style='display:block'
                // re.innerHTML=` <span class="daysss" style="color: black;"></span> The <span class="hrr" style="color: black;">Last date</span> has expired..`
            }
            console.log(day_diff)
 }