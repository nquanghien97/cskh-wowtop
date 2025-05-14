import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Form, Input, Modal } from "antd";
import { createAnswerCustomers } from '@/services/answer-customers';
import LoadingIcon from '@/components/LoadingIcon';

interface CreateProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormValues {
  category: string,
  symptomCode: string,
  symptom: string,
  staffMessages: string,
  customerMessages: string,
  content: string,
}

const initialValues = {
  category: '',
  symptomCode: '',
  symptom: '',
  staffMessages: '',
  customerMessages: '',
}

function Create(props: CreateProps) {
  const { open, onClose, setRefreshKey } = props;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [extraProducts, setExtraProducts] = useState('')

  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      setContent('');
      setExtraProducts('');
      form.resetFields();
    }
  }, [form, open])

  const handleClose = () => {
    onClose();
  }

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      await createAnswerCustomers({
        category: data.category,
        symptomCode: data.symptomCode,
        symptom: data.symptom,
        staffMessages: data.staffMessages,
        customerMessages: data.customerMessages,
        content,
        extraProducts
      })
      toast.success('Thêm thành công')
      setRefreshKey(pre => !pre);
      handleClose();
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
        toast.error(e.message)
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      onCancel={handleClose}
      className='!w-full lg:!w-2/3 !top-2 min-h-[300px]'
      footer={false}
    >
      <h1 className="mb-4 text-2xl font-bold text-center">Thêm mới nội dung</h1>
      <div>
        <Form form={form} onFinish={onSubmit} initialValues={initialValues}>
          <div className="flex items-center h-[40px] mb-6">
            <p className="mr-2 w-[106px] text-left text-[#2563eb]">Nhóm biểu hiện</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Input className="py-2" />
            </Form.Item>
          </div>
          <div className="flex items-center h-[40px] mb-6">
            <p className="mr-2 w-[106px] text-left text-[#2563eb]">Mã triệu chứng</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="symptomCode"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Input className="py-2" />
            </Form.Item>
          </div>
          <div className="flex items-center h-[40px] mb-6">
            <p className="mr-2 w-[106px] text-left text-[#2563eb]">Triệu chứng</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="symptom"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Input className="py-2" />
            </Form.Item>
          </div>
          <div className="flex items-center h-[40px] mb-6">
            <p className="mr-2 w-[106px] text-left text-[#2563eb]">CSKH</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="staffMessages"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Input className="py-2" />
            </Form.Item>
          </div>
          <div className="flex items-center h-[40px] mb-6">
            <p className="mr-2 w-[106px] text-left text-[#2563eb]">Khách hàng</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="customerMessages"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Input className="py-2" />
            </Form.Item>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <p className="mr-2 w-[106px] text-left text-[#2563eb]">Hướng xử trí/Tư vấn</p>
              <Editor
                apiKey="hkoepxco9p2gme5kius6axtlk3n83yberu5a59m56l7dhgn3"
                value={content}
                onEditorChange={(newContent: string) => setContent(newContent)}
                init={{
                  height: 300,
                  flex: 1,
                  menubar: false,
                  extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
                  valid_elements: '*[*]',
                  plugins: [
                    'table',
                    'media',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | table | forecolor | removeformat | media'
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <p className="mr-2 w-[106px] text-left text-[#2563eb]">Tư vấn sản phẩm bổ sung</p>
              <Editor
                apiKey="hkoepxco9p2gme5kius6axtlk3n83yberu5a59m56l7dhgn3"
                value={extraProducts}
                onEditorChange={(newContent: string) => setExtraProducts(newContent)}
                init={{
                  height: 300,
                  flex: 1,
                  menubar: false,
                  extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
                  valid_elements: '*[*]',
                  plugins: [
                    'table',
                    'media',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | table | forecolor | removeformat | media'
                }}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button type='primary' danger onClick={handleClose}>Hủy</Button>
            <Button type='primary' htmlType="submit">
              Xác nhận
              {loading && <LoadingIcon />}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default Create