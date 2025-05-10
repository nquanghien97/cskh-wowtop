'use client'

import ArrowRight from '@/assets/icons/ArrowRight'
import React, { useEffect, useState } from 'react'
import { data, DataType } from './data'
import MessageIcon from '@/assets/icons/MessageIcon'

function KhaiThacThongTin() {

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({})

  useEffect(() => {
    document.title = "Khai thác thông tin"
  }, [])

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const toggleDescription = (id: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const renderItem = (item: DataType, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const hasDescription = !!item.description
    const isExpanded = expandedItems[item.id] || false
    const isDescriptionExpanded = expandedDescriptions[item.id] || false

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
              if (hasChildren) {
                toggleItem(item.id)
              } else if (hasDescription) {
                toggleDescription(item.id)
              }
            }}
          >
            <div className="flex items-start gap-2">
              {hasChildren ? (
                <div className="mt-1 flex-shrink-0">
                  {isExpanded ? <ArrowRight className="h-4 w-4 rotate-90 duration-300" /> : <ArrowRight className="h-4 w-4 duration-300" />}
                </div>
              ) : hasDescription ? (
                <div className="mt-1 flex-shrink-0">
                  {isDescriptionExpanded ? <ArrowRight className="h-4 w-4 rotate-90 duration-300" /> : <ArrowRight className="h-4 w-4 duration-300" />}
                </div>
              ) : (
                <div className="w-4" />
              )}
              <div>
                <div className="font-medium">{item.title}</div>
              </div>
            </div>
          </div>
        </div>

        {hasDescription && isDescriptionExpanded && (
          <div className="mt-1 ml-6 p-3 bg-gray-50 rounded-md border border-black">
            <div className="flex items-center text-xl mb-2">
              <MessageIcon className="h-5 w-5" />
              <span className=" ml-1 font-medium">Kịch bản:</span>
            </div>
            <div className="prose prose-sm max-w-none">{item.description}</div>
          </div>
        )}

        {hasChildren && isExpanded && (
          <div className="mt-2 ml-6 space-y-2">{item.children!.map((child) => renderItem(child, level + 1))}</div>
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