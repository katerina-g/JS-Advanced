function cooking(n, op1, op2, op3, op4, op5) {
    n = Number(n);
    let arr = [op1, op2, op3, op4, op5];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                result = n / 2;
                console.log(result);
                n = result;
                break;
            case 'dice':
                result = Math.sqrt(n);
                console.log(result);
                n = result;
                break;
            case 'spice':
                result = n + 1;
                console.log(result);
                n = result;
                break;
            case 'bake':
                result = n * 3;
                console.log(result);
                n = result;
                break;
            case 'fillet':
                result = n * 0.8;
                console.log(result);
                n = result;
                break

        }
        
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')