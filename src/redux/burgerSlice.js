import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import styles from '@/components/BacklogGame.module.css';

const initialState  = [
    {
      id: uuid(),
      order: 'order-1',
      style: `bg-burger-meat active:burger-meat-active food ${styles.meat}`,
      parentClass: '',
      content: `會員系統 (登入、註冊、權限管理)`,
      point: 8,
    },
    {
      id: uuid(),
      order: 'order-3',
      style: `bg-burger-lettuce active:burger-lettuce-active food ${styles.lettuce}`,
      parentClass: 'ml-20',
      content: `應徵者的線上履歷編輯器`,
      point: 13,
    },
    {
      id: uuid(),
      order: 'order-2',
      style: `bg-burger-cheese active:burger-cheese-active food ${styles.cheese}`,
      parentClass: '',
      content: (
        <span>
          前台職缺列表
          <br />
          <span className="text-caption">(職缺詳細內容、點選可發送應徵意願)</span>
        </span>
      ),
      point: 8,
    },
    {
      id: uuid(),
      order: 'order-4',
      style: `bg-burger-tomato active:burger-tomato-active food ${styles.tomato}`,
      parentClass: 'ml-20',
      content: (
        <span>
          後台職缺管理功能
          <br />
          <span className="text-caption">(資訊上架、下架、顯示應徵者資料)</span>
        </span>
      ),
      point: 13,
    },
  ]

  const burgerSlice = createSlice({
    name: "burgerSlice",
    initialState,
    reducers: {
      getBurger:(state) => state
    }
  })
export default burgerSlice.reducer;