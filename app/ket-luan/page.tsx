'use client'

import React, { useEffect, useState } from 'react'
import Header from './Header'
import { data } from './data'
import ArrowRight from '@/assets/icons/ArrowRight'

function KetLuan() {

  const [tieuHoa, setTieuHoa] = useState<'be_hay_tao_bon' | 'be_hay_tieu_chay_nhe' | 'be_an_uong_kho_tieu' | 'be_hap_thu_kem'>()
  const [isExpandedTieuHoa, setIsExpandedTieuHoa] = useState(true)

  useEffect(() => {
    document.title = "Kết luận"
  }, [])

  const dataTieuHoa = tieuHoa && data.tieu_hoa[tieuHoa]

  return (
    <div className="p-4">
      <h2 className="text-center mb-6 text-4xl font-semibold">Kết luận</h2>
      <Header
        setTieuHoa={setTieuHoa}
      />
      {tieuHoa && (
        <div className="bg-[#f4d798] shadow-xl px-2 py-4 border border-gray-300 rounded-md">
          <div className="flex items-center mb-4">
            <h3 className="text-center text-2xl font-semibold flex-1">Thông tin sức khỏe tiêu hóa</h3>
            {isExpandedTieuHoa ? (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedTieuHoa(false)}>
                <ArrowRight className="h-6 w-6 rotate-90 duration-300" />
              </div>
            ) : (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedTieuHoa(true)}>
                <ArrowRight className="h-6 w-6 duration-300" />
              </div>
            )}
          </div>
          {isExpandedTieuHoa && (
            <div className="">
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">TÌNH HUỐNG KHAI THÁC THƯỜNG GẶP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTieuHoa?.tinh_huong_thuong_gap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">NGUYÊN NHÂN</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTieuHoa?.nguyen_nhan.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GIẢI PHÁP HỖ TRỢ THÊM SONG SONG VỚI WOWTOP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTieuHoa?.giai_phap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GHI CHÚ / LƯU Ý</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTieuHoa?.luu_y.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default KetLuan