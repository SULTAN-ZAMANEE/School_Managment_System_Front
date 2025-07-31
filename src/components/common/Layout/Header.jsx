import React from "react"
import SelectLangBtn from "../UI/SelectLangBtn"

import ButtonComponent from "../UI/ButtonComponent"

export default function Header(){
  return(
    <>
      <div className='main-bg-color text-white h-5 p-3 d-flex justify-content-between'>
        <div className='d-flex justify-content-evenly align-items-center w-50'>
          <img src="../../../../public/logo192.png" style={{width: '100px'}} alt='logo' />
          <h1>نظام إدارة المدارس</h1>
        </div>
        <div className='d-flex justify-content-evenly align-items-center w-25'>
          <SelectLangBtn />
          <ButtonComponent>
            تسجيل الدخول
          </ButtonComponent>
        </div>
      </div>
    </>
  )
}