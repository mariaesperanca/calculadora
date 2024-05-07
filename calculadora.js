*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vh;
    background: #091921;
}
body::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#e91e63, #ffc107);
    clip-path: circle(22% at 30% 20%);
}
body::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient( #ffffff, #da00ff) ;
    clip-path: circle(20% at 70% 90%);
}
 .container{
    position: relative;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    overflow: hidden;
    z-index: 10;
    backdrop-filter: blur(15px);
    border-top: 1px solid rgba(255, 255, 255, 0.02);
    border-left: 1px solid rgba(255, 255, 255, 0.02);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
 }
 .container .calculadora{
    position: relative;
    display: grid;
 }
 .container .calculadora .value{
    grid-column: span 4;
    height: 140px;
    width: 300px;
    text-align: right;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 30px;
    background: transparent;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.02);
    border-right: 1px solid rgba(255, 255, 255, 0.02);
 }
 .container .calculadora span {
    display: grid;
    place-items: center;
    width: 75px;
    height: 75px;
    color: #fff;
    font-weight: 400;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.02);
    border-right: 1px solid rgba(255, 255, 255, 0.02);
 }
 .container .calculadora span:hover{
    transition: 0s;
    background: rgba(255, 255, 255, 0.02);
 }
 .container .calculadora span:active{
    background: rgb(0, 255, 0);
    color: black;
    font-size: 24px;
    font-weight: 500;
 }
 .container .calculadora .clear{
   grid-column: span 2;
   width: 150px;
   background-color: rgba(red, red, red, 0.5);
 }
 .container .calculadora .num_plus{
   grid-row: span 2;
   height: 150px;
 }
 .equal{
   background: rgba(255, 255, 255, 0.5);
 }
