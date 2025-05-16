'use client'

import React, { useEffect, useState } from 'react'
import Header from './Header'
import { data } from './data'
import withAuth from '@/hocs/withAuth'
import TableItem from './TableItem'

function KetLuan() {

  const [tieuHoa, setTieuHoa] = useState<'be_hay_tao_bon' | 'be_hay_tieu_chay_nhe' | 'be_an_uong_kho_tieu' | 'be_hap_thu_kem'>()

  const [deKhang, setDeKhang] = useState<'be_hay_bi_om_vat' | 'be_mac_benh_duong_ho_hap_man_tinh' | 'be_suc_de_khang_kem_hay_met_moi'>()

  const [giacNgu, setGiacNgu] = useState<'be_kho_ngu_ngu_khong_sau_giac'>()

  const [tinhThan, setTinhThan] = useState<'be_cang_thang_de_cau_gat' | 'be_lo_do_thieu_tap_trung'>()

  const [dinhDuong, setDinhDuong] = useState<'tre_bieng_an' | 'tre_an_tot_nhung_hap_thu_kem' | 'tre_an_thien_lech' | 'tre_co_van_de_tieu_hoa_lau_ngay' | 'tre_co_dau_hieu_thieu_vi_chat'>()

  useEffect(() => {
    document.title = "Kết luận"
  }, [])

  const dataTieuHoa = tieuHoa && data.tieu_hoa[tieuHoa]
  const dataDeKhang = deKhang && data.suc_de_khang[deKhang]
  const dataGiacNgu = giacNgu && data.bat_on_ve_giac_ngu[giacNgu]
  const dataTinhThan = tinhThan && data.bat_on_ve_tinh_than[tinhThan]
  const dataDinhDuong = dinhDuong && data.bat_on_ve_dinh_duong[dinhDuong]

  console.log({
    dataTieuHoa,
    dataDeKhang,
    dataGiacNgu,
    dataTinhThan,
    dataDinhDuong
  })

  return (
    <div className="p-4">
      <h2 className="text-center mb-6 text-4xl font-semibold">Kết luận</h2>
      <Header
        setTieuHoa={setTieuHoa}
        setDeKhang={setDeKhang}
        setGiacNgu={setGiacNgu}
        setTinhThan={setTinhThan}
        setDinhDuong={setDinhDuong}
      />
      {(dataDeKhang || dataGiacNgu || dataTinhThan || dataDinhDuong || dataTieuHoa) && (
        <table className="border-collapse border border-blue-500 w-full mb-4">
          <thead>
            <tr className="bg-[#f3ec90]">
              <th className="text-center font-semibold border border-blue-500 p-2" colSpan={2}>Phân loại bất ổn</th>
              <th className="text-center font-semibold border border-blue-500 p-2">Tình huống khai thác thường gặp</th>
              <th className="text-center font-semibold border border-blue-500 p-2">Nguyên nhân</th>
              <th className="text-center font-semibold border border-blue-500 p-2">Giải pháp hỗ trợ thêm song song với WOWTOP</th>
              <th className="text-center font-semibold border border-blue-500 p-2">Ghi chú / Lưu ý</th>
            </tr>
          </thead>
          <tbody>
            {dataTieuHoa && (
              <TableItem data={dataTieuHoa} label='Bất ổn về tiêu hóa' />
            )}
            {dataDeKhang && (
              <TableItem data={dataDeKhang} label='Bất ổn hệ miễn dịch (Sức đề kháng)' />
            )}
            {dataGiacNgu && (
              <TableItem data={dataGiacNgu} label='Bất ổn về giấc ngủ' />
            )}
            {dataTinhThan && (
              <TableItem data={dataTinhThan} label='Bất ổn về tinh thần' />
            )}
            {dataDinhDuong && (
              <TableItem data={dataDinhDuong} label='Bất ổn về dinh dưỡng' />
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}

const KetLuanWithAuth = withAuth(KetLuan)

export default KetLuanWithAuth