'use client'

import React, { useEffect, useState } from 'react'
import Header from './Header'
import { data } from './data'
import ArrowRight from '@/assets/icons/ArrowRight'

function KetLuan() {

  const [tieuHoa, setTieuHoa] = useState<'be_hay_tao_bon' | 'be_hay_tieu_chay_nhe' | 'be_an_uong_kho_tieu' | 'be_hap_thu_kem'>()
  const [isExpandedTieuHoa, setIsExpandedTieuHoa] = useState(true);

  const [deKhang, setDeKhang] = useState<'be_hay_bi_om_vat' | 'be_mac_benh_duong_ho_hap_man_tinh' | 'be_suc_de_khang_kem_hay_met_moi'>()
  const [isExpandedDeKhang, setIsExpandedDeKhang] = useState(true);

  const [giacNgu, setGiacNgu] = useState<'be_kho_ngu_ngu_khong_sau_giac'>()
  const [isExpandedGiacNgu, setIsExpandedGiacNgu] = useState(true);

  const [tinhThan, setTinhThan] = useState<'be_cang_thang_de_cau_gat' | 'be_lo_do_thieu_tap_trung'>()
  const [isExpandedTinhThan, setIsExpandedTinhThan] = useState(true);

  const [dinhDuong, setDinhDuong] = useState<'tre_bieng_an' | 'tre_an_tot_nhung_hap_thu_kem' | 'tre_an_thien_lech' | 'tre_co_van_de_tieu_hoa_lau_ngay' | 'tre_co_dau_hieu_thieu_vi_chat'>()
  const [isExpandedDinhDuong, setIsExpandedDinhDuong] = useState(true);

  useEffect(() => {
    document.title = "Kết luận"
  }, [])

  const dataTieuHoa = tieuHoa && data.tieu_hoa[tieuHoa]
  const dataDeKhang = deKhang && data.suc_de_khang[deKhang]
  const dataGiacNgu = giacNgu && data.bat_on_ve_giac_ngu[giacNgu]
  const dataTinhThan = tinhThan && data.bat_on_ve_tinh_than[tinhThan]
  const dataDinhDuong = dinhDuong && data.bat_on_ve_dinh_duong[dinhDuong]

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

      {/* Bất ổn về tiêu hóa */}
      {tieuHoa && (
        <div className="bg-[#f4d798] shadow-xl px-2 py-4 border border-gray-300 rounded-md mb-4">
          <div className="flex items-center mb-4">
            <h3 className="text-center text-2xl font-semibold flex-1">Bất ổn hệ tiêu hóa</h3>
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

      {/* Sức đề kháng */}
      {deKhang && (
        <div className="bg-[#f4d798] shadow-xl px-2 py-4 border border-gray-300 rounded-md mb-4">
          <div className="flex items-center mb-4">
            <h3 className="text-center text-2xl font-semibold flex-1">Bất ổn hệ miễn dịch (sức đề kháng)</h3>
            {isExpandedDeKhang ? (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedDeKhang(false)}>
                <ArrowRight className="h-6 w-6 rotate-90 duration-300" />
              </div>
            ) : (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedDeKhang(true)}>
                <ArrowRight className="h-6 w-6 duration-300" />
              </div>
            )}
          </div>
          {isExpandedDeKhang && (
            <div className="">
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">TÌNH HUỐNG KHAI THÁC THƯỜNG GẶP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDeKhang?.tinh_huong_thuong_gap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">NGUYÊN NHÂN</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDeKhang?.nguyen_nhan.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GIẢI PHÁP HỖ TRỢ THÊM SONG SONG VỚI WOWTOP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDeKhang?.giai_phap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GHI CHÚ / LƯU Ý</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDeKhang?.luu_y.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bất ổn về giấc ngủ */}
      {giacNgu && (
        <div className="bg-[#f4d798] shadow-xl px-2 py-4 border border-gray-300 rounded-md mb-4">
          <div className="flex items-center mb-4">
            <h3 className="text-center text-2xl font-semibold flex-1">Bất ổn về giấc ngủ</h3>
            {isExpandedGiacNgu ? (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedGiacNgu(false)}>
                <ArrowRight className="h-6 w-6 rotate-90 duration-300" />
              </div>
            ) : (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedGiacNgu(true)}>
                <ArrowRight className="h-6 w-6 duration-300" />
              </div>
            )}
          </div>
          {isExpandedGiacNgu && (
            <div className="">
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">TÌNH HUỐNG KHAI THÁC THƯỜNG GẶP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataGiacNgu?.tinh_huong_thuong_gap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">NGUYÊN NHÂN</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataGiacNgu?.nguyen_nhan.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GIẢI PHÁP HỖ TRỢ THÊM SONG SONG VỚI WOWTOP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataGiacNgu?.giai_phap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GHI CHÚ / LƯU Ý</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataGiacNgu?.luu_y.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bất ổn về tinh thần */}
      {tinhThan && (
        <div className="bg-[#f4d798] shadow-xl px-2 py-4 border border-gray-300 rounded-md mb-4">
          <div className="flex items-center mb-4">
            <h3 className="text-center text-2xl font-semibold flex-1">Bất ổn về tinh thần</h3>
            {isExpandedTinhThan ? (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedTinhThan(false)}>
                <ArrowRight className="h-6 w-6 rotate-90 duration-300" />
              </div>
            ) : (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedTinhThan(true)}>
                <ArrowRight className="h-6 w-6 duration-300" />
              </div>
            )}
          </div>
          {isExpandedTinhThan && (
            <div className="">
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">TÌNH HUỐNG KHAI THÁC THƯỜNG GẶP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTinhThan?.tinh_huong_thuong_gap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">NGUYÊN NHÂN</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTinhThan?.nguyen_nhan.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GIẢI PHÁP HỖ TRỢ THÊM SONG SONG VỚI WOWTOP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTinhThan?.giai_phap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GHI CHÚ / LƯU Ý</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataTinhThan?.luu_y.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bất ổn về dinh dưỡng */}
      {dinhDuong && (
        <div className="bg-[#f4d798] shadow-xl px-2 py-4 border border-gray-300 rounded-md">
          <div className="flex items-center mb-4">
            <h3 className="text-center text-2xl font-semibold flex-1">Bất ổn về dinh dưỡng</h3>
            {isExpandedDinhDuong ? (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedDinhDuong(false)}>
                <ArrowRight className="h-6 w-6 rotate-90 duration-300" />
              </div>
            ) : (
              <div className="h-8 w-8 hover:bg-gray-50 flex justify-center items-center cursor-pointer duration-300 rounded-full" onClick={() => setIsExpandedDinhDuong(true)}>
                <ArrowRight className="h-6 w-6 duration-300" />
              </div>
            )}
          </div>
          {isExpandedDinhDuong && (
            <div className="">
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">TÌNH HUỐNG KHAI THÁC THƯỜNG GẶP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDinhDuong?.tinh_huong_thuong_gap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">NGUYÊN NHÂN</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDinhDuong?.nguyen_nhan.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GIẢI PHÁP HỖ TRỢ THÊM SONG SONG VỚI WOWTOP</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDinhDuong?.giai_phap.map((item) => (
                    <li key={item} className="py-1">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4 rounded-md overflow-hidden border border-gray-300">
                <p className="bg-amber-50 py-3 text-center text-xl border-b border-gray-300">GHI CHÚ / LƯU Ý</p>
                <ul className="list-disc pl-6 bg-cyan-50 py-4">
                  {dataDinhDuong?.luu_y.map((item) => (
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