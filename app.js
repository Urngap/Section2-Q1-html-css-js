
var col1 = document.querySelector('#intnum')
var col3 = document.querySelector('#result')
var selector = document.querySelector('#calculate')

selector.addEventListener('change', () => {
    var value = selector.value
    if (value === "isPrime") {
        col1.addEventListener('keyup', () => {
            if (parseInt(Math.round(col1.value)) == 1) {
            return    col3.innerText = 'False'
            }

            else if (parseInt(Math.round(col1.value)) == 2) {
                return col3.innerText = 'True'
            }

            else if (parseInt(Math.round(col1.value)) > 1) {
                for (let i = 2; i < parseInt(Math.round(col1.value)); i++) {
                    if (parseInt(Math.round(col1.value)) % i == 0) {
                    return    col3.innerText = 'False'
                    }
                    else {
                    return    col3.innerText = 'True'
                    }
                }
            }
        })
    }
    else if(value === "isFibo") {
        col1.addEventListener('keyup', () => {
            if(parseInt(Math.round(col1.value)) == 0 || parseInt(Math.round(col1.value)) == 1){
                return col3.innerText = 'True'
            }

            let prev = 1
            let count = 2
            let temp = 0
            while(count <= parseInt(Math.round(col1.value))) {
                if(prev + count == parseInt(Math.round(col1.value))) {
                    return col3.innerText = 'True'
                }
                temp = prev;
                prev = count;
                count += temp;
            }
            return col3.innerText = 'False'
        })
    }
})
