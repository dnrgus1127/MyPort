import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Readme() {
    const navigate = useNavigate();
  return (
      <div>
          <button onClick={() => {
              navigate(-1);
          }}>뒤로가기</button>
    </div>
  )
}
