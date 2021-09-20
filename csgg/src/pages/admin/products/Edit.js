import React , { useState }from 'react'
import {Card,Input,Button,Form,Upload} from 'antd'
import { createApi } from '../../../services/products'
import {serverUrl} from '../../../utils/config'
 function Edit (props) {
  
    const  handleSubmit =(values)  => {
      console.log('Received values of form: ', values)
      createApi({comment:values.comment
        
        ,url:values.url.file.response.data.url,title:values.tit}).then(res=>{
          
          props.history.push('/admin/products/list')
      }).catch(err=>{
          console.log(err);
      })
      
  }
    //  上传功能
    const [imageUrl, setImageUrl] = useState("");
   
    const uploadButton = (
        <div>
     
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const handleChange = info => {
        if (info.file.status === "uploading") {
           console.log(info);
          console.log('false')
          return;
        }
        if (info.file.status === "done") {
          // 上传成功
     
         
         
          
          setImageUrl(info.file.response.data);
          
         console.log('true')
        }
      };
   
  
        return (
          <Card title='工程实例编辑' bordered>
                <Form onFinish={(e)=>handleSubmit(e)} scrollToFirstError >
        
                    <Form.Item label='工程名称' name={'tit'}   rules={[
                                {
                                    required: true,
                                    message: '请填写工程名字!'
                                },
                            ]}>
                  
         <Input placeholder="请填写工程名字" />
                    </Form.Item>
                    <Form.Item label='工程内容' name={'comment'}   rules={[
                                {
                                    required: true,
                                    message: '请填工程内容!'
                                },
                            ]}>
                  
         <Input placeholder="请输入工程内容" />
                    </Form.Item>

                    <Form.Item label='图片' name={'url'}>
                  <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={serverUrl}
            onChange={info => handleChange(info)}
          >
            {imageUrl ? (
              <img
                src={imageUrl.url}
                alt="avatar"
                style={{ width: "100%" }} 
              />
            ) : (
              uploadButton
            )}
          </Upload>
                  </Form.Item>
                  
                    <Form.Item>
                    <Button  htmlType="submit"   type='primary'style={{backgroundColor:"#428BCA"}}>保存</Button></Form.Item>
                </Form>
          </Card>
        )
    }

    export default Edit
 
