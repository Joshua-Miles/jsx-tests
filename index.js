function Hello(){
    return <SomethingElse />
} 

function SomethingElse(){
    return 1
}


let something = <Hello />
console.log(something)