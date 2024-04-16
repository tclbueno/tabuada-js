function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO!] Digite um número para saber sua taboada.')
    }else{
        let n = Number(num.value)
        let i
        tab.innerHTML=''
    for (i = 1; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        item.value = `tab${i}`
        tab.appendChild(item)    
      }
    }
}