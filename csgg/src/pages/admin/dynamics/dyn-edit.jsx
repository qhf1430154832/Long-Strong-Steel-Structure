import React , { useState }from 'react'
import {Card,Input,Button,Form} from 'antd'
import { createApi2} from '../../../services/products'

const { TextArea } = Input;
 function EditDyn (props) {





    
    
   const  handleSubmit =(values)  => {
      
       
    
        createApi2({content:values.content
          
          ,title:values.tit,writer:'admin'}).then(res=>{
           
            props.history.push('/admin/dynamics')
        }).catch(err=>{
            console.log(err);
        })
        
    }

        
    
   
  
        return (
          <Card title='动态编辑' bordered>
                <Form onFinish={(e)=>handleSubmit(e)} scrollToFirstError >
        
                    <Form.Item label='标题' name={'tit'}   rules={[
                                {
                                    required: true,
                                    message: '请填动态标题!'
                                },
                            ]}>
                  
         <Input placeholder="请输动态标题" />
                    </Form.Item>

                    <Form.Item label='内容' name={'content'}   rules={[
                                {
                                    required: true,
                                    message: '请输入动态信息!'
                                },
                            ]}>
                  
                  <TextArea placeholder="请输入动态信息!" allowClear  style={{height:'200px'}}/>
 
                    </Form.Item>
                
              

                  
                    <Form.Item>
                    <Button  htmlType="submit"   type='primary'style={{backgroundColor:"#428BCA"}}>保存</Button></Form.Item>
                </Form>
          </Card>
        )
    }

    export default EditDyn
 
