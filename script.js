const calci=()=>{
    const add=(a,b)=> Number(a)+Number(b);

    const sub=(a,b)=> a-b;

    const mul=(a,b)=> a*b;

    const div=(a,b)=> a/b;
    
    return {add,sub,mul,div};

}

const calc=calci();
export default calc;

