import LoadingIcon from '@/components/LoadingIcon'
import { AnswerCustomersEntity } from '@/entities/AnswerCustomerEntity'
import { deleteAnswerCustomer } from '@/services/answer-customers'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface DeleteProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
  data: AnswerCustomersEntity
}

function Delete(props: DeleteProps) {
  const { open, onClose, setRefreshKey, data } = props;
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    try {
      await deleteAnswerCustomer(data.id);
      toast.success('Xóa data thành công');
      setRefreshKey(pre => !pre);
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      onCancel={onClose}
      className='!w-full lg:!w-2/3 min-h-[300px]'
      footer={false}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Bạn có chắc chắn muốn xóa data này không</h1>
      <div className="flex justify-center gap-4">
        <Button type='primary' danger onClick={onClose}>Hủy</Button>
        <Button type='primary' onClick={onDelete}>
          Xác nhận
          {loading && <LoadingIcon />}
        </Button>
      </div>
    </Modal>
  )
}

export default Delete