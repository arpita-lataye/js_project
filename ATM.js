console.log("🙏🙏🙏Welcome to SBI Bank ATM🙏🙏🙏")
let balance=50000
let c=require('readline-sync');
let card=c.question("select your card👉 1.ATM💳,2.credit card💳:");
if (card=='1' || card=='2'){
    let d=require('readline-sync');
    let language=d.question("select your language👉 1.english🤬, 2.hindi:")
    console.log()
    if (language=='1'){
        let e=require('readline-sync');
        let account=e.question("select your account👉1.current,2.saving:");
        if (account=='1' || account=='2'){
            let f=require('readline-sync');
            let transaction=f.question("select your transaction👉 1.balance enquari💰,2.withdraw money💵,:");
            if (transaction=='1'){
                let f=require('readline-sync');
                let pin=f.question("enter your four digit pin🤫:");
                if (pin==1234){
                    console.log("total balance is💰👉",balance)
                    console.log("your transaction is completed 😊please collect your card💳")
                    let g=require('readline-sync');
                    let sleep=g.question("do you want sleep👉1.yes or 2.no: ");
                    if (sleep=='1'){
                        console.log("your transaction is completed")
                        console.log("please collect your sleep🧾 and card💳")
                    }else{
                        console.log("your transaction is completed please collect your card💳")
                    }
                }else{
                    console.log("please enter valid pin😯")
                    console.log("try again🤬")
                }
            }else if(transaction=='2'){
                let code=require('readline-sync');
                let pin=code.question("enter your four digit pin🤔:");
                if (pin==1234){
                    let b=require("readline-sync");
                    let amount=b.question("enter total amount in the form of 100,200💰,500,2000💵:")
                    if (amount>=0 || amount<=50000){
                        if (amount%100==0){
                            console.log("please collect your amount💰")
                            console.log("your current balance is 💰",balance-amount)
                        }else{
                            console.log("pleas enter valid amount😮")
                        }let h=require('readline-sync');
                        let sleep=h.question("do you want sleep👉 1.yes, 2.no:");
                        if (sleep=='1'){
                            console.log("your transaction is completed😊")
                            console.log("please collect your sleep📼 and card💳")
                        }else {
                            console.log("your transaction is completed😊 please collect your card💳")
                        }
                    }else {
                        console.log("please enter valid amount🤬")
                    }
                }else {
                    console.log("please enter valid pin😑")
                    console.log("try again🤬")
                }
            }
            
        }
    }else if (language=="2"){
        let a=require('readline-sync');
        let account=a.question("apna khata chune👉 1.vartman khata, 2.bachat khata:");
        if (account=='1' || account=='2'){
            let l=require('readline-sync')
            let len_den=l.question("apna len den chune👉1.💰balance puchtach🤔, 2. paise nikalana:");
            if (len_den=='1'){
                let m=require('readline-sync');
                let pin=m.question("apna char ank pin dale🤫:");
                if (pin==1234){
                    console.log("apka kul shesh💰 hai",balance)
                    console.log("apka len den purn hua")
                    let n=require('readline-sync');
                    let rasid=n.question("aapko rasid chahiye👉1.ha😁 2. nahi😑:");
                    if (rasid=='1'){
                        console.log("apka len den purn hua😮")
                        console.log("krupaya apni rasid aur apna card nikal le😊")
                    }else{
                        console.log("apka len den purn hua krupaya apna card nikal le😊")   
                    }
                }else {
                    console.log("sahi pin dale🤬")
                }    
            }else if (len_den=='2'){
                let y=require('readline-sync');
                let pin=y.question("apna char ank pin dale🤔:");
                if (pin==1234){
                    console.log("apka pin sahi hai🤫")
                    let q=require('readline-sync');
                    let rashi=q.question("100,200,500,2000 ke rup me kul rashi darj kare: ");
                    if (rashi>=0 && rashi<=50000){
                        if (rashi%100==0){
                            console.log("krupaya apni rashi nikal le")
                            console.log("apke khate me kul rashi",balance-rashi)
                        }let w=require('readline-sync');
                        let rasid=w.question("aapko rasid chahiye👉1.ha,2.nahi:");
                        if (rasid=='1'){
                            console.log("apka len den pura hua")
                            console.log("krupaya apni rashid🧾 aur apna card nikal le")
                        }else{
                            console.log("apka len den pura hua 😊kripaya apna card nikal le")
                        }
                    }else{
                        console.log("krupaya manya🤐 rashi darj kare")
                    }
                }else {
                    console.log("manya pin🤔 darj kare")
                }
            }
        }
    }
    else {
        console.log("you have only english or hindi language 😮please choose correct option🤬")
    }
    
}else {
    console.log("please re-enter your card💳")
}

 