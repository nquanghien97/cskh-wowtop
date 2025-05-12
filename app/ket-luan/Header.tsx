import { Button, Form, Select } from 'antd'
import React from 'react'

interface HeaderProps {
  setTieuHoa: React.Dispatch<React.SetStateAction<"be_hay_tao_bon" | "be_hay_tieu_chay_nhe" | "be_an_uong_kho_tieu" | "be_hap_thu_kem" | undefined>>
  setDeKhang: React.Dispatch<React.SetStateAction<"be_hay_bi_om_vat" | "be_mac_benh_duong_ho_hap_man_tinh" | "be_suc_de_khang_kem_hay_met_moi" | undefined>>
  setGiacNgu: React.Dispatch<React.SetStateAction<"be_kho_ngu_ngu_khong_sau_giac" | undefined>>
  setTinhThan: React.Dispatch<React.SetStateAction<"be_cang_thang_de_cau_gat" | "be_lo_do_thieu_tap_trung" | undefined>>
  setDinhDuong: React.Dispatch<React.SetStateAction<"tre_bieng_an" | "tre_an_tot_nhung_hap_thu_kem" | "tre_an_thien_lech" | "tre_co_van_de_tieu_hoa_lau_ngay" | "tre_co_dau_hieu_thieu_vi_chat" | undefined>>
}

interface FormValues {
  tieu_hoa: "be_hay_tao_bon" | "be_hay_tieu_chay_nhe" | "be_an_uong_kho_tieu" | "be_hap_thu_kem"
  suc_de_khang: "be_hay_bi_om_vat" | "be_mac_benh_duong_ho_hap_man_tinh" | "be_suc_de_khang_kem_hay_met_moi"
  bat_on_ve_giac_ngu: "be_kho_ngu_ngu_khong_sau_giac"
  bat_on_ve_tinh_than: "be_cang_thang_de_cau_gat" | "be_lo_do_thieu_tap_trung"
  bat_on_ve_dinh_duong: "tre_bieng_an" | "tre_an_tot_nhung_hap_thu_kem" | "tre_an_thien_lech" | "tre_co_van_de_tieu_hoa_lau_ngay" | "tre_co_dau_hieu_thieu_vi_chat"
}

function Header(props: HeaderProps) {
  const { setTieuHoa, setDeKhang, setGiacNgu, setTinhThan, setDinhDuong } = props

  const [form] = Form.useForm()

  const onSubmit = (values: FormValues) => {
    setTieuHoa(values.tieu_hoa)
    setDeKhang(values.suc_de_khang)
    setGiacNgu(values.bat_on_ve_giac_ngu)
    setTinhThan(values.bat_on_ve_tinh_than)
    setDinhDuong(values.bat_on_ve_dinh_duong)
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
                { value: 'be_hay_bi_om_vat', label: 'Bé hay bị ốm vặt' },
                { value: 'be_mac_benh_duong_ho_hap_man_tinh', label: 'Bé mắc bệnh đường hô hấp mạn tính (viêm mũi, viêm phế quản tái đi tái lại)' },
                { value: 'be_suc_de_khang_kem_hay_met_moi', label: 'Bé sức đề kháng kém, hay mệt mỏi' },
              ]}
              showSearch
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            label="Giấc ngủ"
            name="bat_on_ve_giac_ngu"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'be_kho_ngu_ngu_khong_sau_giac', label: 'Bé khó ngủ, ngủ không sâu giấc' },
              ]}
              showSearch
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            label="Tinh thần"
            name="bat_on_ve_tinh_than"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'be_cang_thang_de_cau_gat', label: 'Bé căng thẳng, dễ cáu gắt' },
                { value: 'be_lo_do_thieu_tap_trung', label: 'Bé lờ đờ, thiếu tập trung' },
              ]}
              showSearch
            />
          </Form.Item>
          <Form.Item
            className="!mb-0 w-full"
            label="Dinh dưỡng"
            name="bat_on_ve_dinh_duong"
          >
            <Select
              className="w-full"
              placeholder="Chọn tình trạng"
              options={[
                { value: 'tre_bieng_an', label: 'Trẻ biếng ăn (ăn ít, kén ăn)' },
                { value: 'tre_an_tot_nhung_hap_thu_kem', label: 'Trẻ ăn tốt nhưng hấp thu kém' },
                { value: 'tre_an_thien_lech', label: 'Trẻ ăn thiên lệch (chỉ thích ăn 1 nhóm thực phẩm)' },
                { value: 'tre_co_van_de_tieu_hoa_lau_ngay', label: 'Trẻ có vấn đề tiêu hóa lâu ngày' },
                { value: 'tre_co_dau_hieu_thieu_vi_chat       ', label: 'Trẻ có dấu hiệu thiếu vi chất' },
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