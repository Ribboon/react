import { inv } from "mathjs";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap"

const Testma = () => {
   
    const [N,setN] = useState(0);

    const [Matrix,setMatrix] = useState([]);
    

 
    const [Tables,setTable] = useState([]);
    const fill2DimensionsArray = (arr, rows, columns) => { //ฟังชั่นรับค่าn โยน ar,col row
        for (var i = 0; i < rows; i++) { //วนลูป row
            arr.push([0]) //พุชค่า n ใน ar
            for (var j = 0; j < columns; j++) { //วนลูป column
                arr[i][j] = 0;
            }
        }
    }

    const calculate = () =>{
        var a = []; //สร้างกล่อง a    เป็น array
        fill2DimensionsArray(a, N, N);//สร้างกล่อง n*n
        console.log(a);
        for(var i=0;i<N;i++){ // ลูปค่าตัวเลข
            for(var j=0;j<N;j++){
                a[i][j]=document.getElementById(""+i+j).value; //เก็บข้อมูลใน ar 00,01
                console.log(a);
                console.log("a["+i+"]["+j+"] = "+a[i][j]);//ด้านหลังคือตัวตัวเลขที่เติมในกล่อง
            }
        }
        console.log(a);
        var invf = inv(a);// a คือ ค่าที่ยังไม่ inverse
        setTable(<Container>
            {invf.map((element,index)=>{ //เอาค่าinversr มาแมพ??index 
            var i = index;
            return(
                <Table>
                    <tr key={i}>
                    {invf[i].map((e,index)=>{ // e คืออะไรค้าาาา
                    return(
                        <td>
                            <h1>{e}</h1>
                        </td>
                    )
                    })}
                    </tr>
                </Table>
            )
        })}
        </Container>)
    }

    return(
        <Container>
            <h1>input NxN</h1>
            <input onChange={e=>{
                setN(e.target.value)
                setMatrix(new Array(parseInt(e.target.value)).fill( new Array(parseInt(e.target.value)).fill(0)))
                }}></input>
            <Container>
                {Matrix.map((element,index)=>{
                    var i = index;
                    return(
                        <Table>
                            <tr key={i}>
                            {Matrix[i].map((e,index)=>{
                            return(
                                <td>
                                    <h1>{i}{index}</h1>
                                    <input id={""+i+index}/>
                                </td>
                            )
                            })}
                            </tr>
                        </Table>
                    )
                })}
                <Button onClick={calculate}>calculate</Button>
            </Container>

            {Tables}
        </Container>
    )
}

export default Testma