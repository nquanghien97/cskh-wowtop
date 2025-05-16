export interface DataType {
  title: string
  detail_title?: string
  tinh_huong_thuong_gap: string[]
  nguyen_nhan: string[]
  giai_phap: string[]
  luu_y: string[]
}

export const data = {
  //Tiêu hóa
  tieu_hoa: {
    be_hay_tao_bon: {
      title: 'Bé hay táo bón',
      tinh_huong_thuong_gap: [
        'Đại tiện cách 2-3 ngày.',
        'Phân cứng, bé rặn khóc.',
        'Ăn ít rau củ.'
      ],
      nguyen_nhan: [
        'Nhu động ruột co bóp yếu hoặc do thiếu xơ để tạo khối cho phân'
      ],
      giai_phap: [
        'Khuyến khích tăng cường rau xanh, trái cây giàu xơ (đu đủ, chuối, lê).',
        'Uống đủ nước trong ngày (theo cân nặng).',
        'Có thể bổ sung thêm sản phẩm chất xơ hòa tan (FOS/ Inulin) hỗ trợ nếu cần.'
      ],
      luu_y: [
        'Dặn phụ huynh cho bé vận động nhẹ nhàng mỗi ngày (chạy chơi, đạp xe...).',
        'Theo dõi sau 2-4 tuần điều chỉnh.'
      ]
    },
    be_hay_tieu_chay_nhe: {
      title: 'Bé hay tiêu chảy nhẹ',
      tinh_huong_thuong_gap: [
        'Đi phân lỏng ≥ 2 lần/ngày.',
        'Không sốt, không nhiễm trùng.'
      ],
      nguyen_nhan: [
        'Hệ vi sinh đường ruột mất cân bằng và hoặc thiếu enzym tiêu hóa.'
      ],
      giai_phap: [
        'Tạm thời giảm bớt liều lượng sữa trong 1-2 ngày đầu.',
        'Theo dõi lượng nước bé uống để tránh mất nước.',
        'Có thể bổ sung thêm lợi khuẩn probiotic phù hợp cho bé nếu cần.'
      ],
      luu_y: [
        'Thường gặp ở bé hệ tiêu hóa nhạy cảm giai đoạn đầu uống sữa mới.',
        'Theo dõi thêm 3-5 ngày.'
      ]
    },
    be_an_uong_kho_tieu: {
      title: 'Bé ăn uống khó tiêu',
      tinh_huong_thuong_gap: [
        'Bé hay đầy bụng, ợ hơi.',
        'Bé lười ăn sau uống sữa.'
      ],
      nguyen_nhan: [
        'Hệ vi sinh đường ruột mất cân bằng và hoặc thiếu enzym tiêu hóa.'
      ],
      giai_phap: [
        'Chia nhỏ bữa ăn chính trong ngày.',
        'Cho bé ăn thức ăn dễ tiêu (cháo, súp).',
        'Có thể bổ sung enzyme tiêu hóa nhẹ nếu cần thiết.'
      ],
      luu_y: [
        'Tư vấn cách pha sữa đúng chuẩn tỷ lệ để sữa loãng vừa phải, không pha quá đặc.'
      ]
    },
    be_hap_thu_kem: {
      title: 'Bé hấp thụ kém (chậm tăng cân)',
      tinh_huong_thuong_gap: [
        'Ăn uống tốt nhưng cân nặng tăng rất ít.'
      ],
      nguyen_nhan: [
        'Hệ vi sinh đường ruột mất cân bằng và hoặc thiếu enzym tiêu hóa.'
      ],
      giai_phap: [
        'Kiên trì duy trì WOWTOP đều đặn 2 lần/ngày.',
        'Tăng nhóm chất béo tốt trong khẩu phần (dầu oliu, quả bơ).',
        'Tăng protein (thịt, trứng, cá).'
      ],
      luu_y: [
        'Đánh giá sau 3 tháng liên tục sử dụng sữa và chế độ dinh dưỡng mới.'
      ]
    }
  },

  // Sức đề kháng
  suc_de_khang: {
    be_hay_bi_om_vat: {
      title: 'Bé hay bị ốm vặt',
      tinh_huong_thuong_gap: [
        '1 tháng ốm >= 2 lần (sổ mũi, ho nhẹ).',
        'Bé dễ cảm lạnh khi thay đổi thời tiết.'
      ],
      nguyen_nhan: [
        'Thiếu vi chất nuôi dưỡng hệ miễn dịch. các vi chất nuôi dưỡng hệ miễn dịch là các protein có nhiều trong nhóm đạm: thịt, cá, trứng, sữa',
        'Phế khí kém do quá trình sinh non hoặc sự dinh dưỡng chưa đầy đủ từ bào thai.'
      ],
      giai_phap: [
        'Duy trì uống đủ sữa WOWTOP đều đặn (2 lần/ngày).',
        'Tăng thêm nhóm vitamin C tự nhiên (cam, quýt, kiwi, ổi).',
        'Có thể bổ sung sản phẩm tăng đề kháng chứa kẽm, beta-glucan, vitamin C nếu cần.'
      ],
      luu_y: [
        'Nhắc phụ huynh cho bé vận động ngoài trời nhẹ nhàng.',
        'Theo dõi sau 2-3 tháng.'
      ]
    },
    be_mac_benh_duong_ho_hap_man_tinh: {
      title: 'Bé mắc bệnh đường hô hấp mạn tính (viêm mũi, viêm phế quản tái đi tái lại)',
      tinh_huong_thuong_gap: [
        'Bé ho kéo dài, chảy mũi, khò khè từng đợt.',
      ],
      nguyen_nhan: [
        'Thiếu vi chất nuôi dưỡng hệ miễn dịch. các vi chất nuôi dưỡng hệ miễn dịch là các protein có nhiều trong nhóm đạm: thịt, cá, trứng, sữa',
        'Phế khí kém do quá trình sinh non hoặc sự dinh dưỡng chưa đầy đủ từ bào thai.'
      ],
      giai_phap: [
        'Duy trì WOWTOP để tối ưu hấp thu dưỡng chất nền tảng.',
        'Ưu tiên thêm thực phẩm giàu omega-3 tự nhiên (cá hồi, hạt chia).',
        'Cân nhắc bổ sung lợi khuẩn đường ruột hỗ trợ miễn dịch (Probiotic).'
      ],
      luu_y: [
        'Luôn nhắc phụ huynh thăm khám định kỳ nếu triệu chứng kéo dài.',
        'Hạn chế tiếp xúc khói bụi, lông vật nuôi.'
      ]
    },
    be_suc_de_khang_kem_hay_met_moi: {
      title: 'Bé sức đề kháng kém, hay mệt mỏi',
      tinh_huong_thuong_gap: [
        'Bé ít vận động, hay than mệt.',
        'Dễ mắc các bệnh vặt.'
      ],
      nguyen_nhan: [
        'Thiếu vi chất nuôi dưỡng hệ miễn dịch. các vi chất nuôi dưỡng hệ miễn dịch là các protein có nhiều trong nhóm đạm: thịt, cá, trứng, sữa',
        'Phế khí kém do quá trình sinh non hoặc sự dinh dưỡng chưa đầy đủ từ bào thai.'
      ],
      giai_phap: [
        'Duy trì WOWTOP để tối ưu hấp thu dưỡng chất nền tảng.',
        'Bổ sung thêm nhóm B-complex, kẽm.',
        'Khuyến khích bé vận động ngoài trời (ít nhất 30 phút/ngày).'
      ],
      luu_y: [
        'Đánh giá lại giấc ngủ bé: đảm bảo ngủ đủ 9-10h/ngày.'
      ]
    },
  },

  // Bất ổn về giấc ngủ
  bat_on_ve_giac_ngu: {
    be_kho_ngu_ngu_khong_sau_giac: {
      title: 'Bé khó ngủ, ngủ không sâu giấc',
      tinh_huong_thuong_gap: [
        'Bé lăn lộn lâu mới ngủ, hay tỉnh giấc giữa đêm.',
        'Bé ngủ chập chờn, quấy khóc đêm.'
      ],
      nguyen_nhan: [
        'Đến từ sự bất ổn về cảm xúc trong quá trình người lớn tương tác với trẻ nhỏ. tạo sự rối loạn các xung động thần kinh ở tim và não',
      ],
      giai_phap: [
        'Tiếp tục duy trì uống sữa WOWTOP vì có nền dưỡng chất hỗ trợ ổn định thần kinh (B-complex, khoáng chất).',
        'Bổ sung thêm magie tự nhiên qua thực phẩm (chuối, bơ, hạnh nhân).',
        'Tạo thói quen thư giãn trước ngủ: tắt TV, đọc sách nhẹ, massage nhẹ.'
      ],
      luu_y: [
        'Nhắc ba mẹ: cố định giờ ngủ hàng ngày, không cho bé ăn quá no hoặc dùng thiết bị điện tử sát giờ ngủ.'
      ]
    }
  },

  // Bất ổn về tinh thần
  bat_on_ve_tinh_than: {
    be_cang_thang_de_cau_gat: {
      title: 'Bé căng thẳng, dễ cáu gắt',
      tinh_huong_thuong_gap: [
        'Bé hay cáu bẳn, giận dỗi vô cớ.',
        'Bé học hành chịu áp lực.'
      ],
      nguyen_nhan: [
        'Đến từ sự bất ổn về cảm xúc trong quá trình người lớn tương tác với trẻ nhỏ. tạo sự rối loạn các xung động thần kinh ở tim và não',
      ],
      giai_phap: [
        'Dinh dưỡng từ WOWTOP hỗ trợ cân bằng năng lượng.',
        'Tăng thêm thực phẩm giàu tryptophan tự nhiên (yến mạch, hạnh nhân, trứng).',
        'Nếu cần có thể tư vấn thêm sp bổ sung nhóm vitamin nhóm B, Omega-3 nhẹ.'
      ],
      luu_y: [
        'Khuyến khích các hoạt động ngoài trời, vẽ tranh, chơi thể thao nhẹ để cân bằng tâm trạng.'
      ]
    },
    be_lo_do_thieu_tap_trung: {
      title: 'Bé lờ đờ, thiếu tập trung',
      tinh_huong_thuong_gap: [
        'Bé học hành không tập trung.',
        'Bé hay buồn ngủ ban ngày.'
      ],
      nguyen_nhan: [
        'Đến từ sự bất ổn về cảm xúc trong quá trình người lớn tương tác với trẻ nhỏ. tạo sự rối loạn các xung động thần kinh ở tim và não',
      ],
      giai_phap: [
        'Tiếp tục uống WOWTOP đều đặn để bù nền dưỡng chất.',
        'Ăn sáng đủ chất mỗi ngày.',
        'Cân chỉnh giờ ngủ-ngủ sớm (trước 21h).',
        'Có thể cân nhắc hỗ trợ thêm nhóm DHA tự nhiên nếu cần thiết.'
      ],
      luu_y: [
        'Cần loại trừ các yếu tố thiếu máu, thiếu vi chất nếu lờ đờ kéo dài.'
      ]
    }
  },

  // Bất ổn về dinh dưỡng
  bat_on_ve_dinh_duong: {
    tre_bieng_an: {
      title: 'Trẻ biếng ăn (ăn ít, kén ăn)',
      tinh_huong_thuong_gap: [
        'Bé thường ăn rất ít trong mỗi bữa',
        'Bé hay lười ăn rau, thịt cá',
        'Thời gian ăn kéo dài'
      ],
      nguyen_nhan: [
        'Sự thiếu hụt lâu ngày các đa vitamin và khoáng chất trong cơ thể khiến cơ thể ăn vào mà không hấp thu, lâu dần khiến trẻ biếng ăn- ngán ăn  và xuất hiện các bất ổn về sau. ',
      ],
      giai_phap: [
        'Chia nhỏ bữa ăn, tạo thực đơn phong phú',
        'Kết hợp dùng thêm men vi sinh hỗ trợ tiêu hóa (nếu cần)',
        'Sử dụng sữa WOWTOP để bổ sung dinh dưỡng dễ hấp thu và đầy đủ nhóm chất'
      ],
      luu_y: [
        'Chia nhỏ bữa ăn, tạo thực đơn phong phú.',
        'Kết hợp dùng thêm men vi sinh hỗ trợ tiêu hóa (nếu cần).',
        'Sử dụng sữa WOWTOP để bổ sung dinh dưỡng dễ hấp thu và đầy đủ nhóm chất.'
      ]
    },
    tre_an_tot_nhung_hap_thu_kem: {
      title: 'Trẻ ăn tốt nhưng hấp thu kém',
      tinh_huong_thuong_gap: [
        'Bé ăn đầy đủ nhưng vẫn gầy, không tăng cân',
        'Bé hay bị rối loạn tiêu hóa nhẹ (phân sống, tiêu chảy, táo bón)'
      ],
      nguyen_nhan: [
        'Sự thiếu hụt lâu ngày các đa vitamin và khoáng chất trong cơ thể khiến cơ thể ăn vào mà không hấp thu, lâu dần khiến trẻ biếng ăn- ngán ăn  và xuất hiện các bất ổn về sau. ',
      ],
      giai_phap: [
        'Tăng cường nhóm thực phẩm dễ tiêu hóa (cháo, súp)',
        'Bổ sung probiotics, prebiotics để cân bằng hệ vi sinh đường ruột',
        'Dùng sữa WOWTOP giúp bổ sung dinh dưỡng cân đối, dễ hấp thu'
      ],
      luu_y: [
        'Tăng cường nhóm thực phẩm dễ tiêu hóa (cháo, súp).',
        'Bổ sung probiotics, prebiotics để cân bằng hệ vi sinh đường ruột.',
        'Dùng sữa WOWTOP giúp bổ sung dinh dưỡng cân đối, dễ hấp thu.'
      ]
    },
    tre_an_thien_lech: {
      title: 'Trẻ ăn thiên lệch (chỉ thích ăn 1 nhóm thực phẩm)',
      tinh_huong_thuong_gap: [
        'Bé chỉ thích ăn cơm trắng, mì tôm, bánh kẹo',
        'Bé ít hoặc không ăn rau xanh, trái cây'
      ],
      nguyen_nhan: [
        'Sự thiếu hụt lâu ngày các đa vitamin và khoáng chất trong cơ thể khiến cơ thể ăn vào mà không hấp thu, lâu dần khiến trẻ biếng ăn- ngán ăn  và xuất hiện các bất ổn về sau. ',
        'Trường hợp bé chỉ thích ăn cơm trắng, đồ ngọt .. vì nhóm chất này cung cấp thẳng năng lượng lên não nên khi bé không thích ăn các đồ ăn khác khiến cơ thể thiếu năng lượng thì não vẫn cần năng lượng từ đường để duy trì hoạt động.'
      ],
      giai_phap: [
        'Hướng dẫn tập thói quen ăn đa dạng',
        'Kết hợp WOWTOP để bù dinh dưỡng tổng thể',
        'Tăng cường chất xơ từ rau củ, trái cây'
      ],
      luu_y: [
        'Hướng dẫn tập thói quen ăn đa dạng.',
        'Kết hợp WOWTOP để bù dinh dưỡng tổng thể.',
        'Tăng cường chất xơ từ rau củ, trái cây.'
      ]
    },
    tre_co_van_de_tieu_hoa_lau_ngay: {
      title: 'Trẻ có vấn đề tiêu hóa lâu ngày',
      tinh_huong_thuong_gap: [
        'Bé hay đầy hơi, bụng trướng',
        'Đi ngoài phân lỏng hoặc táo bón kéo dài'
      ],
      nguyen_nhan: [
        'Sự thiếu hụt lâu ngày các đa vitamin và khoáng chất trong cơ thể khiến cơ thể ăn vào mà không hấp thu, lâu dần khiến trẻ biếng ăn- ngán ăn  và xuất hiện các bất ổn về sau. ',
      ],
      giai_phap: [
        'Bổ sung men tiêu hóa, probiotics theo hướng dẫn',
        'Dùng WOWTOP với lượng nhỏ ban đầu, sau đó tăng dần'
      ],
      luu_y: [
        'Bổ sung men tiêu hóa, probiotics theo hướng dẫn.',
        'Dùng WOWTOP với lượng nhỏ ban đầu, sau đó tăng dần.'
      ]
    },
    tre_co_dau_hieu_thieu_vi_chat: {
      title: 'Trẻ có dấu hiệu thiếu vi chất',
      tinh_huong_thuong_gap: [
        'Bé dễ cảm cúm, vết thương lâu lành',
        'Hay bị mệt mỏi, da xanh xao'
      ],
      nguyen_nhan: [
        'Sự thiếu hụt lâu ngày các đa vitamin và khoáng chất trong cơ thể khiến cơ thể ăn vào mà không hấp thu, lâu dần khiến trẻ biếng ăn- ngán ăn  và xuất hiện các bất ổn về sau. ',
      ],
      giai_phap: [
        'Dùng các sản phẩm hỗ trợ tăng đề kháng',
        'Bổ sung sữa WOWTOP giàu khoáng chất, vitamin chuẩn khoa học'
      ],
      luu_y: [
        'Dùng các sản phẩm hỗ trợ tăng đề kháng.',
        'Bổ sung sữa WOWTOP giàu khoáng chất, vitamin chuẩn khoa học.'
      ]
    }
  }
}