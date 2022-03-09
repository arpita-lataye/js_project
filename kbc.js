
console.log('****Welcome to KBC(Kaun Banega Crorpati)*****')

var question_list=[
    'Which country has 11 official languages?',
    'How many bytes are equal to 1 MB (megabyte)?',
    'Nairobi is the capital of which country?',
    'Disease scurvy is caused due to lack of ____',
    'Traffic signal of which colour ask us to stop ?',
    'Which of these is River ?',
    'Which state has the "Longest Coastline" in india ?',
    'Which of these month have 31 days',
    'Who was the leader of the "Indian Natinal Army"?',
    'What is used to take "Temperature of Body"?',
];

var options_list=[
    ['(A)India','(B)Canada','(C)USA','(D)South Africa'],
    ['(A)1024 KB','(B)1024 GB','(C)1004 KB','(D)1024 TB'],
    ['(A)Zimbabwe','(B)Kenya','(C)Ugenda','(D)SRi Lanka'],
    ['(A)Vitamin A','(B)Vitamin C','(C)Vitamin D','(D)Vitamin B12'],
    ['(A)Green','(B)Red','(C)Yellow','(D)Blue'],
    ['(A)Yamuna','(B)Bhramaputra','(C)Ganga','(D)All of these'],
    ['(A)Maharashtra','(B)Tamil Nadu','(C)Karnataka','(D)Gujarat'],
    ['(A)October','(B)June','(C)February','(D)April'],
    ['(A)Mahatma Gandhi','(B)Subhash Chandra Bose','(C) Sardar Vallabhai Patel','(D)Bhagat Singh'],
    ['(A)Thermos','(B)Scale','(C)Speedometer','(D)Thermometer']
];

// var answers=[3,0,1,1,1,3,3,0,1,3];
var answers=[4,1,2,2,2,4,4,1,2,4];

var lifeline1=['50:50','audience poll','ask the Expert'];

var lifeline_5050_options=[
    ['India','South Africa'],
    ['1024 KB','1004 KB'],
    ['Zimbabwe','kenya'],
    ['vitamin A','vitamin C'],
    ['Blue','Red'],
    ['Ganga', 'All of these'],
    ['Gujarat','Karnataka'],
    ['October','April'],
    ['Subhash Chandra Bose', 'Bhagat sigh'],
    ['Scale','Thermometer']
]

var lifeline_audience_poll_options=[
['(A)India....70%','(B)Canada....30%','(C)USA....80%','(D)South Africa.....95%'],
['(A)1024 KB.....90%','(B)1024 GB....56%','(C)1004 KB....76%','(D)1024 TB....45'],
['(A)Zimbabwe.....77%','(B)Kenya....93%','(C)Ugenda....80%','(D)SRi Lanka....66%'],
['(A)Vitamin A....80%','(B)vitamin C....90%','(C)Vitamin D.....77%','(D)Vitamin B12....10%'],
['(A)Green....88%','(B)Red.....93%','(C)Yellow....45%','(D)Blue....79%'],
['(A)Yamuna.....30%','(B)Bhramaputra....48%','(C)Ganga.....80%','(D)All of these....94%'],
['(A)Maharashtra....78%','(B)Tamil Nadu....44%','(C)Karnataka....67%','(D)Gujarat.....97'],
['(A)October.....98%','(B)June....23%','(C)February....56%','(D)April....65%'],
['(A)Mahatma Gandhi....65%','(B)Subhash Chandra Bose....84%','(C) Sardar Vallabhai Patel....54%','(D)Bhagat Singh....42%'],
['(A)Thermos....23%','(B)Scale....45%','(C)Speedometer....67%','(D)Thermometer....91%']
]

var lifeline_Expert_option=['Mr.A','Mr.B','Mr.C','Mr.D']

var lifeline_Expert_answer=['(D)South Africa',
                            '(A)1024 KB',
                            '(B)Kenya',
                            '(B)Vitamin C',
                            '(B)Red',
                            '(D)All of these',
                            '(D)Gujarat',
                            '(A)October',
                            '(B)Subhash Chandra Bose',
                            '(D)Thermometer']

var count=0;
var count1=0;
var count2=0;
var total=0;
for (i=0; i<question_list.length; i++){
    console.log('your first question is:')
    console.log(i+1,question_list[i])
    console.log ('your options are:')
    for (j=0; j<options_list[i].length; j++){
        console.log(" ",j+1, options_list [i][j])
    }
    var a=require('readline-sync');
    var lifeline=a.question('do you want to use  lifeline😯:1.yes, 2.no:')
    if (lifeline==='1'){
        // console.log('choose from the below list:')
        
        k=0;
        while (k<lifeline1.length){
            console.log(" ",k+1,lifeline1[k])
            k++
        }
        choose_lifeline=a.question('which lifeline do you want to use:')
        if (choose_lifeline==="1"){
            count+=1
            if (count==1){
                console.log('your options are:')
                p=0
                while (p <(lifeline_5050_options[i]).length){
                    console.log(p+1,lifeline_5050_options [i][p])
                    p=p+1
                }
                user_answer=a.questionInt('please enter your answer:')
                sol=[2,1,2,2,2,2,1,1,1,2]
                total=0
                if (user_answer===sol[i]){
                    total+=10000
                    console.log('congrats! your answer is correct.')
                    console.log('you won rs',total)
                }
                else{
                    console.log('sorry your answer is wrong.\n you lost your game')
                    break
                }
            }
        
            else{
                console.log("you alraedy use the life line")
                m=0
                while (m<(options_list[i]).length){
                    console.log(m+1,options_list[i][m])
                    m=m+1
                }
                    
                answer=a.questionInt("Please enter your answer  : ")
                if (answer==answers[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
        }
    
        else if (choose_lifeline=="2"){
            count1=count1+1
            if (count1==1){
                console.log("your option are:")
                z=0
                while (z<(lifeline_audience_poll_options[i]).length){
                    console.log(z+1,lifeline_audience_poll_options[i][z])
                    z=z+1
                }
                    
                answer=a.questionInt("Please enter your answer  : ")
                if (answer==answers[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you lost your game")
                    break 
                }
                    
            }
                
            else{
                console.log("you alraedy use the life line")
                m=0
                while (m<(options_list[i]).length){
                    console.log(m+1,options_list[i][m])
                    m=m+1
                }
                    
                answer=a.questionInt("Please enter your answer  : ")
                if (answer==answers[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
                
        }
        else if (choose_lifeline=="3"){
            count2=count2+1
            if (count2==1){
                t=0
                while (t<(lifeline_Expert_option).length){
                    console.log(t+1,lifeline_Expert_option[t])
                    t=t+1
                }
                    
                expert1=a.questionInt("Please choose your expert : ")
                console.log("you choose",lifeline_Expert_option[expert1-1])
                console.log("According to",lifeline_Expert_option[expert1-1],"correct answer is",lifeline_Expert_answer[i])
                answer=a.questionInt("Please enter your answer  : ")
                if (answer==answers[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }
                    
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
            else{
                console.log("you alraedy use the life line")
                m=0
                while (m<(options_list[i]).length){
                    console.log(m+1,options_list[i][m])
                    m=m+1
                } 
                answer=a.questionInt("Please enter your answer  : ")
                if (answer==answers[i]){
                    total=total+10000
                    console.log("Congrats ! Your answer is correct.")
                    console.log("You won Rs.",total)
                }  
                else{
                    console.log("sorry your answer is wrong. ")
                    console.log("you loss your game")
                    break
                }
                    
            }
                
                
        }
    }
    else{
        n=0
        while (n<(options_list[i]).length){
            console.log(n+1,options_list[i][n])
            n=n+1
        }
            
        answer=a.questionInt("Please enter your answer  : ")
        if (answer==answers[i]){
            total=total+10000
            console.log("Congrats ! Your answer is correct.")
            console.log("You won Rs.",total)
        }
            
        else{
            console.log("sorry your answer is wrong. ")
            console.log("you loss your game")
            break
        }
            
    }
        
    i=i+1
console.log("Thank you to participating Kaun Banega Crorepati")
console.log("You won Total Rs.",total,"congratulations!")
console.log("Thank you")

}
