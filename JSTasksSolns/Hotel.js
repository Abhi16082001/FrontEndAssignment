function CalBill(){
    event.preventDefault();
    let n=txtname.value;
    let p=+txtprice.value;
    let q=+txtqty.value;
    let t=+txttip.value;

    let it,g,tot;
    it=p*q;
    g=0.18*it;
    tot=it+g+t;
    document.getElementById("bill").style.display="flex";
    bname.value=n;
    bprice.value=p;
    bqty.value=q;
    btot.value=it;
    btip.value=t;
    bgst.value=g;
    total.value=tot;
}