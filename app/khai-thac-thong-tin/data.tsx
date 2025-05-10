import { ReactNode } from "react"

export interface DataType {
  id: number,
  title: string,
  description?: ReactNode
  children?: DataType[]
}

export const data: DataType[] = [
  {
    id: 1,
    title: 'Gọi điện thoại',
    children: [
      {
        id: 11,
        title: 'Gọi tiếp cận khách hàng để nhắc mình là ai. Chào hỏi khách hàng, Xác nhận thông tin nhận được sữa',
        description: (
          <div>
            <p>Em chào Anh/chị [Tên khách hàng]. Em là [Tên CSKH] bên Sữa tăng chiều cao WOWTOP. Em nhận được thông tin là mình nhận được sữa rồi đúng không ạ”.</p>
            <p>Hiện nay em đang được phân công phụ trách hỗ trợ mình trong quá trình sử dụng sản phẩm. Em xin phép kết bạn zalo để hỗ trợ mình chi tiết.</p>
          </div>
        )
      },
      {
        id: 12,
        title: 'Giải thích chi tiết cho khách hàng nếu hỏi đã có người kết nối (nếu có). Nếu khách hàng ko hỏi thì bỏ qua phần này)',
        description: (
          <div>
            <p>“Em là Đức ở bên bộ phận CSKH còn bạn H là nhân viên bán hàng. Theo chính sách của công ty, mỗi khách hàng sẽ có 1 CSKH hỗ trợ, em sẽ đồng hành cùng mẹ suốt quá trinh dùng sữa của Con”</p>
          </div>
        )
      }
    ]
  },
  {
    id: 2,
    title: 'Kết bạn zalo',
    children: [
      {
        id: 21,
        title: 'Gửi kết bạn cho Khách qua zalo. Phải có giới thiệu',
        description: (
          <div>
            <p>Em chào A/C, em là Đức bên CSKH sữa Wowtop, chị đồng ý kết bạn với em ạ!</p>
          </div>
        )
      }
    ]
  },
  {
    id: 3,
    title: 'Cảm ơn khách hàng và giới thiệu bản thân',
    children: [
      {
        id: 31,
        title: 'Cảm ơn khách hàng đã tin tưởng sử dụng sản phẩm',
        description: (
          <div>
            <p>Thay mặt Nhãn hàng Wowtop, em gửi lời chào và cảm ơn chân thành nhất tới chị khi đã tin tưởng lựa chọn sản phẩm của bên em.</p>
          </div>
        )
      },
      {
        id: 32,
        title: 'Giới thiệu lại bản thân 1 lần nữa',
        description: (
          <div>
            <p>Em giới thiệu lại một chút, Em là Đức Bộ phận CSKH nhãn hàng sữa Wowtop. Em đang được phân công phụ trách hỗ trợ chị trong quá trình sử dụng sản phẩm. Nếu có thông tin và thắc mắc nào về sản phẩm thì chị báo lại em, em sẽ hỗ trợ mình nhé chị.</p>
          </div>
        )
      }
    ]
  },
  {
    id: 4,
    title: 'Hướng dẫn cách đo chiều cao',
    children: [
      {
        id: 41,
        title: 'Hướng dẫn',
        description: (
          <div>
            <p>Nhãn hàng cũng tặng kèm 1 thước đo chiều cao dán tường, em hướng dẫn Chị phương pháp đo chiều cao 5 điểm chạm để đo chính xác chiều cao của Con:</p>
            <p>1. Thân người trẻ ép sát vào thước đo tạo 5 điểm chạm vào thước ở: đầu, vai, mông, bắp chân và gót chân.</p>
            <p>2. Mắt trẻ nhìn thẳng, đuôi mắt và rốn tai tạo một đường thẳng nằm ngang song song với mặt đất.</p>
          </div>
        )
      }
    ]
  },
  {
    id: 5,
    title: 'Khai thác chỉ số hình thể và hành vi sử dụng sữa của con',
    children: [
      {
        id: 51,
        title: 'Nếu có thông tin tuổi, chiều cao, cân nặng, giới tính thì xác nhận lại. Chưa có thì khai thác chi tiết.',
        description: (
          <div>
            <p>1. Em xin xác nhận lại thông tin của Con: Con.. tuổi, giới tính..., cao .., cân nặng là.. ạ?</p>
          </div>
        )
      },
      {
        id: 52,
        title: 'Xác nhận thông tin về sử dụng sữa gì (sale đã xin), nếu chưa có thì cần xin',
        description: (
          <div>
            <p>2. Em xin xác nhận lại thông tin Con đã/đang dùng sữa. Ngoài ra, trước đó mẹ còn cho Con sử dụng sữa gì để bổ sung nữa ko ạ?</p>
            <p>3. Con có dị ứng sữa gì ko? Con ko thích sữa gì ạ?</p>
          </div>
        )
      },
      {
        id: 53,
        title: 'Đánh giá sơ bộ hình thể: Tính toán chỉ số BMI và đánh giá kết quả. Nên kết hợp đánh giá theo cảm tính và cảm quan thực tế',
        description: (
          <div>
            <p>Về chỉ số cơ thể:</p>
            <ul>
              <li>Chiều cao của con</li>
              <li>Cân nặng của con</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    id: 6,
    title: 'Gen',
    description: (
      <div>
        <p>Chiều cao của ba và mẹ hiện tại lần lượt là bao nhiêu cm?</p>
      </div>
    )
  },
  {
    id: 7,
    title: 'Dậy thì',
    children: [
      {
        id: 71,
        title: 'Đối với con từ 7 tới 17 tuổi',
        description: (
          <div>
            <p>Con đã dậy thì hay chưa, dậy thì năm bao nhêu tuổi?</p>
          </div>
        )
      },
      {
        id: 72,
        title: 'Đối với con dưới 6 tuổi',
        description: (
          <div>
            <p>Con sinh non hay đủ tháng?</p>
          </div>
        )
      }
    ]
  },
  {
    id: 8,
    title: 'Đề kháng',
    description: (
      <div>
        <ul className="list-disc ml-6">
          <li>Con có tiền sử bệnh lý bẩm sinh hoặc mãn tính nào ko?</li>
          <li>Con có hay bị ốm vặt  không? (Sốt, ho, viêm họng, tiêu chảy...) có hay bị viêm mũi dị ứng, đau họng khi thay đổi thời tiết không?</li>
          <li>Con có bị dị ứng với gì không? (thức ăn, thuốc, thời tiết, côn trùng...)</li>
        </ul>
      </div>
    )
  },
  {
    id: 9,
    title: 'Dinh dưỡng, tiêu hóa',
    description: (
      <div>
        <ul className="list-disc ml-6">
          <li>Mẹ có là người trực tiếp chăm Con không? Đồ ăn ai nấu? Sữa ai pha? Có theo dõi từng ngày Con ăn uống như thế nào không?</li>
          <li>Con có thường xuyên gặp vấn đề về tiêu hóa? (VD: đầy hơi, táo bón, tiêu chảy...)</li>
          <li>Con ăn xong có bị đầy bụng, đau bụng ko?</li>
          <li>Con đi tiêu bao nhiêu lần/ngày?</li>
          <li>Tính chất phân của Con thường là: mềm / táo / lỏng / thay đổi thất thường?</li>
          <li>Con có biểu hiện biếng ăn, chán ăn không?</li>
          <li>Mỗi ngày Con ăn mấy bữa chính và bữa phụ?</li>
          <li>Con có ăn đủ 4 nhóm thực phẩm không? (tinh bột, đạm, rau, trái cây)</li>
          <li>Con có chỉ thích ăn 1 số món ko? Món gì ạ</li>
        </ul>
      </div>
    )
  },
  {
    id: 10,
    title: 'Môi trường',
    description: (
      <div>
        <p>Con đang sống ở đâu? (nhà riêng, chung cư, nhà thuê, ở cùng ông bà...)</p>
        <p>Không gian sống có đủ ánh sáng tự nhiên và thông thoáng không?</p>
      </div>
    )
  },
  {
    id: 11,
    title: 'Giấc ngủ',
    children: [
      {
        id: 111,
        title: 'Tốt nhất là từ 21h00 đến trước 22h00 (đây là lúc hoocmone tăng trưởng GH tiết ra)',
        description: (
          <div>
            <p>Con đi ngủ lúc mấy giờ và thức dậy lúc mấy giờ mỗi ngày?</p>
            <p>Con có khó ngủ, trằn trọc lâu mới ngủ hay không?</p>
          </div>
        )
      },
      {
        id: 112,
        title: 'Khả năng phục hồi của cơ thể',
        description: (
          <div>
            <p>Sau khi ngủ dậy, Con cảm thấy tỉnh táo hay vẫn buồn ngủ, mệt mỏi?</p>
          </div>
        )
      }
    ]
  },
  {
    id: 12,
    title: 'Vận động',
    description: (
      <div>
        <p>Mỗi ngày Con vận động khoảng bao lâu?</p>
        <p>Con có thích tham gia vận động ko? Con thường tham gia hoạt động thể chất nào</p>
        <p>Con có cảm thấy mệt, đau khớp hay khó chịu sau khi vận động không?</p>
      </div>
    )
  },
  {
    id: 13,
    title: 'Tinh thần',
    description: (
      <div>
        <p>Con hay cáu bẳn, giận dỗi vô cớ?</p>
        <p>Con có bị áp lực về chuyện học hành?</p>
        <p>Con có học hành ko tập trung?</p>
        <p>Con có buồn ngủ ban ngày?</p>
      </div>
    )
  }
]