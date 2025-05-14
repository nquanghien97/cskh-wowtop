'use client'

import React, { useEffect, useState } from 'react'
import Header from './Header'
import { SearchParams } from './types';
import { AnswerCustomersEntity } from '@/entities/AnswerCustomerEntity';
import { toast } from 'react-toastify';
import { getAnswerCustomers } from '@/services/answer-customers';
import { Button, ConfigProvider, Empty, Table, TableColumnsType } from 'antd';
import Delete from './actions/Delete';
import Update from './actions/Update';
import withAuth from '@/hocs/withAuth';

function AnswerCustomers() {

  const [searchParams, setSearchParams] = useState<SearchParams>({ search: '', page: 1, pageSize: 10 });
  const [refreshKey, setRefreshKey] = useState(false);
  const [datas, setDatas] = useState<AnswerCustomersEntity[]>([]);
  const [data, setData] = useState<AnswerCustomersEntity>();
  const [total, setTotal] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  useEffect(() => {
    document.title = 'Giải đáp khách hàng'
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await getAnswerCustomers({
          ...searchParams,
        })
        setDatas(res.data)
        setTotal(res.total)
      } catch (err) {
        toast.error((err as Error).message)
      } finally {
        setLoading(false)
      }
    })()
  }, [searchParams, refreshKey])

  const columns: TableColumnsType<AnswerCustomersEntity> = [
    {
      title: 'Số TT',
      key: '1',
      width: 50,
      render: (_, __, index) => {
        return index + 1
      }
    },
    {
      title: 'Nhóm biểu hiện',
      key: '1.5',
      width: 100,
      dataIndex: 'category'
    },
    {
      title: 'Mã triệu chứng',
      key: '2',
      width: 100,
      dataIndex: 'symptomCode'
    },
    {
      title: 'Triệu chứng',
      key: '3',
      width: 150,
      dataIndex: 'symptom'
    },
    {
      title: 'CSKH',
      key: '4',
      width: 150,
      dataIndex: 'staffMessages',
      render: (values) => {
        return (
          <div>
            <p>{values}</p>
          </div>
        )
      }
    },
    {
      title: 'Khách hàng',
      key: '5',
      width: 150,
      dataIndex: 'customerMessages',
      render: (values) => {
        return (
          <div>
            <p>{values}</p>
          </div>
        )
      }
    },
    {
      title: 'Hướng xử trí/Tư vấn',
      key: '6',
      width: 400,
      dataIndex: 'content',
      render: (values) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: values }} />
        )
      }
    },
    {
      title: 'Tư vấn sản phẩm bổ sung',
      key: '7',
      width: 100,
      dataIndex: 'extraProducts',
      render: (values) => {
        return (
          <div dangerouslySetInnerHTML={{ __html: values }} />
        )
      }
    },
    {
      title: '',
      key: '7',
      width: 50,
      render: (value) => {
        return (
          <div className='flex gap-2 flex-col'>
            <Button
              type='primary'
              onClick={() => {
                setData(value)
                setIsOpenUpdate(true)
              }}
            >
              Sửa
            </Button>
            <Button
              type='primary'
              danger
              onClick={() => {
                setData(value)
                setIsOpenDelete(true)
              }}
            >
              Xóa
            </Button>
          </div>
        )
      }
    }
  ]

  const onChange = async (page: number, pageSize: number) => {
    setSearchParams({ ...searchParams, page, pageSize });
  }

  return (
    <>
      {(isOpenDelete && data) && <Delete open={isOpenDelete} onClose={() => setIsOpenDelete(false)} setRefreshKey={setRefreshKey} data={data} />}
      {(isOpenUpdate && data) && <Update open={isOpenUpdate} onClose={() => setIsOpenUpdate(false)} setRefreshKey={setRefreshKey} data={data} />}
      <div className="p-4">
        <h1 className="text-center text-4xl font-bold mb-4 py-4">GIẢI ĐÁP KHÁCH HÀNG</h1>
        <div className="bg-[#f4d798] shadow-xl rounded-xl p-4">
          <Header setSearchParams={setSearchParams} setRefreshKey={setRefreshKey} />
          <div>
            <ConfigProvider
              theme={{
                components: {
                  Table: {
                    borderColor: "#007bb5",
                    headerBg: "#f3ec90",
                    headerColor: 'black',
                  }
                }
              }}
              renderEmpty={() => <Empty description="Không có dữ liệu" />}
            >
              <Table
                loading={loading}
                bordered
                columns={columns}
                dataSource={datas}
                pagination={{
                  total,
                  pageSize: searchParams.pageSize,
                  onChange
                }}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  )
}

const AnswerCustomersWithAuth = withAuth(AnswerCustomers)

export default AnswerCustomersWithAuth