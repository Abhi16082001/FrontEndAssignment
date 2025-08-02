function Calculate(){
    event.preventDefault();
    let nm=txtname.value;
    let rno=txtroll.value;
    let h=+txthtml.value;
    let c=+txtcss.value;
    let j=+txtjs.value;
    let b=+txtbs.value;

    let t,a,g;
    t=h+c+j+b;
    a=t/4;
    if(h<40 || c<40|| j<40|| b<40) g="Fail";
    else  g=a>=90?"A+": a>=80?"B+":a>=60?"B":a>=50?"C":"D";
    document.getElementById("result").style.display="flex";
    rollno.value=rno;
    stunm.value=nm;
    html.value=h;
    css.value=c;
    js.value=j;
    bs.value=b;
    total.value=t;
    avg.value=a;
    grade.value=g;
}