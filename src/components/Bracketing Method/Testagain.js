import { evaluate, index } from "mathjs";
import { useState } from "react";
import {Col,Container,Row, Table} from "react-bootstrap" ;
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

const Testagain=()=>{
    const[X,setX] = useState([]) ;
    const[N,setN] = useState(0) ;
    const[equation,setEquation] = useState("x*5/2") ;
    const[Ans,setAns] = useState() ;
    const[Equation2,setEquation2] = useState("x^3") ;
    
    const cal=(X)=>{
        var fx , scope;
        scope={
            X:X,
            x:X
        }
    
        fx = evaluate(equation,scope) ;
        return fx;
       
        
    }
    const cal2=(X)=>{
        var fx , scope;
        scope={
            X:X,
            x:X
        }
     
        fx = evaluate(Equation2,scope) ;
        return fx;
       
        
    }

    const[state,setstate] = useState({labels: X.map((element,index)=>{console.log("X=");return index+1;}),
    datasets: [
      {
        label: 'Y',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#3399FF',
        borderColor: '#3366FF',
        borderWidth: 2,
        data: X.map((element,index)=>{console.log("index="+cal(index+1));return cal(index+1);})
      },
      {
        label: 'E2',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#3399FF',
        borderColor: '#3366FF',
        borderWidth: 2,
        data: X.map((element,index)=>{console.log("index="+cal2(index+1));return cal2(index+1);})
      }
    ]
});
    const e=(even)=>{
        setN(even.target.value);
        setX(new Array(parseInt(even.target.value)).fill(0)) ;
        var A= new Array(parseInt(even.target.value)).fill(0) ;
        setstate({labels: A.map((element,index)=>{return index+1;}),
        datasets: [
          {
            label: 'Y',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#3399FF',
            borderColor: '#3366FF',
            borderWidth: 2,
            data: A.map((element,index)=>{return cal(index+1);})
          },
          {
            label: 'Y2',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#3399FF',
            borderColor: '#3366FF',
            borderWidth: 2,
            data: A.map((element,index)=>{return cal2(index+1);})
          }
        ]
    })
        console.log(even.target.value) ;
        
    }
    const a=(even)=>{
        console.log(even.target.value);
        setEquation(even.target.value);
    }
    const b=(even)=>{
            console.log(even.target.value);
            setEquation2(even.target.value);
    }
    return(
        <Container>
           <Row>
            <Col>
            <h4>Equation</h4>
            <input type="text" id="equation" value={equation} onChange={a} ></input>
            </Col>
            <Col>
            <h4>equation2</h4>
            <input type="text" id="Equation2" value={Equation2} onChange={b} ></input>
            </Col>
            <Col>
            <h4>X</h4>
            <input type="number" id="X" value={N} onChange={e} ></input>
            </Col>
        
           </Row>
           <Table striped bordered hover variant="light">
                <thead>
                 <tr>
                     <th width="30%">X</th>
                     <th width="30%">Y</th>
                     <th width="30%">P</th>
                </tr>
                </thead>
                <tbody>
                        {X.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{cal((index+1))}</td>
                                <td>{cal2((index+1))}</td>
                            </tr>)
                        })}
                </tbody>
           </Table>
           <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Test',
                    fontSize:20
                    },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
            <h1>
                {console.log(state.labels)}
            </h1>
        </Container>
    )
}

export default Testagain






