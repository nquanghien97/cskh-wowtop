import { Button, Form, Select } from 'antd'
import React from 'react'

interface HeaderProps {
  setTieuHoa: React.Dispatch<React.SetStateAction<"be_hay_tao_bon" | "be_hay_tieu_chay_nhe" | "be_an_uong_kho_tieu" | "be_hap_thu_kem" | undefined>>
}

interface FormValues {
  tieu_hoa: "be_hay_tao_bon" | "be_hay_tieu_chay_nhe" | "be_an_uong_kho_tieu" | "be_hap_thu_kem"
  suc_de_khang: string
  giac_ngu: string
  tinh_than: string
  dinh_duong: string
}

function Header(props: HeaderProps) {
  const { setTieuHoa } = props

  const [form] = Form.useForm()

  const onSubmit = (values: FormValues) => {
    setTieuHoa(values.tieu_hoa)
    console.log(values)
  }

  return (
    <div className="mb-8">
      <Form className="flex gap-8 items-center" form={form} onFinish={onSubmit}>
        <div className="bg-[#f4d798] shadow-xl flex flex-1 items-center justify-around gap-4 px-2 py-4 border border-gray-300 rounded-md">
          <Form.Item
            className="!mb-0 w-full"
            label="Tiêu hóa"
            name="tieu_hoa"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'be_hay_tao_bon', label: 'Bé hay táo bón' },
                { value: 'be_hay_tieu_chay_nhe', label: 'Bé hay tiêu chảy nhẹ' },
                { value: 'be_an_uong_kho_tieu', label: 'Bé ăn uống khó tiêu' },
                { value: 'be_hap_thu_kem', label: 'Bé hấp thu kém (chậm tăng cân)' },
              ]}
              showSearch
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            label="Sức đề kháng"
            name="suc_de_khang"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'Bé hay bị ốm vặt', label: 'Bé hay bị ốm vặt' },
                { value: 'Bé mắc bệnh đường hô hấp mạn tính (viêm mũi, viêm phế quản tái đi tái lại)', label: 'Bé mắc bệnh đường hô hấp mạn tính (viêm mũi, viêm phế quản tái đi tái lại)' },
                { value: 'Bé sức đề kháng kém, hay mệt mỏi', label: 'Bé sức đề kháng kém, hay mệt mỏi' },
              ]}
              showSearch
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            label="Giấc ngủ"
            name="giac_ngu"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'Bé khó ngủ, ngủ không sâu giấc', label: 'Bé khó ngủ, ngủ không sâu giấc' },
              ]}
              showSearch
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            label="Tinh thần"
            name="tinh_than"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'Bé căng thẳng, dễ cáu gắt', label: 'Bé căng thẳng, dễ cáu gắt' },
                { value: 'Bé lờ đờ, thiếu tập trung', label: 'Bé lờ đờ, thiếu tập trung' },
              ]}
              showSearch
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            label="Dinh dưỡng"
            name="dinh_duong"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'Trẻ biếng ăn (ăn ít, kén ăn)', label: 'Trẻ biếng ăn (ăn ít, kén ăn)' },
                { value: 'Trẻ ăn tốt nhưng hấp thu kém', label: 'Trẻ ăn tốt nhưng hấp thu kém' },
                { value: 'Trẻ ăn thiên lệch (chỉ thích ăn 1 nhóm thực phẩm)', label: 'Trẻ ăn thiên lệch (chỉ thích ăn 1 nhóm thực phẩm)' },
                { value: 'Trẻ có vấn đề tiêu hóa lâu ngày', label: 'Trẻ có vấn đề tiêu hóa lâu ngày' },
                { value: 'Trẻ có dấu hiệu thiếu vi chất', label: 'Trẻ có dấu hiệu thiếu vi chất' },
              ]}
              showSearch
            />
          </Form.Item>
        </div>
        <div>
          <Button type='primary' htmlType='submit'>Xem kết luận</Button>
        </div>
      </Form>
    </div>
  )
}

export default Header