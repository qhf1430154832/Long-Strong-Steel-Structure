import React, { useState,useEffect} from 'react'
import { Row, Col, Card, Statistic } from "antd";
import 'axios'
import axios from 'axios';



export default function Index() {
   const [data,setData]=useState([]);
   useEffect(()=>{
       axios.get(`8.142.10.159:8001/changshi/numvisitors/getByDate/${20210915}`).then((res)=>{
         console.log(res);
         console.log(123);
       }).catch(rea=>{
         console.log(rea);
         console.log(123);
       })
   },[])
  return (
    <div>
         <div>
      <Card title="数据汇总" bordered={false}>
        <Row gutter={8}>
          <Col span={8}>
            <Card title="新增用户" color="red">
              <Statistic
                title="新增用户"
                value="80"
               
              ></Statistic>
            </Card>
          </Col>
          <Col span={16}>
            <Card title="总用户">
              <Statistic
                title="总用户"
                value="840"
             
              ></Statistic>
            </Card>
          </Col>
        
        </Row>
      </Card>
      <Card title="其他统计" bordered={false}></Card>
    </div>
    </div>
  )
}
