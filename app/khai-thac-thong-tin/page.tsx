'use client'

import ArrowRight from '@/assets/icons/ArrowRight'
import React, { useEffect, useState } from 'react'
import { data, DataType } from './data'
import MessageIcon from '@/assets/icons/MessageIcon'

function KhaiThacThongTin() {

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})

  useEffect(() => {
    document.title = "Khai thác thông tin"
  }, [])

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const renderItem = (item: DataType, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const hasDescription = !!item.description
    const isExpanded = expandedItems[item.id] || false

    return (
      <div key={item.id} className="mb-2">
        <div
          className={
            `flex items-start rounded-md border border-black transition-colors",
            ${level === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-white border-black"}
            ${hasChildren || hasDescription ? "cursor-pointer hover:bg-opacity-80" : ""}`
          }
        >
          <div
            className="flex-grow p-3"
            onClick={() => {
              toggleItem(item.id)
            }}
          >
            <div className="flex items-start gap-2">
              <div className="mt-1 flex-shrink-0">
                {isExpanded ? <ArrowRight className="h-4 w-4 rotate-90 duration-300" /> : <ArrowRight className="h-4 w-4 duration-300" />}
              </div>
              <div>
                <div className="font-medium">{item.title}</div>
              </div>
            </div>
          </div>
        </div>

        {isExpanded && (
          item.children!.map(child => (
            <div key={child.id}>
              <div className="mt-1 ml-6 p-3 bg-gray-50 rounded-md border border-black">
                <div className="mb-2">
                  <p className="text-xl font-semibold">{child.title}</p>
                </div>
                <div className="flex items-center text-xl mb-2">
                  <MessageIcon className="h-5 w-5" />
                  <span className=" ml-1 font-medium">Kịch bản:</span>
                </div>
                <div className="prose prose-sm max-w-none">{child.description}</div>
              </div>
            </div>
          ))
        )}
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-center mb-6 text-4xl font-semibold">Khai thác thông tin</h2>
      <div className="space-y-4">{data.map((item) => renderItem(item))}</div>
    </div>
  )
}

export default KhaiThacThongTin