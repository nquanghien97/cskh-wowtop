import BanIcon from "@/assets/icons/BanIcon";
// import ChildrenIcon from "@/assets/icons/ChildrenIcon";
// import DocumentIcon from "@/assets/icons/DocumentIcon";
import FilesIcon from "@/assets/icons/FilesIcon";
// import FeedbackIcon from "@/assets/icons/FeedbackIcon";
// import PolicyIcon from "@/assets/icons/PolicyIcon";
// import ProductIcon from "@/assets/icons/ProductIcon";
// import ProposalIcon from "@/assets/icons/Proposal";
import WomenIcon from "@/assets/icons/WomenIcon";
import { JSX } from "react";

export interface MenuType {
  title: string;
  url: string;
  icon?: JSX.Element;
  allowRole?: string[];
  children?: MenuType[];
}

export const menuSidebar: MenuType[] = [
  {
    title: 'LẦN I',
    url: '#',
    icon: <FilesIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER'],
    children: [
      {
        title: 'Khai thác thông tin',
        url: '/khai-thac-thong-tin',
      },
      {
        title: 'Kết luận',
        url: '/ket-luan',
      },
      {
        title: 'Hướng dẫn sử dụng',
        url: '/huong-dan-su-dung',
      }
    ]
  },
  {
    title: 'LẦN N',
    url: '/lan-n',
    icon: <WomenIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'FEEDBACKS',
    url: '/feedbacks',
    icon: <WomenIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Giải đáp khách hàng',
    url: '/giai-dap-khach-hang',
    icon: <BanIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Hồ sơ khách hàng',
    url: '/ho-so-khach-hang',
    icon: <FilesIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER'],
  },
  // {
  //   title: 'Quản lý tư liệu',
  //   url: '#',
  //   icon: <FilesIcon width={16} height={16} />,
  //   allowRole: ['ADMIN', 'USER'],
  //   children: [
  //     {
  //       title: 'Chính sách bán hàng',
  //       url: '/chinh-sach-ban-hang',
  //       icon: <PolicyIcon width={16} height={16} />,
  //       category: 'SALES_POLICY',
  //       allowRole: ['ADMIN', 'USER'],
  //     },
  //     {
  //       title: 'Sản phẩm',
  //       url: '/san-pham',
  //       icon: <ProductIcon width={16} height={16} />,
  //       category: 'PRODUCTS',
  //       allowRole: ['ADMIN', 'USER']
  //     },
  //     {
  //       title: 'Giấy tờ sản phẩm',
  //       url: '/giay-to-san-pham',
  //       icon: <DocumentIcon width={16} height={16} />,
  //       category: 'PRODUCT_DOCUMENTS',
  //       allowRole: ['ADMIN', 'USER']
  //     },
  //     {
  //       title: 'Feedback KH',
  //       url: '/feedbacks-khach-hang',
  //       icon: <FeedbackIcon width={16} height={16} />,
  //       category: 'FEEDBACKS',
  //       allowRole: ['ADMIN', 'USER']
  //     },
  //     {
  //       title: 'Danh thiếp CSKH',
  //       url: '/danh-thiep-cskh',
  //       icon: <FilesIcon width={16} height={16} />,
  //       category: 'CSKH_CARD',
  //       allowRole: ['ADMIN', 'USER']
  //     },
  //   ]
  // },
]