let fs =require("fs");

let inputArr= process.argv.slice(2);

let specialCharArr=[];
let fileArr=[];

for(let i=0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0);
    if(firstChar == "-"){
        specialCharArr.push(inputArr[i]);
    }else{
        fileArr.push(inputArr[i]);
    }
}
for(let i = 0; i < fileArr.length; i++){
    let ans= fs.existsSync(fileArr[i]);
    if(ans == false){
        console.log("File Does't exist");
        return;
    }
}
let content="";
for(let i = 0; i < fileArr.length; i++){
    content = content+fs.readFileSync(fileArr[i])+"\r\n";
    
}
// console.log(content);
let contentArr = content.split("\r\n");
// console.log(contentArr);

// check whether both -s and -n present 
let isSNBothPresent = specialCharArr.includes("-n") && specialCharArr.includes("-s");
if(isSNBothPresent== true){
    let isSPresent = specialCharArr.includes("-s");

    if(isSPresent== true){
    for( let i=1;i<contentArr.length;i++){
        if(contentArr[i] == "" && contentArr[i-1] == ""){
            contentArr[i]=null;
        }else if(contentArr[i] == "" && contentArr[i-1]== null){
            contentArr[i]=null;
        }
    }
    let tempArr=[];
    for( let i=0;i<contentArr.length;i++){
           if(contentArr[i] !== null){
           tempArr.push(contentArr[i]);
        }
    }
  contentArr=tempArr;
  let isNPresent = specialCharArr.includes("-n");

    if(isNPresent== true){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]= `${i+1} ${contentArr[i]}`;
    }
    console.log(contentArr.join("\n"));
    return;
     }
    }
}

//check whether both -n and -b are present or not
let isNBBothPresent = specialCharArr.includes("-n") && specialCharArr.includes("-b");

if(isNBBothPresent== true ){
    if(specialCharArr[0]== "-n"){
        let isNPresent = specialCharArr.includes("-n");

        if(isNPresent== true){
        for(let i=0;i<contentArr.length;i++){
        contentArr[i]= `${i+1} ${contentArr[i]}`;
            }
            console.log(contentArr.join("\n"));
            return;
        }
        
    }else if(specialCharArr[0]== "-b"){
        let isBPresent = specialCharArr.includes("-b");

        let count =1;
        if(isBPresent== true){
            for(let i=0;i<contentArr.length;i++){
                if(contentArr[i]!=""){
                    contentArr[i]= `${count} ${contentArr[i]}`;
                    count++
                }
               
            }
            console.log(contentArr.join("\n"));
            return;
        }
    }
}
//check whether both -s and -b are present or not
let isSBBothPresent = specialCharArr.includes("-s") && specialCharArr.includes("-b");
if(isSBBothPresent == true){
    let isSPresent = specialCharArr.includes("-s");

    if(isSPresent== true){
    for( let i=1;i<contentArr.length;i++){
        if(contentArr[i] == "" && contentArr[i-1] == ""){
            contentArr[i]=null;
        }else if(contentArr[i] == "" && contentArr[i-1]== null){
            contentArr[i]=null;
        }
    }
    let tempArr=[];
    for( let i=0;i<contentArr.length;i++){
           if(contentArr[i] !== null){
           tempArr.push(contentArr[i]);
        }
    }
    contentArr=tempArr;
    let isBPresent = specialCharArr.includes("-b");
    let count=1;
    if(isBPresent== true){
        for(let i=0;i<contentArr.length;i++){
            if(contentArr[i]!=""){
                contentArr[i]= `${count} ${contentArr[i]}`;
                count++
            }
        }

    }
    }
    console.log(contentArr.join("\n"));
    return;
}
//check whether -s is present or not

let isSPresent = specialCharArr.includes("-s");

if(isSPresent== true){
    for( let i=1;i<contentArr.length;i++){
        if(contentArr[i] == "" && contentArr[i-1] == ""){
            contentArr[i]=null;
        }else if(contentArr[i] == "" && contentArr[i-1]== null){
            contentArr[i]=null;
        }
    }
let tempArr=[];
for( let i=0;i<contentArr.length;i++){
   if(contentArr[i] !== null){
      tempArr.push(contentArr[i]);
    }
}
  contentArr=tempArr;
  console.log(contentArr.join("\n\r"));
  return;
}
//check whether -n is present or not

let isNPresent = specialCharArr.includes("-n");

if(isNPresent== true){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]= `${i+1} ${contentArr[i]}`;
    }
    console.log(contentArr.join("\n"));
    return;
}
//check whether -b is present or not 
let isBPresent = specialCharArr.includes("-b");
let count=1;
if(isBPresent== true){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=""){
            contentArr[i]= `${count} ${contentArr[i]}`;
            count++
        }
       
    }
    console.log(contentArr.join("\n"));
    return;
}

