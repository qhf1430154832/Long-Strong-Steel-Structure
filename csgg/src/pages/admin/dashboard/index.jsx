import React, { Component } from 'react'
import { Row, Col, Card, Statistic } from "antd";
export class Index extends Component {
    render() {
        return (
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
        )
    }
}

export default Index
