import React from 'react'
import { DataType } from './data'

function TableItem(props: { data: DataType, label: string }) {

  const { data, label } = props

  return (
    <tr className="bg-[#fff]">
      <td className="font-semibold border border-blue-500 text-xl p-2 w-[8%] text-center">{label}</td>
      <td className="border border-blue-500 p-2 w-[10%] text-center">{data?.title}</td>
      <td className="border border-blue-500 p-2 w-[15%]">
        {data?.tinh_huong_thuong_gap.map(item => (
          <ul key={item} className="list-disc list-inside">
            <li className="mb-2">{item}</li>
          </ul>
        ))}
      </td>
      <td className="border border-blue-500 p-2 w-[20%]">
        {data?.nguyen_nhan.map(item => (
          <ul key={item} className="list-disc list-inside">
            <li className="mb-2">{item}</li>
          </ul>
        ))}
      </td>
      <td className="border border-blue-500 p-2 w-[27%]">
        {data?.giai_phap.map(item => (
          <ul key={item} className="list-disc list-inside">
            <li className="mb-2">{item}</li>
          </ul>
        ))}
      </td>
      <td className="border border-blue-500 p-2 w-[20%]">
        {data?.luu_y.map(item => (
          <ul key={item} className="list-disc list-inside">
            <li className="mb-2">{item}</li>
          </ul>
        ))}
      </td>
    </tr>
  )
}

export default TableItem