import React from 'react'
import { Button, Form, Input, Modal } from 'antd'
import { toast } from 'react-toastify'
import { changeMyPassword } from '@/services/me'
import LoadingIcon from '@/components/LoadingIcon'

interface ChangePasswordProps {
  open: boolean
  onClose: () => void
}

interface FormValue {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}

function ChangePassword(props: ChangePasswordProps) {
  const { open, onClose } = props
  const [form] = Form.useForm<FormValue>();
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    form.setFieldsValue({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    })
    onClose();
  }

  const onSubmit = async (data: FormValue) => {
    setLoading(true);
    try {
      await changeMyPassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      })
      toast.success('Đổi mật khẩu thành công');
      handleClose();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        toast.error(err.message)
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
      className='!w-full lg:!w-1/2 min-h-[300px]'
      footer={false}
    >
      <h1 className="mb-4 text-2xl font-bold text-center">Đổi mật khẩu</h1>
      <div>
        <Form
          form={form}
          className="flex flex-col"
          onFinish={onSubmit}
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
          }}
        >
          <Form.Item
            className="!mb-0 py-2"
            name="currentPassword"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc"
              }
            ]}
          >
            <Input placeholder="Mật khẩu hiện tại" type='password' />
          </Form.Item>
          <Form.Item
            className="!mb-0 py-2"
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc"
              }
            ]}
          >
            <Input placeholder="Mật khẩu mới" type='password' />
          </Form.Item>
          <Form.Item
            className="!mb-0 py-2"
            name="confirmNewPassword"
            rules={[
              {
                required: true,
                message: "Trường này là bắt buộc"
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Mật khẩu xác nhận không chính xác'));
                },
              }),
            ]}
          >
            <Input placeholder="Xác nhận mật khẩu mới" type='password' />
          </Form.Item>
          <div className="flex justify-center gap-8 my-4">
            <Button type='primary' danger onClick={handleClose}>
              Hủy
            </Button>
            <Button
              htmlType="submit"
              type="primary"
            >
              Xác nhận
              {loading && <LoadingIcon />}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default ChangePassword