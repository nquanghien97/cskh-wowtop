'use client'

import React, { useState } from 'react'
import Create from './actions/Create'
import { SearchParams } from './types'
import { Button, Input } from 'antd'

interface HeaderProps {
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

function Header(props: HeaderProps) {
  const { setSearchParams, setRefreshKey } = props;
  const [inputValue, setInputValue] = useState('');
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const onSearch = () => {
    setSearchParams(pre => ({
      ...pre,
      search: inputValue
    }))
    setRefreshKey(pre => !pre)
  }
  return (
    <>
      <Create open={isOpenCreate} onClose={() => setIsOpenCreate(false)} setRefreshKey={setRefreshKey} />
      <div className="mb-2">
        <div className="mb-2">
          <Button type='primary' onClick={() => setIsOpenCreate(true)}>Thêm mới</Button>
        </div>
        <div className="flex items-center gap-2 w-full">
          <Input
            placeholder='Tìm kiếm triệu chứng'
            className="w-1/2"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            allowClear
          />
          <Button type='primary' onClick={onSearch}>Tìm kiếm</Button>
        </div>
      </div>
    </>
  )
}

export default Header