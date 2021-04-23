import React, { useState, useEffect } from 'react'
interface IProps {
  id?: number;
}
interface IProps {
    name:string
}

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
//接口會自動merge 
// useEffect 如果为空数组只猝发一次，如果没有第二个参数，则每次数据更新都会触发

const Child = (props:IProps)=>{
    useEffect(() => {
        console.info('effect')
    })
    useEffect(() => {
        console.info('effect2')
    },[])


    function identity<T>(arg: T): T {
        return arg;
    }

  return <>
  id是{props.id},name是{props.name}
  <p>{Direction.Up}</p>
  <p>{Direction.Down}</p>
  <p>{Direction.Right}</p>
  <p>{Direction.Left}</p>
  </>
}
export default Child