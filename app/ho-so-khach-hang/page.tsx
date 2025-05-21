'use client'

import { Button, Checkbox, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react'
import HeightChart from './height-chart';
import { toast } from 'react-toastify';
import Insight from './insight';
import MaturationProcess from './maturation-process';
import { useHoSoKhachHangStore } from '@/stores/ho-so-khah-hang.stores';

enum Gender {
  BOY = "BOY",
  GIRL = 'GIRL'
}

export interface DataSubmit {
  currentHeight: string;
  currentWeight: string
  gender: Gender
  currentAge: string
  currentFatherHeight: string
  currentMotherHeight: string
  phoneNumber: string
  fullName: string
}

function CustomerProfile() {
  const [isShowResults, setIsShowResults] = useState(false);
  const [puberty, setPuberty] = useState<'infant' | 'pre-puberty' | 'puberty' | 'post-puberty' | undefined>()
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentFatherHeight, setCurrentFatherHeight] = useState('');
  const [currentMotherHeight, setCurrentMotherHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [gender, setGender] = useState<Gender>(Gender.BOY);
  const [currentAge, setCurrentAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [isOpenHeightChart, setIsOpenHeightChart] = useState(false);
  const [isOpenInsight, setIsOpenInsight] = useState(false);
  const [isOpenMaturationProcess, setIsOpenMaturationProcess] = useState(false);
  const [isRequiredFatherHeight, setIsRequiredFatherHeight] = useState(false);
  const [isRequiredMotherHeight, setIsRequiredMotherHeight] = useState(false);

  const [form] = Form.useForm();

  const { setHoSoData, hoSoData, } = useHoSoKhachHangStore()

  useEffect(() => {
    document.title = "Hồ sơ khách hàng"
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      currentHeight: hoSoData?.currentHeight,
      currentWeight: hoSoData?.currentWeight,
      gender: hoSoData?.gender,
      currentAge: hoSoData?.currentAge,
      currentFatherHeight: hoSoData?.currentFatherHeight,
      currentMotherHeight: hoSoData?.currentMotherHeight,
      phoneNumber: hoSoData?.phoneNumber,
      fullName: hoSoData?.fullName,
      puberty: hoSoData?.puberty
    })
    setPuberty(hoSoData?.puberty)
  }, [form, hoSoData?.currentWeight, hoSoData?.currentHeight, hoSoData?.gender, hoSoData?.currentAge, hoSoData?.currentFatherHeight, hoSoData?.currentMotherHeight, hoSoData?.phoneNumber, hoSoData?.fullName, hoSoData?.puberty])

  useEffect(() => {
    if (hoSoData) {
      setPuberty(hoSoData.puberty)
      setCurrentHeight(hoSoData.currentHeight)
      setCurrentFatherHeight(hoSoData.currentFatherHeight)
      setCurrentMotherHeight(hoSoData.currentMotherHeight)
      setCurrentWeight(hoSoData.currentWeight)
      setGender(hoSoData.gender)
      setCurrentAge(hoSoData.currentAge)
      setPhoneNumber(hoSoData.phoneNumber)
      setFullName(hoSoData.fullName)
    }
  }, [hoSoData])

  const handleCheckboxChange = (value: 'infant' | 'pre-puberty' | 'puberty' | 'post-puberty') => {
    setPuberty(value);
  }

  useEffect(() => {
    if (isRequiredMotherHeight) {
      setTimeout(() => {
        setIsRequiredMotherHeight(false)
      }, 5000)
    }
    if (isRequiredFatherHeight) {
      setTimeout(() => {
        setIsRequiredFatherHeight(false)
      }, 5000)
    }
  }, [isRequiredFatherHeight, isRequiredMotherHeight])

  const handleSubmit = (values: DataSubmit) => {
    if(Number(currentAge) > 20) {
      toast.warning('Tuổi của bé không được vượt quá 20')
      return
    }
    setIsShowResults(true)
    setHoSoData({
      ...values,
      puberty
    })
  }

  return (
    <>
      <HeightChart
        open={isOpenHeightChart}
        onCancel={() => setIsOpenHeightChart(false)}
        data={{
          currentHeight: Number(currentHeight),
          currentFatherHeight: Number(currentFatherHeight),
          currentMotherHeight: Number(currentMotherHeight),
          currentWeight: Number(currentWeight),
          gender,
          currentAge: Number(currentAge),
          phoneNumber,
          fullName,
        }}
      />
      <Insight
        open={isOpenInsight}
        onClose={() => setIsOpenInsight(false)}
        currentHeight={currentHeight}
        currentWeight={currentWeight}
        gender={gender}
        currentAge={currentAge}
        puberty={puberty}
        phoneNumber={phoneNumber}
        fullName={fullName}
      />
      <MaturationProcess
        open={isOpenMaturationProcess}
        onClose={() => setIsOpenMaturationProcess(false)}
        currentAge={Number(currentAge)}
        fullName={fullName}
        phoneNumber={phoneNumber}
        gender={gender}
        currentHeight={Number(currentHeight)}
        currentWeight={Number(currentWeight)}
        puberty={puberty}
      />
      <div className="p-4">
        <h1 className="text-center text-4xl font-bold mb-4 py-4">HỒ SƠ KHÁCH HÀNG</h1>
        <div className="bg-[#f4d798] shadow-xl p-4 rounded-xl mb-4">
          <h2 className="text-xl mb-4">Nhập thông tin khách hàng</h2>
          <Form form={form} onFinish={handleSubmit} className="flex gap-4 items-center" onChange={() => setIsShowResults(false)}>
            <div className="flex gap-8">
              <div className="flex gap-4 flex-wrap justify-around">
                <Form.Item
                  label={<p className="min-w-[120px]">Chiều cao con (cm)</p>}
                  className="flex flex-col px-2 w-[40%] !mb-0"
                  name="currentHeight"
                  rules={[
                    {
                      required: true,
                      message: "Trường này là bắt buộc"
                    },
                  ]}
                >
                  <Input
                    placeholder='Chiều cao con (cm)'
                    onChange={(e) => setCurrentHeight(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label={<p className="min-w-[120px]">Cân nặng con (kg)</p>}
                  className="flex flex-col px-2 w-[40%] !mb-0"
                  name="currentWeight"
                  rules={[
                    {
                      required: true,
                      message: "Trường này là bắt buộc"
                    },
                  ]}
                >
                  <Input
                    placeholder='Cân nặng con (kg)'
                    onChange={(e) => setCurrentWeight(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label={<p className="min-w-[120px]">Giới tính con</p>}
                  className="flex flex-col px-2 w-[40%] !mb-0"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: "Trường này là bắt buộc"
                    },
                  ]}
                >
                  <Select
                    options={[{ label: 'Nam', value: 'BOY' }, { label: 'Nữ', value: 'GIRL' }]}
                    placeholder='Giới tính con'
                    onChange={(e) => setGender(e as Gender)}
                  />
                </Form.Item>
                <Form.Item
                  label={<p className="min-w-[120px]">Tuổi con</p>}
                  className="flex flex-col px-2 w-[40%] !mb-0"
                  name="currentAge"
                  rules={[
                    {
                      required: true,
                      message: "Trường này là bắt buộc"
                    },
                  ]}
                >
                  <Input
                    placeholder='Tuổi con'
                    onChange={(e) => setCurrentAge(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label={<p className="min-w-[120px]">Chiều cao bố (cm)</p>}
                  className={`flex flex-col px-2 w-[40%] !mb-0 ${isRequiredFatherHeight && 'blink-shadow'}`}
                  name="currentFatherHeight"
                >
                  <Input
                    placeholder='Chiều cao bố (cm)'
                    onChange={(e) => setCurrentFatherHeight(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label={<p className="min-w-[120px]">Chiều cao mẹ (cm)</p>}
                  className={`flex flex-col px-2 w-[40%] !mb-0 ${isRequiredMotherHeight && 'blink-shadow'}`}
                  name="currentMotherHeight"
                >
                  <Input
                    placeholder='Chiều cao mẹ (cm)'
                    onChange={(e) => setCurrentMotherHeight(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label={<p className="min-w-[120px]">Số điện thoại</p>}
                  className={`flex flex-col px-2 w-[40%] !mb-0 ${isRequiredFatherHeight && 'blink-shadow'}`}
                  name="phoneNumber"
                >
                  <Input
                    placeholder='Số điện thoại'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  label={<p className="min-w-[120px]">Tên Ba/Mẹ</p>}
                  className={`flex flex-col px-2 w-[40%] !mb-0 ${isRequiredFatherHeight && 'blink-shadow'}`}
                  name="fullName"
                >
                  <Input
                    placeholder='Tên Ba/Mẹ'
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="w-1/2">
                <Form.Item
                  name="puberty"
                  rules={[
                    {
                      required: true,
                      message: "Trường này là bắt buộc"
                    },
                  ]}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 w-[140px] items-center">
                      <p className="text-[#2563eb] w-full">0 - 2 tuổi</p>
                      <Checkbox
                        checked={puberty === 'infant'}
                        onChange={() => handleCheckboxChange('infant')}
                      />
                    </div>
                    <div className="flex gap-2 w-[140px] items-center">
                      <p className="text-[#2563eb] w-full">Chưa dậy thì</p>
                      <Checkbox
                        checked={puberty === 'pre-puberty'}
                        onChange={() => handleCheckboxChange('pre-puberty')}
                      />
                    </div>
                    <div className="flex gap-2 w-[140px] items-center">
                      <p className="text-[#2563eb] w-full">Đang dậy thì</p>
                      <Checkbox
                        checked={puberty === 'puberty'}
                        onChange={() => handleCheckboxChange('puberty')}
                      />
                    </div>
                    <div className="flex gap-2 w-[140px] items-center">
                      <p className="text-[#2563eb] w-full">Đã dậy thì</p>
                      <Checkbox
                        checked={puberty === 'post-puberty'}
                        onChange={() => handleCheckboxChange('post-puberty')}
                      />
                    </div>
                  </div>
                </Form.Item>
              </div>
            </div>
            <div className="mx-8">
              <Button type='primary' htmlType='submit'>Xác nhận</Button>
            </div>
          </Form>
        </div>
        {isShowResults && (
          <div className="flex gap-4">
            <div>
              <Button type='primary' onClick={() => setIsOpenInsight(true)}>Xem Insight của bé</Button>
            </div>
            <div>
              <Button
                type='primary'
                onClick={() => {
                  if (!currentFatherHeight && !currentMotherHeight) {
                    setIsRequiredFatherHeight(true);
                    setIsRequiredMotherHeight(true);
                    toast.warning('Vui lòng nhập chiều cao bố và chiều cao mẹ để xem phác đồ dự đoán chiều cao')
                    return;
                  }
                  if (!currentMotherHeight) {
                    setIsRequiredMotherHeight(true);
                    toast.warning('Vui lòng nhập chiều cao mẹ để xem phác đồ dự đoán chiều cao')
                    return;
                  }
                  if (!currentFatherHeight) {
                    setIsRequiredFatherHeight(true);
                    toast.warning('Vui lòng nhập chiều cao bố để xem phác đồ dự đoán chiều cao')
                    return;
                  }

                  setIsOpenHeightChart(true)
                }}
              >
                Xem phác đồ dự đoán chiều cao
              </Button>
            </div>
            <div>
              <Button
                type='primary'
                onClick={() => {
                  setIsOpenMaturationProcess(true)
                }}
              >
                Xem quá trình trưởng thành của bé
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CustomerProfile

